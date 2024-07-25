import { Card } from '../models/Card.js';
import { respond } from '../utils/response.js';

export const compareCards = async(req,res)=>{
    try{

        const { cardId1, cardId2 } = req.body;

        const card1 = await Card.findById(cardId1)
          .populate('charges')
          .populate('network')
          .populate('additionalBenefits')
          .populate('ratingAndReviews')
          .exec();
        const card2 = await Card.findById(cardId2)
          .populate('charges')
          .populate('network')
          .populate('additionalBenefits')
          .populate('ratingAndReviews')
          .exec();
    
        if (!card1 || !card2) {
          return res.status(404).json({
            success: false,
            message: 'One or both cards not found',
          });
        }

        const getCharges = (chargesArray) => {
          const charges = chargesArray[0];
          return charges
            ? {
                annualFee: charges.annualFee,
                joiningFee: charges.joiningFee,
                APR: charges.annualPercentageRate,
                addOnCardFee: charges.addOnCardFee,
                minimumRepaymentAmount: charges.minimumRepaymentAmount,
                cashAdvanceLimit: charges.cashAdvanceLimit,
              }
            : {};
        };

        const getAdditionalBenefits = (additionalBenefitsArray) => {
          const benefits = additionalBenefitsArray[0];

          return benefits
            ? {

              diningBenefits: benefits.diningBenefit && benefits.diningBenefit.length > 0 
              ? benefits.diningBenefit.map(b => ({
                  listData: b.listData,
                  note: b.note,
                })) 
              : null,
            travelBenefits: benefits.travelBenefit && benefits.travelBenefit.length > 0 
              ? benefits.travelBenefit.map(b => ({
                  listData: b.listData,
                  note: b.note,
                })) 
              : null,
            milestoneBenefits: benefits.milestoneBenefit && benefits.milestoneBenefit.length > 0 
              ? benefits.milestoneBenefit.map(b => ({
                  listData: b.listData,
                  note: b.note,
                })) 
              : null,
            shoppingBenefits: benefits.shoppingBenefit
              ? benefits.shoppingBenefit.map(b => ({
                  listData: b.listData,
                  note: b.note,
                })) 
              : null,

              }
            : {};
        };

        const getRatingAndReviews = (ratingAndReviewsArray) => {
          return ratingAndReviewsArray.length > 0
            ? ratingAndReviewsArray.map(review => ({
                author: review.Author,
                rating: review.rating,
                description: review.description,
                createdAt: review.createdAt,
              }))
            : [];
        };

        const comparison = {
          card1: {
            cardType: card1.type,
            network: card1.network.map(n => n.name), 
            ...getCharges(card1.charges),
            ...getAdditionalBenefits(card1.additionalBenefits),
            ratingAndReviews: getRatingAndReviews(card1.ratingAndReviews),
          },
          card2: {
            cardType: card2.type,
            network: card2.network.map(n => n.name), 
            ...getCharges(card2.charges),
            ...getAdditionalBenefits(card2.additionalBenefits),
            ratingAndReviews: getRatingAndReviews(card2.ratingAndReviews),
          },
        };

        return respond(res, 'Cards compared successfully',200,true,comparison);
        
    }catch(error){
        console.error(error);
        return respond(res,'Error in comparing cards',500,false);
    
    }

}