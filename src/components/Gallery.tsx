import React from "react";

const Gallery: React.FC = () => {
  // Ganti URL berikut dengan gambar dari Pinterest (maks 3 gambar tiap card atau lebih jika mau)
  const images = [
    "https://huniankeluarga.wordpress.com/wp-content/uploads/2011/08/e99df-rmhcrh3pr.jpg",
    "https://apollo.olx.co.id/v1/files/68c22f34a7791-ID/image;s=272x0",
    "https://apollo.olx.co.id/v1/files/688ae07941159-ID/image",
    "https://picture.rumah123.com/r123-images/720x420-crop/customer/1951205/a1de61393e210acfc1b5a01a7d143a0f.jpg",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ95PIrg7pM1ORuh5I9NoMg2p-_c67OR5eoBw&s",
    "https://cdn.medcom.id/dynamic/content/2023/11/02/1627411/QF5ENkqObK.jpg?w=700",
  ];

  return (
    <section id="gallery" className="w-full py-20 bg-[var(--color-bg)] text-[var(--color-text)]">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl sm:text-4xl font-extrabold text-[var(--color-primary-dark)] mb-8 text-center">
          Galeri Hunian & Lingkungan
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {images.map((url, idx) => (
            <div
              key={idx}
              className="overflow-hidden rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <img
                src={url}
                alt={`Galeri rumah ${idx + 1}`}
                className="w-full h-48 object-cover"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
