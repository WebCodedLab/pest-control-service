import React from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle, Shield, Clock, Leaf, Bug, Award, Phone, MapPin, Calendar, ThumbsUp, AlertTriangle, Sprout } from 'lucide-react';
import SEO from '../components/SEO';
import Button from '../components/Button';

const features = [
    { icon: CheckCircle, title: "Expert Technicians", description: "Our team of certified professionals ensures top-quality service with years of experience in handling all types of pest infestations." },
    { icon: Shield, title: "Safe & Effective", description: "We use methods that are safe for your family and pets, following strict safety protocols and industry best practices." },
    { icon: Clock, title: "24/7 Emergency Service", description: "We're always available when you need us most, with rapid response times and emergency support." },
    { icon: Leaf, title: "Eco-Friendly Solutions", description: "Our green pest control methods protect both you and the environment, using sustainable practices." },
    { icon: Bug, title: "Comprehensive Coverage", description: "We handle all types of pests including rodents, insects, birds, and wildlife with specialized treatments." },
    { icon: Award, title: "Satisfaction Guaranteed", description: "We stand behind our work with a 100% satisfaction guarantee and free follow-up inspections." },
    { icon: ThumbsUp, title: "Licensed & Insured", description: "Full provincial licensing and comprehensive insurance coverage for your peace of mind." },
    { icon: Sprout, title: "Preventive Solutions", description: "We focus on long-term prevention strategies to keep pests away permanently." }
];

const testimonials = [
    { name: "John D.", location: "Etobicoke", text: "Toronto Pest Control saved our home from a severe ant infestation. Their team was professional, thorough, and ensured all our concerns were addressed. Highly recommended!" },
    { name: "Sarah M.", location: "North York", text: "Professional, punctual, and effective. They dealt with our rodent problem swiftly and provided excellent follow-up service to ensure the issue was fully resolved." },
    { name: "Mike R.", location: "Scarborough", text: "Great service! They not only eliminated the pests but also provided valuable prevention tips. Their eco-friendly approach was exactly what we were looking for." },
    { name: "Lisa K.", location: "Downtown Toronto", text: "After trying several other companies, Toronto Pest Control finally solved our persistent bed bug problem. Their expertise and thoroughness made all the difference." },
    { name: "David P.", location: "Mississauga", text: "Exceptional service from start to finish. The team was knowledgeable, professional, and took the time to explain everything in detail." },
    { name: "Jennifer W.", location: "Richmond Hill", text: "As a business owner, I appreciate their discrete and effective service. They've been maintaining our commercial property pest-free for over two years now." }
];

const services = [
    {
        title: "Residential Pest Control",
        description: "Comprehensive protection for your home against common household pests.",
        includes: ["Free initial inspection", "Customized treatment plans", "Preventive measures", "Regular monitoring"]
    },
    {
        title: "Commercial Pest Control",
        description: "Specialized solutions for businesses, ensuring compliance with health regulations.",
        includes: ["24/7 emergency response", "Industry-specific protocols", "Regular maintenance", "Documentation for audits"]
    },
    {
        title: "Specialized Treatments",
        description: "Expert handling of specific pest problems requiring unique approaches.",
        includes: ["Bed bug heat treatment", "Rodent exclusion", "Bird control", "Wildlife removal"]
    }
];

const commonPests = [
    { name: "Ants", image: 'https://cdn.britannica.com/42/223142-050-7033F421/Red-ant-on-a-green-branch.jpg', description: "Various species including carpenter ants and pavement ants" },
    { name: "Rodents", image: 'https://www.victorpest.com/media/wysiwyg/Articles/Victorpest/VP_Largest-Rodents-in-the-World_M2-hero.jpg', description: "Mice and rats control with humane removal methods" },
    { name: "Bed Bugs", image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/87/Bed_bug%2C_Cimex_lectularius.jpg/800px-Bed_bug%2C_Cimex_lectularius.jpg', description: "Complete elimination with heat treatment and follow-up" },
    { name: "Cockroaches", image: 'https://nozzlenolen.com/wp-content/uploads/2021/01/american-cockroach-2.png', description: "Effective control of all cockroach species" },
    { name: "Wasps & Bees", image: 'https://www.bensbees.com.au/wp-content/uploads/2016/04/difference-between-bee-wasp.jpg', description: "Safe removal and nest elimination" },
    { name: "Wildlife", image: 'https://www.pestproutah.com/images/pest-id-wildlife.2402130039550.jpg', description: "Humane removal of raccoons, squirrels, and other wildlife" }
];

const locations = [
    "Toronto", "North York", "Scarborough", "Etobicoke", "Mississauga", "Markham",
    "Richmond Hill", "Vaughan", "Brampton", "Oakville", "Aurora", "Newmarket"
];

const Home = () => {
    return (
        <>
            <SEO
                title="Toronto Pest Control | Expert Same-Day Pest Removal Services"
                description="Professional pest control services in Toronto. We offer same-day pest removal and eco-friendly solutions for residential and commercial properties."
                canonicalUrl=""
            />
            <div className="container mx-auto px-6 py-12">
                <section className="text-center mb-20 animate-fadeIn">
                    <h1 className="text-5xl font-bold mb-6">Toronto's Premier Pest Control Service</h1>
                    <p className="text-xl mb-8 max-w-2xl mx-auto">We provide professional, efficient, and eco-friendly pest control services for homes and businesses in Toronto and the surrounding areas.</p>
                    <div className="flex justify-center gap-4">
                        <Button to="emergency" content="24/7 Emergency Service" />
                    </div>
                </section>

                <section className="mb-20">
                    <div className="grid md:grid-cols-2 gap-8 items-center">
                        <div className="animate-slideIn">
                            <h2 className="text-3xl font-semibold mb-4">Expert Pest Removal Solutions</h2>
                            <p className="mb-6">Don't let pests take over your space. Our team of experienced professionals is ready to tackle any pest problem, big or small. We combine cutting-edge technology with proven methods to ensure lasting results.</p>
                            <ul className="space-y-4 mb-6">
                                <li className="flex items-start">
                                    <CheckCircle className="text-secondary mr-2 mt-1 flex-shrink-0" />
                                    <span>Same-day service available with emergency response options</span>
                                </li>
                                <li className="flex items-start">
                                    <CheckCircle className="text-secondary mr-2 mt-1 flex-shrink-0" />
                                    <span>Eco-friendly solutions safe for families and pets</span>
                                </li>
                                <li className="flex items-start">
                                    <CheckCircle className="text-secondary mr-2 mt-1 flex-shrink-0" />
                                    <span>Comprehensive residential and commercial expertise</span>
                                </li>
                                <li className="flex items-start">
                                    <CheckCircle className="text-secondary mr-2 mt-1 flex-shrink-0" />
                                    <span>Licensed, insured, and continuously trained professionals</span>
                                </li>
                            </ul>
                            <Button to={'services'} content={'Explore Our Services'} />
                        </div>
                        <div className="relative h-96 animate-fadeIn">
                            <img
                                src="https://a1fumigations.com/wp-content/uploads/2023/06/rodent-conrol.png"
                                alt="Pest Control Expert at Work"
                                className="rounded-lg object-cover w-full h-full"
                            />
                        </div>
                    </div>
                </section>

                <section className="mb-20">
                    <h2 className="text-3xl font-semibold text-center mb-12">Why Choose Toronto Pest Control?</h2>
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {features.map((feature, index) => (
                            <div key={index} className="card p-6 text-center animate-slideIn" style={{ animationDelay: `${index * 0.1}s` }}>
                                <feature.icon className="w-12 h-12 mx-auto mb-4 text-primary text-green-500" />
                                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                                <p>{feature.description}</p>
                            </div>
                        ))}
                    </div>
                </section>

                <section className="mb-20">
                    <h2 className="text-3xl font-semibold text-center mb-12">Our Comprehensive Services</h2>
                    <div className="grid md:grid-cols-3 gap-8">
                        {services.map((service, index) => (
                            <div key={index} className="card p-6 animate-fadeIn" style={{ animationDelay: `${index * 0.1}s` }}>
                                <h3 className="text-2xl font-semibold mb-4">{service.title}</h3>
                                <p className="mb-4">{service.description}</p>
                                <ul className="space-y-2">
                                    {service.includes.map((item, i) => (
                                        <li key={i} className="flex items-center">
                                            <CheckCircle className="text-secondary mr-2 w-5 h-5" />
                                            <span>{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </section>

                <section className="mb-20 ">
                    <h2 className="text-3xl font-semibold text-center mb-12">Common Pests We Handle</h2>
                    <div className="grid md:grid-cols-3 gap-8">
                        {commonPests.map((pest, index) => (
                            <div 
                                key={index} 
                                className="card  flex flex-col justify-center items-center text-center p-6 animate-fadeIn rounded" 
                                style={{
                                animationDelay: `${index * 0.1}s`,
                                backgroundImage: `url(${pest.image})`,
                                backgroundSize: 'cover',
                                backgroundPosition: 'center',
                                backgroundRepeat: 'no-repeat',
                                color: 'white',
                                height: '200px'
                                
                                }}>
                                <Bug className="w-8 h-8 mb-4 text-primary " />
                                <h3 className="text-xl font-semibold mb-2 ">{pest.name}</h3>
                                <p>{pest.description}</p>
                            </div>
                        ))}
                    </div>
                </section>

                <section className="mb-20">
                    <h2 className="text-3xl font-semibold text-center mb-12">What Our Customers Say</h2>
                    <div className="grid md:grid-cols-3 gap-8">
                        {testimonials.map((testimonial, index) => (
                            <div key={index} className="card p-6 animate-fadeIn" style={{ animationDelay: `${index * 0.1}s` }}>
                                <p className="mb-4 italic">"{testimonial.text}"</p>
                                <div className="flex items-center">
                                    <MapPin className="w-4 h-4 mr-2 text-secondary" />
                                    <p className="font-semibold">{testimonial.name} - {testimonial.location}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>

                <section className="mb-20">
                    <h2 className="text-3xl font-semibold text-center mb-8">Service Areas</h2>
                    <p className="text-center mb-8">We proudly serve the Greater Toronto Area and surrounding regions</p>
                    <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
                        {locations.map((location, index) => (
                            <div key={index} className="text-center p-4 bg-gray-50 rounded-lg animate-fadeIn" style={{ animationDelay: `${index * 0.05}s` }}>
                                <MapPin className="w-5 h-5 mx-auto mb-2 text-primary text-green-500" />
                                <span>{location}</span>
                            </div>
                        ))}
                    </div>
                </section>

                <section className="mb-20 bg-primary-50 rounded-2xl p-8">
                    <div className="grid md:grid-cols-2 gap-8 items-center">
                        <div>
                            <h2 className="text-3xl font-semibold mb-4">Emergency Pest Control</h2>
                            <p className="mb-6">Pest problems don't wait for business hours. That's why we offer 24/7 emergency pest control services throughout the Greater Toronto Area.</p>
                            <div className="space-y-4">
                                <div className="flex items-center">
                                    <Phone className="w-6 h-6 mr-3 text-primary" />
                                    <span>Available 24/7 for emergencies</span>
                                </div>
                                <div className="flex items-center">
                                    <Clock className="w-6 h-6 mr-3 text-primary" />
                                    <span>Fast response times</span>
                                </div>
                                <div className="flex items-center">
                                    <AlertTriangle className="w-6 h-6 mr-3 text-primary" />
                                    <span>Immediate action for urgent situations</span>
                                </div>
                            </div>
                        </div>
                        <div className="text-center">
                            <Calendar className="w-16 h-16 mx-auto mb-4 text-primary" />
                            <Button to="emergency" content="Request Emergency Service" variant="primary" />
                        </div>
                    </div>
                </section>

                <section className="text-center animate-fadeIn">
                    <h2 className="text-3xl font-semibold mb-6">Ready to Get Rid of Pests?</h2>
                    <p className="mb-8 max-w-2xl mx-auto">Don't let pests control your life. Contact Toronto Pest Control today for a free consultation and take the first step towards a pest-free environment.</p>
                    <div className="flex justify-center gap-4">
                        <Button to="contact" content="Schedule Inspection" />
                    </div>
                </section>
            </div>
        </>
    );
};

export default Home;