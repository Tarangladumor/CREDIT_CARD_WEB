import React from 'react'
import Footer from '../common/Footer'

const TermOfService = () => {
  return (
    <div>
      <div className='flex flex-col mt-4 '>

        <h1 className='mx-auto text-[40px] font-semibold'>Term Of Service</h1>
        <div className='border-[#159A9C] border-b-4 md:border-b-[5px] mx-auto w-[8%]'></div>

      </div>

      <div className='flex flex-col w-9/12 justify-center mx-auto gap-9 '>

        <p className='text-[18px] mt-6'>
        Welcome to CardPouch (https://www.cardpouch.com). By accessing or using our website, you agree to comply with and be bound by the following terms and conditions. If you do not agree with these terms, please do not use our website.

        </p>

        <p className='text-[18px]'>
        CardPouch provides a platform for users to compare credit card offers, benefits, and features. All information on the site is for informational purposes only and should not be considered financial or legal advice.
        </p>

        <p className='text-[18px]'>
        You agree to use the website only for lawful purposes and in a way that does not infringe the rights of others or restrict their use of the website.
        </p>

        <p className='text-[18px]'>
        We strive to provide accurate and up-to-date information about credit cards and their features. However, we cannot guarantee the accuracy, completeness, or reliability of the information provided. Credit card offers, rates, and terms are subject to change by the issuers, and we encourage you to verify all details directly with the issuer before applying.
        </p>

        <p className='text-[18px]'>
        CardPouch may earn a commission through affiliate links when users click on certain links and make purchases or sign up for services. These commissions help support the operation of our website. This does not influence the credit cards or offers featured on our platform, and we remain committed to providing unbiased and honest information.
        </p>

        <p className='text-[18px]'>
        CardPouch provides the website and its contents on an "as-is" basis, without any warranties of any kind, express or implied. We do not guarantee the availability of the website, the accuracy of the content, or that any errors will be corrected. Your use of the website is at your own risk.
        </p>

        <p className='text-[18px]'>
        We make no guarantees regarding the outcomes of any credit card application or offer displayed on our website, as decisions are made solely by the credit card issuers.
        </p>

        <p className='text-[18px]'>
        To the fullest extent permitted by law, CardPouch, its owners, affiliates, and partners will not be liable for any indirect, incidental, consequential, or punitive damages arising out of your use or inability to use the website or any information provided. This includes but is not limited to damages for loss of profits, data, or business opportunities.
        </p>

        <p className='text-[18px]'>
        CardPouch may include links to third-party websites for your convenience. These websites are not controlled or operated by us, and we are not responsible for their content or privacy practices. Your interactions with third-party sites are governed by their own terms and policies.
        </p>

        <p className='text-[18px]'>
        CardPouch reserves the right to modify these Terms of Service at any time. Changes will be posted on this page, and continued use of the website after changes are posted constitutes acceptance of the updated terms.
        </p>

        <p className='text-[18px]'>
        If you have any questions or concerns about these Terms of Service, please contact us at support@cardpouch.com.
        </p>

      </div>

      <div className='mt-20'>
        <Footer />
      </div>
    </div>
  )
}

export default TermOfService