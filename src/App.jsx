import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Loader from './components/Loader';
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
  const [timerId, setTimerId] = useState(null);

  useEffect(() => {
      setIsLoading(true);
      const timer = setTimeout(() => {
          setIsLoading(false);
      }, 500);

      return () => clearTimeout(timer);
  }, [location]);



  return (
    <div className="relative min-h-screen">
      <Header />
      <main className={`transition-all duration-300 ${isLoading ? '' : 'mt-16'} `}>

          {isLoading && <Loader />}
        {!isLoading &&
          <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/services" element={<Services />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/faq" element={<FAQ />} />
              <Route path="/emergency" element={<Emergency />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
            }
        </main>
         <Footer />

    </div>
  );
}

export default App;