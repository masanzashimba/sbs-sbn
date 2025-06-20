import React from "react";

export default function ExpertiseSection() {
  return (
    <section className="bg-gray-50 py-16 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        {/* Titre principal */}
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 text-center mb-4">
          Nos domaines d'expertise
        </h2>
        <p className="text-lg text-gray-600 text-center mb-12 max-w-3xl mx-auto">
          Découvrez les domaines dans lesquels notre équipe excelle
        </p>

        {/* Grille des expertises */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* IA */}
          <div className="bg-white border border-gray-200 rounded-lg p-6 shadow hover:shadow-lg transition">
            <h3 className="text-xl font-semibold text-cyan-700 mb-2">
              🤖 Intelligence Artificielle
            </h3>
            <p className="text-gray-600">
              Développement d'algorithmes d'apprentissage automatique et de
              systèmes intelligents pour diverses applications industrielles.
            </p>
          </div>

          {/* Cybersécurité */}
          <div className="bg-white border border-gray-200 rounded-lg p-6 shadow hover:shadow-lg transition">
            <h3 className="text-xl font-semibold text-cyan-700 mb-2">
              🔐 Cybersécurité
            </h3>
            <p className="text-gray-600">
              Recherche avancée en sécurité informatique, cryptographie et
              protection des données sensibles.
            </p>
          </div>

          {/* Systèmes Distribués */}
          <div className="bg-white border border-gray-200 rounded-lg p-6 shadow hover:shadow-lg transition">
            <h3 className="text-xl font-semibold text-cyan-700 mb-2">
              🌐 Systèmes Distribués
            </h3>
            <p className="text-gray-600">
              Conception et optimisation de systèmes distribués haute
              performance pour le cloud computing.
            </p>
          </div>

          {/* IoT */}
          <div className="bg-white border border-gray-200 rounded-lg p-6 shadow hover:shadow-lg transition">
            <h3 className="text-xl font-semibold text-cyan-700 mb-2">
              📡 Internet des Objets (IoT)
            </h3>
            <p className="text-gray-600">
              Développement de solutions IoT innovantes pour les villes
              intelligentes et l'industrie 4.0.
            </p>
          </div>

          {/* AR/VR */}
          <div className="bg-white border border-gray-200 rounded-lg p-6 shadow hover:shadow-lg transition">
            <h3 className="text-xl font-semibold text-cyan-700 mb-2">
              🕶️ Réalité Virtuelle & Augmentée
            </h3>
            <p className="text-gray-600">
              Création d'expériences immersives et d'applications AR/VR pour
              l'éducation et l'industrie.
            </p>
          </div>

          {/* Blockchain */}
          <div className="bg-white border border-gray-200 rounded-lg p-6 shadow hover:shadow-lg transition">
            <h3 className="text-xl font-semibold text-cyan-700 mb-2">
              🔗 Blockchain & DLT
            </h3>
            <p className="text-gray-600">
              Recherche sur les technologies de registres distribués et leurs
              applications dans différents secteurs.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
