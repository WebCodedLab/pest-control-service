import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';
import { ChevronDown, ChevronUp } from 'lucide-react';
import Button from '../components/Button';

const faqs = [
    {
        question: "What pests do you treat?",
        answer: "We treat a wide range of pests including but not limited to ants, bed bugs, cockroaches, mice, rats, wasps, and more. If you have a specific pest problem, please contact us for a tailored solution."
    },
    {
        question: "Are your pest control methods safe for children and pets?",
        answer: "Yes, we prioritize the safety of your family and pets. We use eco-friendly and low-toxicity products whenever possible. We also provide safety instructions for any treatments we apply."
    },
    {
        question: "How quickly can you respond to a pest emergency?",
        answer: "We offer same-day service for pest emergencies. Contact us as soon as possible, and we'll do our best to address your pest problem promptly."
    },
    {
        question: "Do you offer commercial pest control services?",
        answer: "Yes, we provide comprehensive pest control solutions for businesses of all sizes. Our commercial services are tailored to meet the specific needs of your industry and comply with all relevant regulations."
    },
    {
        question: "How often should I schedule pest control treatments?",
        answer: "The frequency of treatments depends on various factors such as the type of pest, severity of the infestation, and your property's characteristics. We typically recommend quarterly treatments for ongoing prevention, but we can create a custom schedule based on your specific needs."
    },
    {
        question: "Do you provide warranties or guarantees for your services?",
        answer: "Yes, we stand behind our work. We offer a satisfaction guarantee and will return to re-treat at no additional cost if pests return within a specified period after treatment."
    },
    {
        question: "What should I do to prepare for a pest control treatment?",
        answer: "We'll provide you with specific instructions before your scheduled treatment. Generally, you should remove pets, cover or put away food and utensils, and ensure easy access to areas that need treatment. We'll give you a detailed checklist to ensure everything is properly prepared."
    },
    {
        question: "Are your pest control products environmentally friendly?",
        answer: "Yes, we prioritize using environmentally friendly and sustainable pest control methods whenever possible. Our eco-friendly solutions are designed to be effective against pests while minimizing the impact on the environment."
    }
];

const FAQ = () => {
    const [openIndex, setOpenIndex] = useState(null);

    const toggleFAQ = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <>
            <SEO
                title="Frequently Asked Questions | Toronto Pest Control"
                description="Find answers to common questions about our pest control services in Toronto. Learn about our methods, safety practices, and more."
                canonicalUrl="https://www.torontopestcontrol.com/faq"
            />
            <div className="mx-auto max-w-screen-lg py-12">
                <h1 className="text-4xl font-bold text-center mb-12 animate-fadeIn">Frequently Asked Questions</h1>
                <div id="accordion-collapse" data-accordion="collapse" className="max-w-3xl mx-auto">
                    {faqs.map((faq, index) => (
                        <div key={index} className="animate-slideIn delay-100">
                            <h2 id={`accordion-collapse-heading-${index + 1}`}>
                                <button
                                    type="button"
                                    className={`flex items-center justify-between w-full p-5 font-medium rtl:text-right text-black border border-b-0 border-gray-300 rounded-t-xl gap-3 ${openIndex === index ? 'rounded-b-none' : ''
                                        }`}
                                    data-accordion-target={`#accordion-collapse-body-${index + 1}`}
                                    aria-expanded={openIndex === index}
                                    aria-controls={`accordion-collapse-body-${index + 1}`}
                                    onClick={() => toggleFAQ(index)}
                                >
                                    <span>{faq.question}</span>

                                    <svg
                                        data-accordion-icon
                                        className={`w-3 h-3 shrink-0 transition-transform duration-300 ${openIndex === index ? 'rotate-180' : ''
                                            }`}
                                        aria-hidden="true"
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 10 6"
                                    >
                                        <path
                                            stroke="currentColor"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="M9 5 5 1 1 5"
                                        />
                                    </svg>
                                </button>
                            </h2>
                            <div
                                id={`accordion-collapse-body-${index + 1}`}
                                className={`p-5 border border-b-0 ${openIndex === index ? 'block' : 'hidden'
                                    }`}
                                aria-labelledby={`accordion-collapse-heading-${index + 1}`}
                            >
                                <div className="">
                                    <p className="mb-2 text-gray-500 dark:text-gray-400">{faq.answer}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
                <div className="text-center mt-12 animate-fadeIn">
                    <h2 className="text-2xl font-semibold mb-4">Still have questions?</h2>
                    <p className="mb-6">We're here to help. Contact us for more information or to schedule a consultation.</p>
                    <Button to={'contact'} content={'Contact Us'} />
                </div>
            </div>
        </>
    );
};

export default FAQ;