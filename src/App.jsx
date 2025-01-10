import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
// import Loader from './components/Loader'/;
import Home from './pages/Home';
import Services from './pages/Services';
import About from './pages/About';
import Contact from './pages/Contact';
import FAQ from './pages/FAQ';
import Emergency from './pages/Emergency';
import NotFound from './pages/NotFound';

function App() {
  const [isLoading, setIsLoading] = useState(false);
  const location = useLocation();


  useEffect(() => {
    setIsLoading(true); // Set loading state to true when route changes
    const delay = setTimeout(() => {
        setIsLoading(false); // Set loading state to false after a delay
    }, 500);
    return () => clearTimeout(delay)
  }, [location]);



  return (
    <div className="relative min-h-screen">
      {/* {isLoading && <Loader >} */}
      <Header />
      <div className='mt-16'>

        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/services" element={<Services />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/faq" element={<FAQ />} />
            <Route path="/emergency" element={<Emergency />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
      <Footer />
      </div>
    </div>
  );
}

export default App;