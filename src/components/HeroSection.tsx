import React from "react";

const HeroSection: React.FC = () => {
  return (
    <section
      id="hero"
      className="w-full min-h-[90vh] flex flex-col justify-center items-center text-center px-6 bg-gradient-to-b from-[var(--color-primary-light)] to-[var(--color-bg)]"
    >
      {/* 🏡 Hero Content */}
      <div className="max-w-3xl space-y-6">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-[var(--color-primary-dark)] leading-tight">
          Hunian Nyaman & Modern di <br />
          <span className="text-[var(--color-primary)]">
            Pesona Parung Asri
          </span>
        </h1>

        <p className="text-base sm:text-lg md:text-xl text-[var(--color-text-light)] leading-relaxed">
          Miliki rumah impian Anda dengan harga terjangkau, lingkungan asri, dan
          legalitas terjamin. Lokasi strategis di Parung, Bogor.
        </p>

        <div className="flex flex-col sm:flex-row justify-center gap-4 pt-4">
          <a
            href="#features"
            className="px-8 py-3 rounded-full bg-[var(--color-primary)] text-white font-medium hover:bg-[var(--color-primary-dark)] transition-colors duration-300"
          >
            Lihat Fasilitas
          </a>
          <a
            href="#payment"
            className="px-8 py-3 rounded-full border-2 border-[var(--color-primary)] text-[var(--color-primary-dark)] font-medium hover:bg-[var(--color-primary)] hover:text-white transition-colors duration-300"
          >
            Pesan Sekarang
          </a>
        </div>
      </div>

      {/* 🌿 Background Illustration (optional decorative) */}
      <div className="absolute inset-0 -z-10 overflow-hidden opacity-10">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 800 800"
          className="w-full h-full"
        >
          <circle cx="400" cy="400" r="300" fill="var(--color-primary)" />
        </svg>
      </div>
    </section>
  );
};

export default HeroSection;
