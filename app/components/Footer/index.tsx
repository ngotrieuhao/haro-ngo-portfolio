import React from "react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <section>
      <div className="relative w-full text-center py-6 z-10">
        {/* Top Gradient Line */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-px bg-linear-to-r from-brand-yellow via-brand-orangeDark to-brand-yellow" />

        {/* Title */}
        <div className="text-2xl font-semibold mb-4 text-gray-800 dark:text-gray-200">
          Thanks for watching
        </div>

        {/* Copyright */}
        <section className="flex items-center justify-center text-base text-gray-600 dark:text-gray-400 p-2">
          © {currentYear}
          <span className="mx-2">
            <svg
              className="w-[13px] text-red-500"
              aria-hidden="true"
              focusable="false"
              data-prefix="far"
              data-icon="heart"
              role="img"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
            >
              <path
                fill="currentColor"
                d="M458.4 64.3C400.6 15.7 311.3 23 256 79.3 200.7 23 111.4 15.6 53.6 64.3-21.6 127.6-10.6 230.8 43 285.5l175.4 178.7c10 10.2 23.4 15.9 37.6 15.9 14.3 0 27.6-5.6 37.6-15.8L469 285.6c53.5-54.7 64.7-157.9-10.6-221.3zm-23.6 187.5L259.4 430.5c-2.4 2.4-4.4 2.4-6.8 0L77.2 251.8c-36.5-37.2-43.9-107.6 7.3-150.7 38.9-32.7 98.9-27.8 136.5 10.5l35 35.7 35-35.7c37.8-38.5 97.8-43.2 136.5-10.6 51.1 43.1 43.5 113.9 7.3 150.8z"
              />
            </svg>
          </span>
          coded by Haro Ngo
        </section>
      </div>
    </section>
  );
};

export default Footer;
