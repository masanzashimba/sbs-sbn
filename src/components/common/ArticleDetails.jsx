import React, { useEffect, useState } from "react";
import NavBar from "./NavBar";
import Header from "./Header";
import axios from "axios";
import { useNavigate, useParams } from "react-router";
import Footer from "./Footer";
import DeleteButton from "./DeleteButton";
import { useMutation } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { FadeLoader } from "react-spinners";

export default function ArticleDetails() {
  const userDelete = JSON.parse(localStorage.getItem("user"));
  const mutation = useMutation({
    mutationFn: (id) => {
      return axios.delete(`http://localhost:3000/posts/${id}`);
    },
    onError: (error) => {
      toast.error("Une erreur est survenue");
      console.error(error);
    },
    onSuccess: () => {
      toast.success("Publication supprimée avec succès");
      navigate("/");
    },
  });
  const deletePost = (id) => {
    mutation.mutate(id);
  };

  const [post, setPost] = useState(null);
  const [user, setUser] = useState({});
  const [comments, setComments] = useState([]);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    comment: "",
  });

  const navigate = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    if (!localStorage.getItem("user")) {
      navigate("/Connexion");
    }

    if (id) {
      axios
        .get(`http://localhost:3000/posts/${id}`)
        .then((res) => {
          setPost(res.data);
          return axios.get(`http://localhost:3000/users/${res.data.userId}`);
        })
        .then((userRes) => {
          setUser(userRes.data);
        })
        .catch((error) => console.error("Erreur:", error));

      axios
        .get(`http://localhost:3000/comments?postId=${id}`)
        .then((res) => setComments(res.data))
        .catch((err) => console.error("Erreur chargement commentaires:", err));
    }
  }, [navigate, id]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const newComment = {
      ...formData,
      postId: id,
      date: new Date().toLocaleDateString(),
      avatar:
        "https://icons.veryicon.com/png/o/internet--web/prejudice/user-128.png",
    };

    axios
      .post("http://localhost:3000/comments", newComment)
      .then((res) => {
        setComments((prev) => [...prev, res.data]);
        setFormData({ name: "", email: "", comment: "" });
      })
      .catch((err) => console.error("Erreur publication commentaire:", err));
  };

  if (!post) return <FadeLoader color="#22accb" />;

  return (
    <div className="min-h-screen bg-gray-50">
      <NavBar />
      <Header
        title="Article Details"
        subtitle="En savoir plus sur l'article"
        description="Consultez le contenu, l'auteur et les commentaires associés à cet article."
      />

      <section className="max-w-4xl mx-auto px-4 py-12 space-y-8">
        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          <div className="h-64 overflow-hidden">
            <img
              src={post.imageUrl}
              alt={post.title}
              className="w-full h-full object-cover"
            />
          </div>

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
          </div>
          {userDelete.id === post.userId && (
            <div className="flex items-center p-4">
              <DeleteButton onClick={() => deletePost(post.id)} />{" "}
            </div>
          )}
        </div>

        {user.nomUser && (
          <div className="bg-white rounded-lg shadow-md p-6 md:p-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-6">
              À propos de l'auteur
            </h2>
            <div className="flex gap-6">
              <img
                src={
                  user.avatarUrl ||
                  "https://icons.veryicon.com/png/o/internet--web/prejudice/user-128.png"
                }
                alt={user.nomUser}
                className="w-20 h-20 rounded-full object-cover border-2 border-blue-100"
              />
              <div>
                <h3 className="text-xl font-medium text-gray-800 mb-2">
                  {user.nomUser}
                </h3>
                <h4 className="text-gray-600 mb-1">{user.mailUser}</h4>
                <p className="text-gray-500">Un auteur passionné et engagé.</p>
              </div>
            </div>
          </div>
        )}

        {/* Commentaires */}
        <div className="bg-white rounded-lg shadow-md p-6 md:p-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-6">
            Commentaires ({comments.length})
          </h2>

          <div className="space-y-6 mb-8">
            {comments.length > 0 ? (
              comments.map((comment) => (
                <div key={comment.id} className="flex gap-4 pb-4">
                  <img
                    src={comment.avatar}
                    alt={comment.name}
                    className="w-10 h-10 rounded-full object-cover"
                  />
                  <div>
                    <div className="flex gap-2 text-sm text-gray-700 font-medium">
                      <p>{comment.name}</p>
                      <span className="text-gray-400">• {comment.date}</span>
                    </div>
                    <p className="text-gray-600">{comment.comment}</p>
                  </div>
                </div>
              ))
            ) : (
              <p className="text-gray-500 text-center">
                Aucun commentaire pour le moment.
              </p>
            )}
          </div>

          <form onSubmit={handleSubmit} className="space-y-4 border-t pt-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input
                type="text"
                name="name"
                placeholder="Nom"
                required
                value={formData.name}
                onChange={handleChange}
                className="px-4 py-2 border border-gray-300 rounded-md w-full"
              />
              <input
                type="email"
                name="email"
                placeholder="Email"
                required
                value={formData.email}
                onChange={handleChange}
                className="px-4 py-2 border border-gray-300 rounded-md w-full"
              />
            </div>
            <textarea
              name="comment"
              placeholder="Votre commentaire"
              required
              value={formData.comment}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-md"
              rows="4"
            ></textarea>
            <button
              type="submit"
              className="px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition"
            >
              Publier le commentaire
            </button>
          </form>
        </div>
      </section>
      <Footer></Footer>
    </div>
  );
}
