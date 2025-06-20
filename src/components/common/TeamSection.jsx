import React from "react";

export default function TeamSection() {
  return (
    <section className="bg-white py-16 px-6 md:px-12">
      <div className="max-w-6xl mx-auto text-center">
        {/* Titre principal */}
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
          Notre équipe
        </h2>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-12">
          SBS Research rassemble une équipe multidisciplinaire de chercheurs,
          ingénieurs et experts passionnés par l'innovation technologique. Nos
          équipes combinent expertise académique et expérience industrielle pour
          mener des recherches de classe mondiale.
        </p>

        {/* Statistiques */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 mt-10">
          {/* Chercheurs */}
          <div className="flex flex-col items-center">
            <h3 className="text-4xl font-bold text-cyan-700">50+</h3>
            <p className="text-gray-600 mt-2">Chercheurs & Ingénieurs</p>
          </div>

          {/* Expérience */}
          <div className="flex flex-col items-center">
            <h3 className="text-4xl font-bold text-cyan-700">15+</h3>
            <p className="text-gray-600 mt-2">Années d'expérience</p>
          </div>

          {/* Projets */}
          <div className="flex flex-col items-center">
            <h3 className="text-4xl font-bold text-cyan-700">100+</h3>
            <p className="text-gray-600 mt-2">Projets réalisés</p>
          </div>
        </div>
      </div>
    </section>
  );
}
