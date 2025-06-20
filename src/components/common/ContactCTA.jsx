import React from "react";

export default function ContactCTA() {
  return (
    <section className="bg-cyan-700 text-white py-16 px-6 md:px-12">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Collaborons ensemble
        </h2>
        <p className="text-lg md:text-xl mb-8">
          Vous avez un projet de recherche ou souhaitez en savoir plus sur nos
          travaux ?
        </p>
        <a
          href="/contact"
          className="inline-block px-6 py-3 bg-white text-cyan-700 font-semibold rounded-md hover:bg-gray-100 transition"
        >
          Contactez-nous
        </a>
      </div>
    </section>
  );
}
