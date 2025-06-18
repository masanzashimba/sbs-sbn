import React from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import axios from "axios";
import { useNavigate } from "react-router";

export default function Inscription() {
  const navigate = useNavigate();
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    if (data.password !== data.confirmPassword) {
      toast.error("Les mots de passe ne correspondent pas");
      return;
    } else {
      axios
        .get(`http://localhost:3000/users?mailUser=${data.mailUser}`)
        .then((response) => {
          if (response.data.length > 0) {
            toast.error("Un compte avec cet email existe déjà");
          } else {
            axios
              .post("http://localhost:3000/users", data)
              .then((res) => {
                console.log(res.data);
                toast.success("Compte créé avec succès!");
                navigate("/Connexion");
              })
              .catch((error) => {
                console.error("Erreur lors de la création du compte:", error);
                toast.error("Erreur lors de la création du compte");
              });
          }
        });
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
          Créer un compte
        </h2>
      </div>

      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
        <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
          <form className="space-y-6" onSubmit={handleSubmit(onSubmit)}>
            {/* Champ Nom */}
            <div>
              <label
                htmlFor="nom"
                className="block text-sm font-medium text-gray-700"
              >
                Nom complet
              </label>
              <div className="mt-1">
                <input
                  id="nom"
                  type="text"
                  placeholder="Entrez votre nom complet"
                  autoComplete="name"
                  {...register("nomUser", {
                    required: "Veuillez remplir ce champs",
                    minLength: {
                      value: 3,
                      message: "Le nom doit contenir au moins 3 caractères",
                    },
                  })}
                  className={`appearance-none block w-full px-3 py-2 border  rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm`}
                />
                {errors.nom && (
                  <p className="mt-2 text-sm text-red-600">
                    {errors.nom.message}
                  </p>
                )}
              </div>
            </div>
            {/* Champ Email */}
            <div>
              <label
                htmlFor="nom"
                className="block text-sm font-medium text-gray-700"
              >
                Email
              </label>
              <div className="mt-1">
                <input
                  id="email"
                  type="email"
                  placeholder="Entrez votre adresse email"
                  autoComplete="email"
                  {...register("mailUser", {
                    required: "Veuillez remplir votre adresse email",
                    pattern: {
                      value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                      message: "Adresse email invalide",
                    },
                  })}
                  className={`appearance-none block w-full px-3 py-2 border  rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm`}
                />
                {errors.nom && (
                  <p className="mt-2 text-sm text-red-600">
                    {errors.nom.message}
                  </p>
                )}
              </div>
            </div>

            {/* Champ Mot de passe */}
            <div>
              <label
                htmlFor="password"
                className="block text-sm font-medium text-gray-700"
              >
                Mot de passe
              </label>
              <div className="mt-1">
                <input
                  id="password"
                  type="password"
                  placeholder="Entrez votre mot de passe"
                  autoComplete="new-password"
                  {...register("password", {
                    required: "Ce champ est obligatoire",
                    minLength: {
                      value: 8,
                      message:
                        "Le mot de passe doit contenir au moins 8 caractères",
                    },
                  })}
                  className={`appearance-none block w-full px-3 py-2 border  rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm`}
                />
                {errors.password && (
                  <p className="mt-2 text-sm text-red-600">
                    {errors.password.message}
                  </p>
                )}
              </div>
            </div>

            {/* Champ Confirmation mot de passe */}
            <div>
              <label
                htmlFor="confirmPassword"
                className="block text-sm font-medium text-gray-700"
              >
                Confirmer le mot de passe
              </label>
              <div className="mt-1">
                <input
                  id="confirmPassword"
                  type="password"
                  placeholder="Confirmez votre mot de passe"
                  autoComplete="new-password"
                  {...register("confirmPassword", {
                    required: "Veuillez confirmer votre mot de passe",
                    //   validate: (value) =>
                    //     value === password ||
                    //     "Les mots de passe ne correspondent pas",
                  })}
                  className={`appearance-none block w-full px-3 py-2 border  rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm`}
                />
                {errors.confirmPassword && (
                  <p className="mt-2 text-sm text-red-600">
                    {errors.confirmPassword.message}
                  </p>
                )}
              </div>
            </div>

            {/* Bouton de soumission */}
            <div>
              <button
                type="submit"
                className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
              >
                S'inscrire
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
