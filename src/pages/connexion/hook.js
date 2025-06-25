import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import { useCallback } from "react";
import api from "../../api/axios";

export function useLogin() {
  const navigate = useNavigate();

  const login = useCallback(
    async ({ mailUser, password }) => {
      try {
        const response = await api.get(`/users`, {
          params: { mailUser, motDePasse: password },
        });

        if (response.data.length > 0) {
          const user = response.data[0];
          localStorage.setItem("user", JSON.stringify(user));
          toast.success("Connexion réussie !");
          navigate("/");
        } else {
          toast.error("Identifiants incorrects, veuillez réessayer.");
        }
      } catch (error) {
        toast.error("Une erreur est survenue. Veuillez réessayer.");
        console.error(error);
      }
    },
    [navigate]
  );

  return { login };
}
