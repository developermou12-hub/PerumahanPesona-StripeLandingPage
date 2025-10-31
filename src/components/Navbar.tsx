import React from "react";

const Navbar = () => {
  const menuItems = [
    { name: "Beranda", id: "hero" },
    { name: "Keunggulan", id: "features" },
    { name: "Galeri", id: "gallery" },
    { name: "Pembayaran", id: "payment" },
    { name: "Kontak", id: "contact" },
  ];

  const handleScroll = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <nav className="fixed top-0 left-0 w-full bg-white/80 backdrop-blur-md shadow-sm z-50">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-4">
        {/* 🏡 Logo */}
        <h1 className="text-xl sm:text-2xl font-bold text-[var(--color-primary-dark)] cursor-pointer">
          Pesona Parung Asri
        </h1>

        {/* 📋 Menu */}
        <ul className="hidden md:flex gap-8 text-[var(--color-text)] font-medium">
          {menuItems.map((item) => (
            <li
              key={item.id}
              onClick={() => handleScroll(item.id)}
              className="cursor-pointer hover:text-[var(--color-primary)] transition-colors duration-300"
            >
              {item.name}
            </li>
          ))}
        </ul>

        {/* 📱 Mobile Menu (dropdown sederhana) */}
        <div className="md:hidden">
          <select
            className="border border-gray-300 rounded-md p-2 text-[var(--color-primary-dark)]"
            onChange={(e) => handleScroll(e.target.value)}
            defaultValue=""
          >
            <option value="" disabled>
              Menu
            </option>
            {menuItems.map((item) => (
              <option key={item.id} value={item.id}>
                {item.name}
              </option>
            ))}
          </select>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
