import Article from "../../components/common/Article";
import Header from "../../components/common/Header";
import NavBar from "../../components/common/NavBar";
import "../../App.css";
import { useEffect } from "react";
import { useNavigate } from "react-router";
import { QueryClient, useQuery } from "@tanstack/react-query";
import axios from "axios";

function Home() {
  const navigate = useNavigate();
  useEffect(() => {
    if (!localStorage.getItem("user")) {
      navigate("/Connexion");
    }
  });
  // const queryClient = new useQueryClient();
  const { isLoading } = useQuery({
    queryKey: ["posts"],
    queryFn: axios.get("http://localhost:3000/posts").then((res) => res.data),
    onerror: (error) => {
      console.error("Error fetching posts:", error);
    },
  });
  // console.log(query.data);
  if (isLoading) {
    return (
      <div className="flex justify-center items-center h-screen">
        Chargement...
      </div>
    );
  }

  return (
    <>
      <NavBar />
      <Header
        title="Blog SBS Research"
        subtitle="Découvrez les dernières avancées en informatique appliquée"
        description="Notre centre de recherche partage ses découvertes, analyses et innovations dans le domaine de l'informatique appliquée. Explorez nos articles pour rester à la pointe de la technologie."
      />
      <Article></Article>
    </>
  );
}

export default Home;
