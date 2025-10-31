import React from "react";
import { Home, MapPin, FileCheck, Leaf } from "lucide-react";

const PropertyFeatures: React.FC = () => {
  const features = [
    {
      id: 1,
      icon: <MapPin className="w-10 h-10 text-[var(--color-primary)]" />,
      title: "Lokasi Strategis",
      desc: "Dekat dengan fasilitas umum seperti sekolah, pasar, dan akses tol. Hanya 15 menit ke BSD & 30 menit ke Jakarta Selatan.",
    },
    {
      id: 2,
      icon: <Leaf className="w-10 h-10 text-[var(--color-primary)]" />,
      title: "Lingkungan Asri",
      desc: "Dikelilingi pepohonan dan udara segar khas Parung, menciptakan suasana nyaman dan tenang untuk keluarga Anda.",
    },
    {
      id: 3,
      icon: <FileCheck className="w-10 h-10 text-[var(--color-primary)]" />,
      title: "Legalitas Aman",
      desc: "Setiap unit memiliki sertifikat SHM dan IMB lengkap, memastikan keamanan investasi properti Anda.",
    },
    {
      id: 4,
      icon: <Home className="w-10 h-10 text-[var(--color-primary)]" />,
      title: "Desain Modern",
      desc: "Tampilan rumah minimalis dengan konsep modern tropis yang elegan dan fungsional untuk kebutuhan masa kini.",
    },
  ];

  return (
    <section
      id="features"
      className="w-full py-20 bg-[var(--color-bg)] text-[var(--color-text)]"
    >
      <div className="max-w-6xl mx-auto px-6 text-center">
        {/* 🏡 Section Title */}
        <h2 className="text-3xl sm:text-4xl font-extrabold text-[var(--color-primary-dark)] mb-6">
          Keunggulan Pesona Parung Asri
        </h2>
        <p className="text-[var(--color-text-light)] text-base sm:text-lg mb-12 max-w-2xl mx-auto">
          Nikmati hunian impian Anda dengan fasilitas lengkap, suasana nyaman,
          dan desain yang elegan. Setiap detail kami rancang untuk kenyamanan
          keluarga Anda.
        </p>

        {/* 🌿 Feature Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-2xl shadow-md hover:shadow-lg transition-shadow duration-300 p-6 flex flex-col items-center text-center"
            >
              <div className="mb-4">{item.icon}</div>
              <h3 className="text-lg font-semibold text-[var(--color-primary-dark)] mb-2">
                {item.title}
              </h3>
              <p className="text-sm text-[var(--color-text-light)] leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PropertyFeatures;
