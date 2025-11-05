"use client"
import { useState } from 'react';

export default function FAQ() {
  const [openItems, setOpenItems] = useState([]);

  const toggleItem = (index) => {
    setOpenItems(prev => 
      prev.includes(index) 
        ? prev.filter(item => item !== index)
        : [...prev, index]
    );
  };

  const faqItems = [
    {
      question: "How do I create a patient account?",
      answer: "Creating a patient account is simple. Click the 'Sign Up' button on our homepage, select 'Patient' as your role, and fill in your personal details including name, email, phone number, and date of birth. You'll receive a verification email to activate your account. Once verified, you can complete your medical profile and start booking appointments."
    },
    {
      question: "How can healthcare professionals register on MediSaaS?",
      answer: "Medical professionals can register by clicking 'Join as Professional' on our signup page. You'll need to provide your medical license details, specialization, qualifications, and professional credentials. Our verification team will review your application within 24-48 hours. Once approved, you can set up your availability and start accepting patients."
    },
    {
      question: "What's the difference between Dietitian and Nutritionist registration?",
      answer: "Dietitians require specific clinical qualifications and licensing in most regions. When registering as a Dietitian, you'll need to upload your professional license and certifications. Nutritionists can register with relevant educational qualifications. Both roles have access to our diet planning tools, but Dietitians get additional clinical assessment features for medical nutrition therapy."
    },
    {
      question: "How do I book an appointment with a specialist?",
      answer: "After logging into your patient account, go to the 'Find Specialists' section. You can search by specialty, location, or specific doctor name. View available time slots, select your preferred appointment type (in-person or virtual), and book instantly. You'll receive confirmation and reminders via email and SMS."
    },
    {
      question: "Is my medical data secure on MediSaaS?",
      answer: "Absolutely. We use bank-level encryption and are fully HIPAA compliant. All patient data is encrypted in transit and at rest. We undergo regular security audits and maintain strict access controls. Your medical information is only accessible to you and healthcare providers you explicitly authorize."
    },
    {
      question: "How do virtual consultations work?",
      answer: "Virtual consultations are conducted through our secure video platform. After booking a virtual appointment, you'll receive a unique link. At your scheduled time, click the link to join the video call. Our platform supports screen sharing for test results, prescription management, and secure file sharing during the consultation."
    },
    {
      question: "Can I access my medical records through MediSaaS?",
      answer: "Yes, patients have 24/7 access to their complete medical records including consultation notes, test results, prescriptions, and treatment plans. You can download your records, share them with other healthcare providers, and maintain a comprehensive health history all in one place."
    },
    {
      question: "What payment methods are accepted?",
      answer: "We accept all major credit cards, debit cards, insurance claims, and flexible spending accounts (FSA/HSA). For healthcare providers, we offer multiple payment processing options including direct insurance billing and patient co-pay management."
    },
    {
      question: "How do I reset my password or recover my account?",
      answer: "Click 'Forgot Password' on the login page and enter your registered email address. You'll receive a secure link to reset your password. For additional security, we may require identity verification for account recovery to protect your sensitive medical information."
    },
    {
      question: "Can I use MediSaaS for my entire medical practice?",
      answer: "Yes! MediSaaS offers comprehensive practice management tools including appointment scheduling, patient records, billing, prescription management, and telemedicine. We support solo practitioners, group practices, and multi-specialty clinics with customizable workflows and integration capabilities."
    },
    {
      question: "How do medication reminders work?",
      answer: "After your doctor prescribes medication through the platform, you can set up custom reminders. Choose your preferred notification method (app notifications, SMS, or email), set the frequency and timing, and never miss a dose. The system also tracks adherence and can share reports with your healthcare provider."
    },
    {
      question: "What support is available if I need help?",
      answer: "We offer 24/7 customer support through multiple channels: live chat within the platform, email support, and phone support for urgent issues. We also have extensive help documentation, video tutorials, and dedicated account managers for healthcare practices."
    },
    {
      question: "Can I switch between patient and provider accounts?",
      answer: "Yes, if you're both a healthcare professional and a patient, you can link your accounts and switch between roles seamlessly. Your data remains completely separate and secure between professional and personal use cases."
    }
    
    
  ];

  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Find quick answers to common questions about using MediSaaS for your healthcare needs
          </p>
        </div>

        {/* FAQ Items */}
        <div className="space-y-4">
          {faqItems.map((item, index) => (
            <div 
              key={index}
              className="border border-gray-200 rounded-2xl shadow-sm hover:shadow-md transition-all duration-300 bg-white"
            >
              <button
                className="w-full px-6 py-6 text-left flex items-center justify-between focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-inset rounded-2xl"
                onClick={() => toggleItem(index)}
              >
                <h3 className="text-lg font-semibold text-gray-900 pr-4">
                  {item.question}
                </h3>
                <svg 
                  className={`w-6 h-6 text-emerald-600 transition-transform duration-300 flex-shrink-0 ${
                    openItems.includes(index) ? 'rotate-180' : ''
                  }`}
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              
              {openItems.includes(index) && (
                <div className="px-6 pb-6 animate-in fade-in-50 slide-in-from-top-2">
                  <div className="border-t border-gray-100 pt-4">
                    <p className="text-gray-700 leading-relaxed">
                      {item.answer}
                    </p>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Additional Help Section */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-emerald-50 to-blue-50 rounded-2xl p-8 border border-emerald-100">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Still have questions?
            </h3>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              Our support team is here to help you get the most out of MediSaaS. 
              Whether you're a patient, doctor, or healthcare administrator, we're ready to assist you.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-emerald-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-emerald-700 transition-colors duration-200 shadow-lg hover:shadow-xl">
                Contact Support
              </button>
              <button className="border border-emerald-600 text-emerald-700 px-8 py-3 rounded-lg font-semibold hover:bg-emerald-50 transition-colors duration-200">
                Schedule Demo
              </button>
            </div>
          </div>
        </div>

        {/* Quick Links */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
          <div className="p-6 bg-gray-50 rounded-xl hover:bg-emerald-50 transition-colors duration-200">
            <div className="w-12 h-12 bg-emerald-100 rounded-lg flex items-center justify-center mx-auto mb-4">
              <svg className="w-6 h-6 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
              </svg>
            </div>
            <h4 className="font-semibold text-gray-900 mb-2">Patient Guides</h4>
            <p className="text-sm text-gray-600">Step-by-step tutorials for patients</p>
          </div>
          
          <div className="p-6 bg-gray-50 rounded-xl hover:bg-blue-50 transition-colors duration-200">
            <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-4">
              <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
              </svg>
            </div>
            <h4 className="font-semibold text-gray-900 mb-2">Provider Resources</h4>
            <p className="text-sm text-gray-600">Tools and guides for healthcare professionals</p>
          </div>
          
          <div className="p-6 bg-gray-50 rounded-xl hover:bg-orange-50 transition-colors duration-200">
            <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mx-auto mb-4">
              <svg className="w-6 h-6 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
              </svg>
            </div>
            <h4 className="font-semibold text-gray-900 mb-2">Live Chat Support</h4>
            <p className="text-sm text-gray-600">Get instant help from our team</p>
          </div>
        </div>
      </div>
    </section>
  );
}