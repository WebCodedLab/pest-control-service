import React, { useState } from 'react';
import { Phone, Mail, MapPin, SendHorizontal } from 'lucide-react';
import SEO from '../components/SEO';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would typically send the form data to your server
    console.log(formData);
    alert('Thank you for your message. We will get back to you soon!');
  };

  return (
    <>
      <SEO 
        title="Contact Us | Toronto Pest Control"
        description="Get in touch with Toronto Pest Control for expert pest removal services. We offer free quotes and same-day service."
        canonicalUrl="https://www.torontopestcontrol.com/contact"
      />
      <div className="container mx-auto px-6 py-12">
        <h1 className="text-4xl font-bold text-center mb-12 animate-fadeIn">Contact Us</h1>
        <div className="grid md:grid-cols-2 gap-12">
          <div className="animate-slideIn">
            <h2 className="text-2xl font-semibold mb-6">Get in Touch</h2>
            <p className="mb-6">Have a pest problem? Need a quote? Or just want to learn more about our services? Fill out the form below and we'll get back to you as soon as possible.</p>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="name" className="block mb-2">Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                />
              </div>
              <div>
                <label htmlFor="email" className="block mb-2">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                />
              </div>
              <div>
                <label htmlFor="phone" className="block mb-2">Phone</label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                />
              </div>
              <div>
                <label htmlFor="message" className="block mb-2">Message</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                  rows={4}
                ></textarea>
              </div>
              <button type="submit" className="flex gap-2 text-white bg-green-500 focus:outline-none font-medium rounded-full  px-5 py-2.5 text-center mb-2 inline-block">
                Send Message
              <SendHorizontal/>
              </button>
            </form>
          </div>
          <div className="animate-slideIn" style={{animationDelay: '0.2s'}}>
            <h2 className="text-2xl font-semibold mb-6">Contact Information</h2>
            <div className="space-y-4 mb-8">
              <p className="flex items-center">
                <Phone className="w-6 h-6 mr-2 text-primary" />
                (416) 123-4567
              </p>
              <p className="flex items-center">
                <Mail className="w-6 h-6 mr-2 text-primary" />
                info@torontopestcontrol.com
              </p>
              <p className="flex items-center">
                <MapPin className="w-6 h-6 mr-2 text-primary" />
                123 Pest Control St, Toronto, ON M1M 1M1
              </p>
            </div>
            <h2 className="text-2xl font-semibold mb-6">Business Hours</h2>
            <table className="w-full">
              <tbody>
                <tr>
                  <td className="py-2">Monday - Friday</td>
                  <td className="py-2">8:00 AM - 6:00 PM</td>
                </tr>
                <tr>
                  <td className="py-2">Saturday</td>
                  <td className="py-2">9:00 AM - 4:00 PM</td>
                </tr>
                <tr>
                  <td className="py-2">Sunday</td>
                  <td className="py-2">Closed</td>
                </tr>
              </tbody>
            </table>
            <p className="mt-4 text-sm">* 24/7 Emergency Service Available</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;

