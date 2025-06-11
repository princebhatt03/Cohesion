import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Hero from './components/Hero';
import Hero2 from './components/Hero2';
import Hero3 from './components/Hero3';
import Hero4 from './components/Hero4';
import Hero5 from './components/Hero5';
import Hero44 from './components/Hero44';
import Button from './components/Button';

const App = () => {
  return (
    <>
      <Header />
      <Hero />
      <Hero2 />
      <Hero3 />
      <Hero44 />

      {/* Insert the Button component here */}
      <Button />

      <Hero4 />
      <Hero5 />
      <Footer />
    </>
  );
};

export default App;
