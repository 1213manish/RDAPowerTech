import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import FloatingWidgets from './components/common/FloatingWidgets';
import Home from './pages/Home';
import Pricing from './pages/Pricing';
import AboutUs from './pages/AboutUs';
import { QuoteProvider } from './context/QuoteContext';

export default function App() {
  return (
    <QuoteProvider>
      <div className="min-h-screen flex flex-col bg-white text-slate-900 font-sans antialiased relative">
        <FloatingWidgets />
        <Navbar />
        <main className="flex-1">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/pricing" element={<Pricing />} />
            <Route path="/about-us" element={<AboutUs />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </QuoteProvider>
  );
}




