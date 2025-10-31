import React, { useState } from "react";
import Swal from "sweetalert2";

const PaymentSection: React.FC = () => {
  const checkoutUrl = import.meta.env.VITE_STRIPE_CHECKOUT_URL;
  const [loading, setLoading] = useState(false);

  // Ganti gambar di bawah dengan sumber internet lain jika mau
  const heroImage =
    "https://apollo.olx.co.id/v1/files/68dcfe1f37467-ID/image;s=272x0";

  const handleBooking = () => {
    if (!checkoutUrl) {
      Swal.fire({
        title: "Gagal!",
        text: "Link pembayaran belum dikonfigurasi di file .env",
        icon: "error",
        confirmButtonColor: "var(--color-primary)",
        background: "var(--color-bg)",
        color: "var(--color-text)",
      });
      return;
    }

    // Konfirmasi sebelum redirect
    Swal.fire({
      title: "Lanjut ke pembayaran?",
      text: "Anda akan diarahkan ke halaman pembayaran aman Stripe (tab baru).",
      icon: "question",
      showCancelButton: true,
      confirmButtonColor: "var(--color-primary)",
      cancelButtonColor: "#aaa",
      confirmButtonText: "Ya, lanjut",
      cancelButtonText: "Batal",
      background: "var(--color-bg)",
      color: "var(--color-text)",
    }).then((result) => {
      if (result.isConfirmed) {
        setLoading(true);

        // Sedikit delay untuk UX, lalu buka checkout di tab baru
        setTimeout(() => {
          window.open(checkoutUrl, "_blank");
          setLoading(false);

          Swal.fire({
            title: "Dialihkan",
            text: "Halaman Stripe Checkout terbuka di tab baru.",
            icon: "success",
            timer: 1400,
            showConfirmButton: false,
            background: "var(--color-bg)",
            color: "var(--color-text)",
          });
        }, 700);
      }
    });
  };

  return (
    <section
      id="payment"
      className="w-full py-20 bg-[var(--color-primary-light)] text-[var(--color-text)]"
    >
      <div className="max-w-6xl mx-auto px-6 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-10">
        {/* LEFT: Info & CTA */}
        <div className="flex-1">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[var(--color-primary-dark)] mb-4">
            Booking Rumah Impian Anda Sekarang!
          </h2>

          <p className="text-base sm:text-lg text-[var(--color-text-light)] leading-relaxed mb-6">
            Amankan unit terbaik di{" "}
            <span className="font-semibold text-[var(--color-primary-dark)]">
              Pesona Parung Asri
            </span>{" "}
            dengan membayar booking fee kecil. Pembayaran dilakukan melalui
            Stripe Checkout yang aman.
          </p>

          <div className="flex flex-col sm:flex-row sm:items-center gap-4">
            <button
              onClick={handleBooking}
              disabled={loading}
              className={`px-8 py-3 rounded-full font-semibold transition-all duration-300 ${
                loading
                  ? "bg-gray-400 cursor-not-allowed text-white"
                  : "bg-[var(--color-primary)] hover:bg-[var(--color-primary-dark)] text-white shadow-md hover:shadow-lg"
              }`}
            >
              {loading ? "Memproses..." : "Booking Sekarang"}
            </button>

            <button
              onClick={() =>
                window.open(
                  "https://www.google.com/maps/search/Pesona+Parung+Asri",
                  "_blank"
                )
              }
              className="px-6 py-3 rounded-full border border-[var(--color-primary)] text-[var(--color-primary-dark)] font-medium hover:bg-[var(--color-primary)] hover:text-white transition-colors"
            >
              Lihat Lokasi
            </button>
          </div>

          <p className="text-xs text-[var(--color-text-light)] mt-4">
            *Pembayaran akan dibuka di tab baru melalui Stripe (mode test jika
            menggunakan link test).
          </p>
        </div>

        {/* RIGHT: Gambar Perumahan (sumber internet) */}
        <div className="flex-1 flex justify-center">
          <img
            src={heroImage}
            alt="Ilustrasi Perumahan Pesona Parung Asri"
            className="rounded-3xl shadow-md w-full max-w-md object-cover transform transition-transform duration-500 hover:scale-105"
          />
        </div>
      </div>
    </section>
  );
};

export default PaymentSection;
