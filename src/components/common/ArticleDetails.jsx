import React, { useEffect, useState } from "react";
import NavBar from "./NavBar";
import Header from "./Header";
import axios from "axios";
import { useNavigate, useParams } from "react-router";

export default function ArticleDetails() {
  const [post, setPost] = useState(null);
  const navigate = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    if (!localStorage.getItem("user")) {
      navigate("/Connexion");
    }

    if (id) {
      axios
        .get(`http://localhost:3000/posts/${id}`)
        .then((response) => {
          setPost(response.data);
        })
        .catch((error) => {
          console.error("Error fetching article:", error);
        });
    }
  }, [navigate, id]);

  if (!post) {
    return <p className="text-center mt-10">Chargement de l'article...</p>;
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <NavBar />
      <Header
        title="Article Details"
        subtitle="En savoir plus sur l'article"
        description="Cette page vous permet de consulter les détails de l'article, y compris son contenu, ses images et d'autres informations pertinentes."
      />

      <section className="max-w-4xl mx-auto px-4 py-12 space-y-8">
        {/* Carte de l'article */}
        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          {/* Image de l'article */}
          <div className="h-64 overflow-hidden">
            <img
              src={post.imageUrl}
              alt={post.title}
              className="w-full h-full object-cover"
            />
          </div>

          {/* Contenu de l'article */}
          <div className="p-6 md:p-8">
            <h1 className="text-3xl font-bold text-gray-800 mb-4">
              {post.title}
            </h1>

            <div className="flex items-center text-gray-500 mb-6">
              <span className="mr-4">Par {post.auteur}</span>
              <span>•</span>
              <span className="ml-4">
                {new Date(post.createdAt).toLocaleDateString()}
              </span>
            </div>

            <p className="text-gray-600 leading-relaxed mb-6">{post.content}</p>

            <button className="px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors">
              Lire la suite
            </button>
          </div>
        </div>

        {/* Section À propos de l'auteur */}
        {/* {post.author && (
          <div className="bg-white rounded-lg shadow-md p-6 md:p-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-6">
              À propos de l'auteur
            </h2>

            <div className="flex flex-col md:flex-row items-start gap-6">
              <div className="flex-shrink-0">
                <img
                  src={post.author.avatar}
                  alt={post.author.name}
                  className="w-20 h-20 rounded-full object-cover border-2 border-blue-100"
                />
              </div>

              <div className="flex-1">
                <h3 className="text-xl font-medium text-gray-800 mb-2">
                  {post.author.name}
                </h3>
                <p className="text-gray-600 mb-4">{post.author.bio}</p>

                <div className="flex space-x-4">
                  <a
                    href={post.author.social?.twitter}
                    className="text-blue-500 hover:text-blue-700"
                  >
                    <svg
                      className="w-5 h-5"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675..."></path>
                    </svg>
                  </a>
                  <a
                    href={post.author.social?.linkedin}
                    className="text-blue-500 hover:text-blue-700"
                  >
                    <svg
                      className="w-5 h-5"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14..."></path>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        )} */}
      </section>
    </div>
  );
}
