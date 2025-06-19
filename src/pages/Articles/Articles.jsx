import React from "react";
import Header from "../../components/common/Header";
import NavBar from "../../components/common/NavBar";
import Button from "../../components/common/Button";
import { Link } from "react-router";
import Article from "../../components/common/Article";

export default function Articles() {
  return (
    <>
      <NavBar></NavBar>
      <Header
        title="Tous nos articles"
        decription="Découvrez les dernières avancées en informatique appliquée à travers nos articles. Restez informé des tendances et des innovations qui façonnent notre domaine."
      ></Header>
      <div className="flex justify-center mt-4">
        <Link to="/Articles/CreatePost">
          <Button className="bg-cyan-700 hover:bg-cyan-950 text-white">
            Ajouter un article
          </Button>
        </Link>
      </div>
      <div className="mt-4">
        <Article />.
      </div>
    </>
  );
}
