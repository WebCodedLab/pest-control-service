import React from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle } from 'lucide-react';
import SEO from '../components/SEO';
import Button from '../components/Button';

const services = [
  {
    title: "Residential Pest Control",
    description: "Comprehensive pest control solutions for your home, ensuring a pest-free living environment.",
    image: "https://5.imimg.com/data5/SELLER/Default/2024/3/400933586/GX/JR/ZO/2285584/residential-pest-control-services.jpg",
    features: [
      "Customized treatment plans",
      "Child and pet-friendly solutions",
      "Preventive measures to avoid future infestations",
      "Regular follow-ups and maintenance"
    ]
  },
  {
    title: "Commercial Pest Management",
    description: "Tailored pest control services for businesses, protecting your reputation and assets.",
    image: "https://content.app-sources.com/s/40574786550593908/uploads/Services/amco-pest-solutions-nj-disinfect-social-thumb-7164546.jpg?format=webp",
    features: [
      "Discreet and efficient service",
      "Compliance with industry regulations",
      "24/7 emergency response",
      "Staff training on pest prevention"
    ]
  },
  {
    title: "Eco-Friendly Solutions",
    description: "Environmentally conscious pest control methods that are safe for your family and pets.",
    image: "https://www.onemanandaladybug.ca/wp-content/uploads/2024/04/eco-friendly-pest-control-2.jpg",
    features: [
      "Natural and organic products",
      "Integrated Pest Management (IPM) approach",
      "Minimal environmental impact",
      "Safe for sensitive environments"
    ]
  },
  {
    title: "Emergency Pest Removal",
    description: "Quick response team for urgent pest problems, available 24/7.",
    image: "https://www.monitorpestcontrol.co.uk/wp-content/uploads/2020/12/Emergency-Pest-Control.jpg",
    features: [
      "Rapid response times",
      "Immediate action plans",
      "Thorough inspection and treatment",
      "Post-emergency prevention strategies"
    ]
  }
];

const Services = () => {
  return (
    <>
      <SEO 
        title="Our Services | Toronto Pest Control"
        description="Discover our range of pest control services in Toronto, including residential, commercial, and eco-friendly solutions."
        canonicalUrl="https://www.torontopestcontrol.com/services"
      />
       <div className="mx-auto max-w-screen-lg py-12 px-5">
        <h1 className="text-4xl font-bold text-center mb-12 animate-fadeIn">Our Pest Control Services</h1>
        <div className="space-y-16 md:space-y-20">
          {services.map((service, index) => (
            <div key={index} className={`flex flex-col md:flex-row gap-6 md:gap-8 items-center ${index % 2 === 1 ? 'md:flex-row-reverse' : ''}`}>
              <div className="w-full md:w-1/2 animate-slideIn delay-100">
                <img 
                  src={service.image} 
                  alt={service.title}
                  className="rounded-lg shadow-lg w-full h-[300px] object-cover"
                  />
              </div>
              <div className="w-full md:w-1/2 animate-slideIn delay-200">
                <h2 className="text-3xl font-semibold mb-4">{service.title}</h2>
                <p className="mb-6">{service.description}</p>
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center">
                      <CheckCircle className="text-secondary mr-2" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <Button to={'contact'} content={'Get a Free Quote'} />
              </div>
            </div>
          ))}
        </div>
        <div className="text-center mt-20 animate-fadeIn">
          <h2 className="text-3xl font-semibold mb-6">Need a Customized Solution?</h2>
          <p className="mb-8 max-w-2xl mx-auto">We understand that every pest situation is unique. Contact us for a personalized pest control plan tailored to your specific needs.</p>
          <Button to={'contact'} content={'Contact Us'} />
        </div>
      </div>
    </>
  );
};

export default Services;