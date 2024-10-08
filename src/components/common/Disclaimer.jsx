import React,{useEffect} from 'react'
import Footer from '../common/Footer'

const DisclaimerPage = () => {
    useEffect(() => {
        window.scrollTo({
          top: 0,              // Scroll to the top of the page
          behavior: 'smooth'   // Smooth scroll effect
        });
      }, []);
    return (
        <div >

            <div className='flex flex-col mt-4 '>

                <h1 className='mx-auto text-[40px] font-semibold'>Disclaimer</h1>
                <div className='border-[#159A9C] border-b-4 md:border-b-[5px] mx-auto w-[8%]'></div>

            </div>

            <div className='flex flex-col w-9/12 justify-center mx-auto gap-9 '>

                <p className='text-[18px] mt-6'>
                    CardPouch provides information about various credit cards, their features, benefits, and offers. We strive to ensure that the information on our website is accurate and up-to-date. However, product details, prices, rewards, and availability are subject to change and may vary from what is displayed on the credit card issuer’s or merchant’s website.
                </p>

                <p className='text-[18px]'>
                    CardPouch does not control and cannot guarantee the accuracy, completeness, legality, or quality of the information or offers provided by credit card issuers or third-party merchants. Any credit card offers, promotions, or benefits displayed on our website are subject to the terms and conditions of the respective issuers and merchants, and may be changed or withdrawn at any time.
                </p>

                <p className='text-[18px]'>
                    The availability of credit card products or offers may depend on your financial status, and approval is subject to the credit card issuer's assessment and policies. CardPouch does not take responsibility for decisions made by issuers or merchants regarding applications, approvals, or promotions.
                </p>

                <p className='text-[18px]'>
                    Please review all terms, conditions, and details directly on the credit card issuer’s or merchant’s website before making any decisions or transactions.
                </p>

            </div>

            <div className='mt-20'>
              <Footer/>
            </div>
           


        </div>
    )
}

export default DisclaimerPage
