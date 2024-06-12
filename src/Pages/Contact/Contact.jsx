import React, { useEffect } from 'react';
import Navbar from '../../Components/Navbar';
import Footer from '../../Components/Footer';
import Lottie from 'lottie-react';
import animation from './animation.json';
import ContactHero from './ContactHero';
import ContactForm from './ContactForm';
import ContactMap from './ContactMap';
import ContactOffice from './ContactOffice';
import WhatsappButton from '../../Components/WhatsappButton';

function Contact() {
  useEffect(() => window.scrollTo(0, 0), []);

  return (
    <div>
      <WhatsappButton/>
      <Navbar />
      <ContactHero/>
      <ContactOffice/>
      <ContactForm/>
      <ContactMap/>
      <Footer />
    </div>
  );
}

export default Contact;
