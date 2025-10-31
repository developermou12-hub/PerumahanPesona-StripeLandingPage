import React from "react";
import HeroSection from "../components/HeroSection";
import PropertyFeatures from "../components/PropertyFeatures";
import Gallery from "../components/Gallery";
import PaymentSection from "../components/PaymentSection";
import ContactForm from "../components/ContactForm";

const Home: React.FC = () => {
  return (
    <main className="overflow-x-hidden">
      {/* 🏡 Hero Section */}
      <HeroSection />

      {/* 🌿 Keunggulan Properti */}
      <PropertyFeatures />

      {/* 🏞️ Galeri */}
      <Gallery />

      {/* 💳 Pembayaran Booking */}
      <PaymentSection />

      {/* 📞 Kontak */}
      <ContactForm />
    </main>
  );
};

export default Home;
