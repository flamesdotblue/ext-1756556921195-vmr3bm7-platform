import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import JobsSection from './components/JobsSection';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-white text-slate-900">
      <Navbar />
      <main>
        <Hero />
        <JobsSection />
      </main>
      <Footer />
    </div>
  );
}

export default App;
