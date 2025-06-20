import React from "react";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-10">
      <div className="max-w-7xl mx-auto px-6 md:px-8 grid grid-cols-1 md:grid-cols-3 gap-10">
        <div>
          <h3 className="text-xl font-semibold mb-4">SBS Research Center</h3>
          <p className="text-gray-300">
            Centre de recherche en informatique appliquée dédié à l'innovation
            et au développement de solutions technologiques avancées.
          </p>
        </div>

        <div>
          <h3 className="text-xl font-semibold mb-4">Liens rapides</h3>
          <ul className="space-y-2 text-gray-300">
            <li>
              <a href="/" className="hover:text-white transition">
                Accueil
              </a>
            </li>
            <li>
              <a href="/about" className="hover:text-white transition">
                À propos
              </a>
            </li>
            <li>
              <a href="/contact" className="hover:text-white transition">
                Contact
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-xl font-semibold mb-4">Contact</h3>
          <ul className="text-gray-300 space-y-2">
            <li>
              Email :{" "}
              <a
                href="mailto:contact@sbs-research.com"
                className="hover:text-white transition"
              >
                contact@sbs-research.com
              </a>
            </li>
            <li>
              Téléphone :{" "}
              <a
                href="tel:+33123456789"
                className="hover:text-white transition"
              >
                +33 1 23 45 67 89
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-gray-700 mt-10 pt-6 text-center text-gray-400 text-sm">
        © 2024 SBS Research Center. Tous droits réservés.
      </div>
    </footer>
  );
}
