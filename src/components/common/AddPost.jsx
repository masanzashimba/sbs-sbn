import axios from "axios";
import React from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";

export default function AddPost() {
  const user = JSON.parse(localStorage.getItem("user"));
  const {
    handleSubmit,
    register,
    reset,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    const postData = {
      ...data,
      userId: user.id,
      createdAt: new Date().toISOString(),
      likePost: 0,
      dislikePost: 0,
      auteur: user.nomUser,
    };
    axios
      .post("http://localhost:3000/posts", postData)
      .then((response) => {
        console.log("Article publié avec succès:", response.data);
        toast.success("Article publié avec succès!");
        reset();
        window.location.reload();
      })
      .catch((error) => {
        console.error("Erreur lors de la publication de l'article:", error);
        toast.error("Erreur lors de la publication de l'article");
      });
  };
  return (
    <div className="max-w-3xl mx-auto mt-10 bg-white shadow-lg rounded-lg p-8">
      <h1 className="text-3xl font-bold text-gray-800 mb-6 text-center">
        📝 Ajouter un nouvel article
      </h1>
      <form className="space-y-6" onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label className="block text-gray-700 font-medium mb-2">
            Titre de l'article
          </label>
          <input
            type="text"
            placeholder="Entrez le titre ici"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-cyan-600 focus:outline-none"
            {...register("title", {
              required: "Le titre est requis",
              minLength: {
                value: 5,
                message: "Le titre doit contenir au moins 5 caractères",
              },
            })}
          />
          {errors.title && (
            <p className="mt-2 text-sm text-red-600">{errors.title.message}</p>
          )}
        </div>
        <div>
          <label className="block text-gray-700 font-medium mb-2">
            URL de l'image
          </label>
          <input
            type="url"
            placeholder="https://exemple.com/image.jpg"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-cyan-600 focus:outline-none"
            {...register("imageUrl", {
              required: "L'URL de l'image est requise",
              pattern: {
                value: /^https?:\/\/.+\.(jpg|jpeg|png|webp|gif)$/i,
                message: "Entrez une URL d'image valide",
              },
            })}
          />
          {errors.imageUrl && (
            <p className="mt-2 text-sm text-red-600">
              {errors.imageUrl.message}
            </p>
          )}
        </div>

        <div>
          <label className="block text-gray-700 font-medium mb-2">
            Contenu de l'article
          </label>
          <textarea
            placeholder="Écrivez le contenu ici..."
            className="w-full px-4 py-2 border border-gray-300 rounded-lg h-40 resize-none focus:ring-2 focus:ring-cyan-600 focus:outline-none"
            {...register("content", {
              required: "Le contenu est requis",
              minLength: {
                value: 20,
                message: "Le contenu doit contenir au moins 20 caractères",
              },
            })}
          ></textarea>
          {errors.content && (
            <p className="mt-2 text-sm text-red-600">
              {errors.content.message}
            </p>
          )}
        </div>

        <div className="text-right">
          <button
            type="submit"
            className="px-6 py-2 bg-cyan-700 text-white font-semibold rounded-lg hover:bg-cyan-800 transition"
          >
            Publier
          </button>
        </div>
      </form>
    </div>
  );
}
