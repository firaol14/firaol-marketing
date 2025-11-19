import React from 'react';
import { Navbar } from '../components/Navbar';
import { Hero } from '../components/Hero';
import { Services } from '../components/Services';
import { Process } from '../components/Process';
import { Comparison } from '../components/Comparison';
import { FAQ } from '../components/FAQ';
import { Footer } from '../components/Footer';
import { Contact } from '../components/Contact';

export const Home: React.FC = () => {
  return (
    <div className="min-h-screen bg-brand-bg text-white font-sans selection:bg-brand-blue selection:text-white overflow-x-hidden">
      <Navbar />
      <main>
        <Hero />
        <Process />
        <Services />
        <Comparison />
        <FAQ />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};