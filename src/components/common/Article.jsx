import React, { useEffect } from "react";
import { useNavigate } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import Button from "./Button";
import { SyncLoader } from "react-spinners";
import { fetchPosts } from "../../app/posts/postSlice";

export default function Article() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { items: posts, status, error } = useSelector((state) => state.posts);

  useEffect(() => {
    if (!localStorage.getItem("user")) {
      navigate("/Connexion");
    }
    dispatch(fetchPosts());
  }, [dispatch, navigate]);

  if (status === "loading") {
    return (
      <div className="flex justify-center items-center h-screen">
        <SyncLoader color="#0894e2" />
      </div>
    );
  }

  if (status === "failed") {
    return <div>Error: {error}</div>;
  }

  const sortedPosts = [...posts].sort((a, b) => {
    return new Date(b.createdAt) - new Date(a.createdAt);
  });

  return (
    <section className="flex flex-col items-center py-16 px-4 bg-gray-50 min-h-screen">
      <h2 className="text-3xl font-bold text-gray-900 mb-2">
        Articles Récents
      </h2>
      <p className="text-lg text-gray-600 mb-10 text-center">
        Découvrez nos dernières publications et recherches
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 w-full max-w-7xl">
        {sortedPosts.map((item) => (
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
                <Button onClick={() => navigate(`/Articles/${item.id}`)}>
                  Voir l'article
                </Button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
