import Article from "../../components/common/Article";
import Header from "../../components/common/Header";
import NavBar from "../../components/common/NavBar";
import "../../App.css";

import Footer from "../../components/common/Footer";

function Home() {
  return (
    <>
      <NavBar />
      <Header
        title="Blog SBS Research"
        subtitle="Découvrez les dernières avancées en informatique appliquée"
        description="Notre centre de recherche partage ses découvertes, analyses et innovations dans le domaine de l'informatique appliquée. Explorez nos articles pour rester à la pointe de la technologie."
      />
      <Article></Article>
      <Footer></Footer>
    </>
  );
}

export default Home;
