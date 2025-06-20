import Footer from "../../components/common/Footer";
import Header from "../../components/common/Header";
import NavBar from "../../components/common/NavBar";
import ExpertiseSection from "../../components/common/ExpertiseSection";
import TeamSection from "../../components/common/TeamSection";
import ContactCTA from "../../components/common/ContactCTA";

function About() {
  return (
    <>
      <NavBar />
      <Header
        title="À propos de SBS Research"
        subtitle="Centre d'excellence en informatique appliquée, pionnier de l'innovation technologique"
        description=""
      />
      <section className="bg-white py-16 px-6 md:px-12">
        <div className="max-w-6xl mx-auto">
          {/* Titre principal */}
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6 text-center">
            Notre Mission
          </h2>

          {/* Description générale */}
          <p className="text-lg text-gray-600 mb-12 text-center max-w-3xl mx-auto">
            SBS Research Center est un centre de recherche de pointe spécialisé
            dans l'informatique appliquée. Nous nous consacrons au développement
            de solutions technologiques innovantes qui transforment les
            industries et améliorent la vie quotidienne.
          </p>

          {/* Grid des valeurs */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Innovation */}
            <div className="bg-gray-50 border border-gray-200 p-6 rounded-lg shadow hover:shadow-md transition">
              <h3 className="text-xl font-semibold text-cyan-700 mb-2">
                🚀 Innovation
              </h3>
              <p className="text-gray-600">
                Nous repoussons constamment les limites de la technologie pour
                créer des solutions révolutionnaires.
              </p>
            </div>

            {/* Excellence */}
            <div className="bg-gray-50 border border-gray-200 p-6 rounded-lg shadow hover:shadow-md transition">
              <h3 className="text-xl font-semibold text-cyan-700 mb-2">
                🌟 Excellence
              </h3>
              <p className="text-gray-600">
                Nous visons l'excellence dans tous nos projets de recherche et
                développement technologique.
              </p>
            </div>

            {/* Collaboration */}
            <div className="bg-gray-50 border border-gray-200 p-6 rounded-lg shadow hover:shadow-md transition">
              <h3 className="text-xl font-semibold text-cyan-700 mb-2">
                🤝 Collaboration
              </h3>
              <p className="text-gray-600">
                Nous croyons en la force de la collaboration interdisciplinaire
                pour résoudre les défis complexes.
              </p>
            </div>

            {/* Impact */}
            <div className="bg-gray-50 border border-gray-200 p-6 rounded-lg shadow hover:shadow-md transition">
              <h3 className="text-xl font-semibold text-cyan-700 mb-2">
                🌍 Impact
              </h3>
              <p className="text-gray-600">
                Nos recherches visent à avoir un impact positif et mesurable sur
                la société et l'industrie.
              </p>
            </div>
          </div>
        </div>
      </section>
      <ExpertiseSection></ExpertiseSection>
      <TeamSection></TeamSection>
      <ContactCTA></ContactCTA>
      <Footer></Footer>
    </>
  );
}
export default About;
