import React from 'react';
import Navbar from './components/layout/Navbar';
import Hero from './components/sections/Hero';
import VisualComparison from './components/sections/VisualComparison';
import Preview from './components/sections/Preview';
import Team from './components/sections/Team';
import FAQ from './components/sections/FAQ';
import Footer from './components/layout/Footer';

export default function Home() {
  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-900 scroll-smooth">
      
      <Navbar />

      <main>
        <Hero />
        <VisualComparison />
        <Preview />
        <Team />
        <FAQ />
      </main>
      <Footer />
      
    </div>
  );
}