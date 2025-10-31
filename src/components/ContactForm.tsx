import React, { useState } from "react";
import Swal from "sweetalert2";

const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    message: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Validasi sederhana
    if (!formData.name || !formData.phone || !formData.message) {
      Swal.fire({
        title: "Form Belum Lengkap",
        text: "Silakan isi semua kolom sebelum mengirim.",
        icon: "warning",
        confirmButtonColor: "var(--color-primary)",
        background: "var(--color-bg)",
        color: "var(--color-text)",
      });
      return;
    }

    // Simulasi sukses kirim
    Swal.fire({
      title: "Pesan Terkirim!",
      text: "Terima kasih telah menghubungi kami. Tim Pesona Parung Asri akan segera menghubungi Anda kembali.",
      icon: "success",
      confirmButtonText: "Tutup",
      confirmButtonColor: "var(--color-primary)",
      background: "var(--color-bg)",
      color: "var(--color-text)",
      showClass: {
        popup: "animate__animated animate__fadeInDown",
      },
      hideClass: {
        popup: "animate__animated animate__fadeOutUp",
      },
    });

    // Reset form
    setFormData({ name: "", phone: "", message: "" });
  };

  return (
    <section
      id="contact"
      className="w-full py-20 bg-[var(--color-bg)] text-[var(--color-text)]"
    >
      <div className="max-w-4xl mx-auto px-6">
        <h2 className="text-3xl sm:text-4xl font-extrabold text-[var(--color-primary-dark)] text-center mb-6">
          Hubungi Kami
        </h2>

        <p className="text-center text-[var(--color-text-light)] mb-10">
          Tertarik dengan unit kami? Kirim pesan sekarang untuk konsultasi atau
          jadwal kunjungan lokasi.
        </p>

        <form
          onSubmit={handleSubmit}
          className="bg-white rounded-3xl shadow-md hover:shadow-lg transition-all duration-300 p-8 sm:p-10"
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium text-[var(--color-primary-dark)] mb-2"
              >
                Nama Lengkap
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Masukkan nama Anda"
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)]"
              />
            </div>

            <div>
              <label
                htmlFor="phone"
                className="block text-sm font-medium text-[var(--color-primary-dark)] mb-2"
              >
                Nomor WhatsApp
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="08xxxxxxxxxx"
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)]"
              />
            </div>
          </div>

          <div className="mt-6">
            <label
              htmlFor="message"
              className="block text-sm font-medium text-[var(--color-primary-dark)] mb-2"
            >
              Pesan Anda
            </label>
            <textarea
              id="message"
              name="message"
              rows={4}
              value={formData.message}
              onChange={handleChange}
              placeholder="Tulis pesan atau pertanyaan Anda di sini..."
              className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)]"
            ></textarea>
          </div>

          <div className="mt-8 flex justify-center">
            <button
              type="submit"
              className="px-10 py-4 rounded-full bg-[var(--color-primary)] text-white font-semibold text-lg hover:bg-[var(--color-primary-dark)] transition-all duration-300"
            >
              Kirim Pesan
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default ContactForm;
