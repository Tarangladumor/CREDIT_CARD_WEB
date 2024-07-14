import { Faq } from "../models/Faq.js";
import { respond } from "../utils/response.js";
import { Card } from "../models/Card.js";

export const createFaq = async (req, res) => {
  try {
    const { cardId, question, answer } = req.body;

    if (!cardId) {
      return respond(res, "card is not found", 400, false);
    }

    const cardFaq = await Faq.create({
      question,
      answer,
    });

    const updatedCardDetails = await Card.findByIdAndUpdate(
      cardId,
      {
        $push: {
          faq: cardFaq._id,
        },
      },
      { new: true }
    )
      .populate("faq")
      .exec();

    return respond(
      res,
      "Fqq created successfully",
      200,
      true,
      updatedCardDetails
    );
  } catch (error) {
    console.log(error);
    return respond(
      res,
      "something went wrong while creating the Faq",
      500,
      false
    );
  }
};

export const updateFaq = async (req, res) => {
  try {
    const { faqId, question, answer } = req.body;

    if (!faqId) {
      return respond(res, "faq is not found", 400, false);
    }

    const updatedFaq = await Faq.findByIdAndUpdate(faqId, {
      question,
      answer,
    });

    return respond(res, "updating the faq done", 200, true, updatedFaq);
  } catch (error) {
    console.log(error);
    return respond(
      res,
      "something went wrong while updating the faq",
      500,
      false
    );
  }
};

export const deleteFaq = async (req, res) => {
  try {
    const { faqId } = req.body;

    if (!faqId) {
      return respond(res, "faqid is not found", 400, false);
    }

    const faq = await Faq.findById(faqId);
    if (!faq) {
      return respond(res, "FAQ not found", 404, false);
    }

    await Card.updateMany({ faq: faqId }, { $pull: { faq: faqId } });

    await Faq.findByIdAndDelete(faqId);

    return respond(res, "deleting the faq done", 200, true);
  } catch (error) {
    console.log(error);
    return respond(
      res,
      "something went wrong while deleting the faq",
      500,
      false
    );
  }
};
