import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import { useCallback } from "react";
import api from "../../api/axios";

export function useRegister() {
  const navigate = useNavigate();

  const registerUser = useCallback(
    async (data) => {
      const { mailUser, password, confirmPassword } = data;

      if (password !== confirmPassword) {
        toast.error("Les mots de passe ne correspondent pas");
        return;
      }

      try {
        const res = await api.get(`/users`, { params: { mailUser } });

        if (res.data.length > 0) {
          toast.error("Un compte avec cet email existe déjà");
          return;
        }

        const response = await api.post(`/users`, data);
        console.log(response.data);
        toast.success("Compte créé avec succès !");
        navigate("/Connexion");
      } catch (error) {
        console.error("Erreur lors de la création du compte:", error);
        toast.error("Erreur lors de la création du compte");
      }
    },
    [navigate]
  );

  return { registerUser };
}
