import React from 'react';
import { Link } from 'react-router-dom';
import { Users, Award, Leaf, Shield, Twitter, Facebook, Instagram } from 'lucide-react';
import SEO from '../components/SEO';
import Button from '../components/Button';

const stats = [
  { icon: Users, value: "10,000+", label: "Satisfied Customers" },
  { icon: Award, value: "20+", label: "Years of Experience" },
  { icon: Leaf, value: "100%", label: "Eco-Friendly Solutions" },
  { icon: Shield, value: "24/7", label: "Emergency Service" },
];

const teamMembers = [
  { name: "Elias Thorne", role: "Founder & CEO", image: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" },
  { name: "Jaxon Reed", role: "Field Operations Manager", image: "https://www.shutterstock.com/image-photo/handsome-30s-businessman-employee-head-600nw-2156291093.jpg" },
  { name: "Caspian Vance", role: "Customer Sales Manager", image: "https://img.freepik.com/premium-photo/photo-young-handsome-indian-businessman_1002229-6151.jpg" },
  { name: "Ryan Sterling", role: "Technical Service Lead", image: "https://i.pinimg.com/736x/05/b1/78/05b1783cb521a13314bffbd7a6495691.jpg" },
];

const About = () => {
  return (
    <>
      <SEO
        title="About Us | Toronto Pest Control"
        description="Learn about our experienced team of pest control experts in Toronto. We're committed to providing safe and effective pest management solutions."
        canonicalUrl="https://www.torontopestcontrol.com/about"
      />
      <div className="container mx-auto px-6 py-12">
        <h1 className="text-4xl font-bold text-center mb-12 animate-fadeIn">About Toronto Pest Control</h1>

        <section className="mb-20">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="animate-slideIn">
              <h2 className="text-3xl font-semibold mb-4">Our Mission</h2>
              <p className="mb-4">
                At Toronto Pest Control, our mission is to provide safe, effective, and eco-friendly pest management solutions to homes and businesses in Toronto and the surrounding areas. We're committed to protecting your health, property, and peace of mind.
              </p>
              <h2 className="text-3xl font-semibold mb-4">Our Expertise</h2>
              <p className="mb-4">
                With over 20 years of experience in the pest control industry, our team of licensed professionals has the knowledge and skills to handle any pest problem. We stay up-to-date with the latest pest control technologies and methods to ensure we provide the best service possible.
              </p>
              <h2 className="text-3xl font-semibold mb-4">Our Commitment</h2>
              <p>
                We're committed to customer satisfaction and environmental responsibility. That's why we use eco-friendly products and methods whenever possible, ensuring the safety of your family, pets, and the environment.
              </p>
            </div>
            <div className="relative h-96 animate-fadeIn">
              <img
                src="https://swfpestcontrol.com/wp-content/uploads/2023/05/swf-pest-control-company-about.jpg"
                alt="Toronto Pest Control Team"
                className="rounded-lg object-cover w-full h-full"
              />
            </div>
          </div>
        </section>

        <section className="mb-20">
          <h2 className="text-3xl font-semibold text-center mb-12">Why Choose Us?</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="card p-6 text-center animate-slideIn" style={{ animationDelay: `${index * 0.1}s` }}>
                <stat.icon className="w-12 h-12 mx-auto mb-4 text-primary text-green-500" />
                <p className="text-3xl font-bold mb-2">{stat.value}</p>
                <p className="text-lg">{stat.label}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-20">
          <h2 className="text-3xl font-semibold text-center mb-12">Meet Our Team</h2>
          <div className="grid md:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <div key={index} className="card bg-zinc-100 rounded-lg p-6 flex justify-between items-center animate-fadeIn hover:-translate-y-2 transition-transform duration-200" style={{ animationDelay: `${index * 0.1}s` }}>
                <img
                  src={member.image}
                  alt={member.name}
                  className="rounded-full w-[5vw] h-[5vw] object-cover mr-4"
                />
                <div className='flex flex-col justify-between items-center'>
                  <h3 className="text-xl font-semibold mb-1">{member.name}</h3>
                  <p className="text-gray-600 mb-2">{member.role}</p>
                  <div className='flex gap-3 '>
                    <Link><Twitter className='text-green-500' /></Link>
                    <Link><Facebook className='text-green-500' /></Link>
                    <Link><Instagram className='text-green-500' /></Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>


        <section className="text-center animate-fadeIn">
          <h2 className="text-3xl font-semibold mb-6">Ready to Work with Us?</h2>
          <p className="mb-8 max-w-2xl mx-auto">Experience the difference of working with Toronto's leading pest control experts. Contact us today for a free consultation.</p>
          <Button to={'contact'} content={'Get in Touch'} />
        </section>
      </div>
    </>
  );
};

export default About;

