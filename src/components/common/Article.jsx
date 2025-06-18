import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import axios from "axios";
import Button from "./Button";

export default function Article() {
  const [posts, setPosts] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    if (!localStorage.getItem("user")) {
      navigate("/Connexion");
    }

    axios
      .get("http://localhost:3000/posts")
      .then((response) => {
        setPosts(response.data);
      })
      .catch((error) => {
        console.error("Error fetching posts:", error);
      });
  }, [navigate]);

  return (
    <section className="flex flex-col items-center py-16 px-4 bg-gray-50 min-h-screen">
      <h2 className="text-3xl font-bold text-gray-900 mb-2">
        Articles Récents
      </h2>
      <p className="text-lg text-gray-600 mb-10 text-center">
        Découvrez nos dernières publications et recherches
      </p>

      {/* Grille des cartes */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 w-full max-w-7xl">
        {posts.map((item) => (
          <div
            key={item.id}
            className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition duration-300 flex flex-col"
          >
            <img
              src={item.imageUrl}
              alt={item.title}
              className="h-48 w-full object-cover"
            />

            <div className="p-6 flex flex-col justify-between flex-grow">
              <div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                  {item.title}
                </h3>
                <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                  {item.content}
                </p>
                <p className="text-sm text-gray-400">Auteur : {item.auteur}</p>
              </div>
              <div className="mt-4 flex justify-between items-center">
                <Button>Voir l'article</Button>
              </div>

              {/* <div className="mt-6">
                <Button
                  text="Voir l'article"
                  onClick={() => navigate(`/Articles/${item.id}`)}
                  className="w-full bg-cyan-700 hover:bg-cyan-900 text-white"
                />

              </div> */}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
