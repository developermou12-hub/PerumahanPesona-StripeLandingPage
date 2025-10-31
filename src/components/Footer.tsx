import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="w-full text-center text-[var(--color-bg)] text-sm sm:text-xs tracking-wide">
      <div className="flex flex-col sm:flex-row items-center justify-between max-w-6xl mx-auto px-6 py-4">
        {/* 🏠 Brand */}
        <span className="font-semibold text-[var(--color-bg-dark)] sm:text-[var(--color-bg)]">
          © 2025 Pesona Parung Asri
        </span>

        {/* 📍 Info singkat */}
        <div className="flex flex-col sm:flex-row gap-2 sm:gap-4 mt-2 sm:mt-0 text-[var(--color-bg-dark)]">
          <span>Developed by iziVan</span>
          <span>|</span>
          <a
            href="#hero"
            className="hover:text-[var(--color-accent)] transition-colors"
          >
            Kembali ke atas
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
