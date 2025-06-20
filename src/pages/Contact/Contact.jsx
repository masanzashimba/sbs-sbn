import FAQSection from "../../components/common/FAQSection";
import Footer from "../../components/common/Footer";
import Header from "../../components/common/Header";
import NavBar from "../../components/common/NavBar";

export default function Contact() {
  return (
    <div>
      <NavBar />
      <Header
        title="Contactez-nous"
        subtitle="Nous serions ravis d'échanger sur vos projets et besoins de recherche"
        description=""
      />
      <FAQSection></FAQSection>
      <Footer></Footer>
    </div>
  );
}
