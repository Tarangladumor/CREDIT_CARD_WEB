import React,{useEffect} from 'react'
import Footer from '../common/Footer'

const PrivacyPolicy = () => {
    useEffect(() => {
        window.scrollTo({
          top: 0,              // Scroll to the top of the page
          behavior: 'smooth'   // Smooth scroll effect
        });
      }, []);
    return (
        <div>
            <div className='flex flex-col mt-4 '>

                <h1 className='mx-auto text-[40px] font-semibold'>Privacy Policy</h1>
                <div className='border-[#159A9C] border-b-4 md:border-b-[5px] mx-auto w-[8%]'></div>

            </div>

            <div className='flex flex-col w-9/12 justify-center mx-auto gap-9 '>

                <p className='text-[18px] mt-6'>
                At CardPouch (https://www.cardpouch.com), we help users discover and compare credit card benefits, features, and offers. Protecting your privacy and personal data is of utmost importance to us.
                </p>

                <p className='text-[18px]'>
                When visitors leave comments on our site, we collect the data shown in the comments form, as well as the visitor's IP address and browser user agent string to help detect spam.
                </p>

                <p className='text-[18px]'>
                If you fill out any contact forms on our website, we collect the information you provide, such as your name, email address, and any message you submit. We use this information to respond to your inquiries and improve our services.
                </p>

                <p className='text-[18px]'>
                We use cookies to enhance your experience on CardPouch. Cookies are small data files stored on your device, helping us understand how you interact with our site and improve the experience.
                </p>

                <p className='text-[18px]'>
                We use analytics tools to track website performance, user behavior, and navigation. This data helps us optimize content and improve the user experience. Analytics data is collected in aggregate form and does not include personally identifiable information.
                </p>

                <p className='text-[18px]'>
                CardPouch does not sell, rent, or trade your personal information to third parties. However, we may share your data with trusted third-party service providers who help operate our website and services (e.g., hosting providers, analytics services). These providers are bound by confidentiality agreements to ensure your information is protected.
                </p>

                <p className='text-[18px]'>
                If you leave a comment, the comment and its metadata are retained indefinitely. This allows us to recognize and approve follow-up comments without manual moderation.
                </p>

                <p className='text-[18px]'>
                We take data protection seriously and implement reasonable measures to ensure your data is secure. This includes using secure server hosting, encryption, and access control measures to safeguard your information from unauthorized access.
                </p>

                <p className='text-[18px]'>
                We may update this Privacy Policy from time to time to reflect changes in our practices or services. Any updates will be posted on this page, and we encourage you to review this policy periodically.
                </p>

                <p className='text-[18px]'>
                If you have any questions about our Privacy Policy or how we handle your data, please contact us at support@cardpouch.com.
                </p>

            </div>

            <div className='mt-20'>
                <Footer />
            </div>

        </div>
    )
}

export default PrivacyPolicy