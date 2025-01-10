import React from 'react';
import SEO from '../components/SEO';
import Button from '../components/Button';
import { PhoneCall, MapPin, Clock, Bug, Sprout, Zap, Users, ShieldCheck, Star, DollarSign } from 'lucide-react';

function Emergency() {
  const pests = [
    {
      name: "Ants",
      image: 'https://cdn.britannica.com/42/223142-050-7033F421/Red-ant-on-a-green-branch.jpg',
    },
    {
       name: "Rodents", 
      image: 'https://www.victorpest.com/media/wysiwyg/Articles/Victorpest/VP_Largest-Rodents-in-the-World_M2-hero.jpg',
     },
    {
        name: "Bed Bugs", 
       image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/87/Bed_bug%2C_Cimex_lectularius.jpg/800px-Bed_bug%2C_Cimex_lectularius.jpg', 
    },
    { 
      name: "Cockroaches",
       image: 'https://nozzlenolen.com/wp-content/uploads/2021/01/american-cockroach-2.png', 
     },
    { 
      name: "Wasps & Bees",
       image: 'https://www.bensbees.com.au/wp-content/uploads/2016/04/difference-between-bee-wasp.jpg',
    },
    {
       name: "Wildlife",
       image: 'https://www.pestproutah.com/images/pest-id-wildlife.2402130039550.jpg',
     }
];

  const testimonials = [
    {
      name: 'Samantha J.',
      text: 'They arrived so fast and took care of the wasps nest that was causing problems at my house! I would recommend them to anyone!',
      image: 'https://placehold.co/100x100/000/fff?text=SJ',
    },
    {
      name: 'John D.',
      text: 'I had a termite problem that was driving me crazy, the service was quick and easy, I would definetly call again',
      image: 'https://placehold.co/100x100/000/fff?text=JD',
    },
    {
      name: 'Ashley M.',
      text: 'I called and they were able to send someone right away to take care of the roaches that were in my apartment, they were professional and did an excellent job.',
      image: 'https://placehold.co/100x100/000/fff?text=AM',
    },
  ];


  return (
    <div>
      <SEO
        title="24/7 Emergency Pest Control Services"
        description="Immediate pest control services for your home. Fast, effective, and reliable pest solutions."
        canonicalUrl={`${window.location.origin}/emergency`}
      />

      {/* Hero Section */}
      <section className="bg-gray-100 py-24 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-4xl font-bold text-gray-800 mb-6">
            Emergency Pest Control Services
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            Immediate relief from pest infestations. We're here for you 24/7, providing fast, effective, and reliable pest solutions.
          </p>
          <div className="flex justify-center space-x-4">
            <Button to={'/contact'} content={'Call Us Now'} icon={<PhoneCall className="h-5 w-5 mr-2" />} />
          </div>
        </div>
      </section>

      {/* Our Approach Section */}
      <section className="max-w-6xl mx-auto py-16 px-4">
        <h2 className="text-3xl font-semibold text-gray-800 mb-10 text-center">
          Our Approach to Emergency Pest Control
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="flex flex-col items-center text-center p-6 border rounded-lg bg-gray-50 transition-all hover:shadow-md">
            <div className="bg-green-100 p-4 rounded-full mb-4">
              <Clock className="h-10 w-10 text-green-600" />
            </div>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">Rapid Response</h3>
            <p className="text-gray-600">We are always on call to respond to your pest emergency right away.</p>
          </div>
          <div className="flex flex-col items-center text-center p-6 border rounded-lg bg-gray-50 transition-all hover:shadow-md">
            <div className="bg-green-100 p-4 rounded-full mb-4">
              <Bug className="h-10 w-10 text-green-600" />
            </div>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">Immediate Relief</h3>
            <p className="text-gray-600">Swift action to provide immediate relief from the pest emergency.</p>
          </div>
          <div className="flex flex-col items-center text-center p-6 border rounded-lg bg-gray-50 transition-all hover:shadow-md">
            <div className="bg-green-100 p-4 rounded-full mb-4">
              <Sprout className="h-10 w-10 text-green-600" />
            </div>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">Prevention Plan</h3>
            <p className="text-gray-600">Develop a long-term strategy to prevent future pest emergencies.</p>
          </div>
        </div>
      </section>

      {/* Emergency Pest Types */}
      <section className="max-w-6xl mx-auto py-16 px-4">
        <h2 className="text-3xl font-semibold text-gray-800 mb-10 text-center">
          Common Emergency Pest Situations We Handle
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {pests.map((pest, index) => (
             <div key={index} className="flex flex-col items-center text-center p-6 border rounded-lg transition-all hover:shadow-md">
                <img src={pest.image} alt={pest.name} className="mb-4 rounded-md w-full h-48 object-cover" />
                 <h3 className="text-xl font-semibold text-gray-800 mb-2">{pest.name}</h3>
             </div>
          ))}
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="max-w-6xl mx-auto py-16 px-4 bg-white">
        <h2 className="text-3xl font-semibold text-gray-800 mb-10 text-center">
          Why Choose Us for Emergency Pest Control?
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="flex items-start space-x-4 p-6 bg-gray-50 rounded-lg transition-all hover:shadow-md">
            <Clock className="h-8 w-8 text-green-600 flex-shrink-0" />
            <div>
              <h3 className="font-semibold text-lg text-gray-800 mb-2">24/7 Availability</h3>
              <p className="text-gray-600">Round-the-clock service to address pest emergencies any time, any day.</p>
            </div>
          </div>
          <div className="flex items-start space-x-4 p-6 bg-gray-50 rounded-lg transition-all hover:shadow-md">
            <Zap className="h-8 w-8 text-green-600 flex-shrink-0" />
            <div>
              <h3 className="font-semibold text-lg text-gray-800 mb-2">Rapid Response Time</h3>
              <p className="text-gray-600">Swift dispatch to your location, typically within 1-2 hours of your call.</p>
            </div>
          </div>
          <div className="flex items-start space-x-4 p-6 bg-gray-50 rounded-lg transition-all hover:shadow-md">
            <Users className="h-8 w-8 text-green-600 flex-shrink-0" />
            <div>
              <h3 className="font-semibold text-lg text-gray-800 mb-2">Experienced Technicians</h3>
              <p className="text-gray-600">Highly trained experts with years of experience in emergency pest control.</p>
            </div>
          </div>
          <div className="flex items-start space-x-4 p-6 bg-gray-50 rounded-lg transition-all hover:shadow-md">
            <ShieldCheck className="h-8 w-8 text-green-600 flex-shrink-0" />
            <div>
              <h3 className="font-semibold text-lg text-gray-800 mb-2">Safe Solutions</h3>
              <p className="text-gray-600">Eco-friendly and low-toxicity treatments safe for families, pets, and the environment.</p>
            </div>
          </div>
          <div className="flex items-start space-x-4 p-6 bg-gray-50 rounded-lg transition-all hover:shadow-md">
            <Star className="h-8 w-8 text-green-600 flex-shrink-0" />
            <div>
              <h3 className="font-semibold text-lg text-gray-800 mb-2">Guaranteed Results</h3>
              <p className="text-gray-600">We stand behind our work with a 30-day guarantee on all emergency treatments.</p>
            </div>
          </div>
          <div className="flex items-start space-x-4 p-6 bg-gray-50 rounded-lg transition-all hover:shadow-md">
            <DollarSign className="h-8 w-8 text-green-600 flex-shrink-0" />
            <div>
              <h3 className="font-semibold text-lg text-gray-800 mb-2">Transparent Pricing</h3>
              <p className="text-gray-600">Clear, upfront pricing with no hidden fees or surprise charges.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="max-w-7xl mx-auto py-16 px-4 bg-gray-100">
        <h2 className="text-3xl font-semibold text-gray-800 mb-10 text-center">
          What Our Customers Say
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
                <div key={index} className="bg-white rounded-lg shadow-md p-6">
                  <div className="flex items-center mb-4">
                    <img
                      src={testimonial.image}
                      alt={`avatar of ${testimonial.name}`}
                      className="rounded-full w-16 h-16 object-cover mr-4"
                    />
                    <div>
                       <p className="font-semibold text-gray-800">{testimonial.name}</p>
                    </div>
                   </div>
                    <p className="text-gray-600">{testimonial.text}</p>
                </div>
          ))}
        </div>
      </section>



      {/* Call to Action */}
      <section className="py-16 px-4 text-black">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-semibold mb-6">
            Need Immediate Pest Control Assistance?
          </h2>
          <p className="text-xl mb-8">
            Our emergency team is ready to help you 24/7. Don't let pests take control!
          </p>
          <div className="flex justify-center space-x-4">
            <Button to={'/contact'} content={'Call Us Now'} icon={<PhoneCall className="h-5 w-5 mr-2" />} className="bg-white text-green-700 hover:bg-green-100" />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Emergency;