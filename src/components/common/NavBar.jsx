import { Link, NavLink } from "react-router-dom";
import { useState, useRef, useEffect } from "react";

const baseItems = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Contact", href: "/contact" },
  { name: "Articles", href: "/Articles" },
];

function NavBar() {
  const [isOpen, setIsOpen] = useState(false);
  const popoverRef = useRef(null);
  const user = JSON.parse(localStorage.getItem("user") || null);

  // Fermer le popover quand on clique à l'extérieur
  useEffect(() => {
    function handleClickOutside(event) {
      if (popoverRef.current && !popoverRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("user");
    window.location.href = "/connexion";
  };

  const getUserInitials = () => {
    if (!user?.nomUser) return "US";
    const names = user.nomUser.split(" ");
    return names
      .map((name) => name[0])
      .join("")
      .toUpperCase();
  };

  return (
    <header className="flex justify-between items-center bg-white text-blue-900 p-4 shadow-md">
      <div className="flex items-center gap-4">
        <Link to="/" className="flex items-center">
          <img
            className="h-10 w-auto"
            src="/public/logosbs.png"
            alt="SBS Logo"
          />
        </Link>
        <div className="flex flex-col">
          <h1 className="text-2xl font-bold">SBS Research</h1>
          <p className="text-sm text-gray-600">
            Centre de recherche en informatique appliquée
          </p>
        </div>
      </div>

      <nav className="flex items-center gap-6">
        <ul className="flex justify-between gap-5 text-xl font-medium">
          {baseItems.map((item) => (
            <li
              key={item.href}
              className="hover:text-blue-600 transition-colors duration-300"
            >
              <NavLink
                to={item.href}
                className={({ isActive }) =>
                  `block py-2 px-3 ${
                    isActive ? "text-blue-800 border-b-2 border-blue-800" : ""
                  }`
                }
              >
                {item.name}
              </NavLink>
            </li>
          ))}
        </ul>

        <div className="relative" ref={popoverRef}>
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="flex items-center justify-center w-10 h-10 rounded-full bg-blue-100 text-blue-800 hover:bg-blue-200 transition-colors"
          >
            {user ? (
              <span className="font-medium">{getUserInitials()}</span>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                />
              </svg>
            )}
          </button>

          {isOpen && (
            <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 z-50">
              {user ? (
                <>
                  <div className="px-4 py-2 text-sm text-gray-700 border-b">
                    Connecté en tant que <strong>{user.nomUser}</strong>
                  </div>
                  <button
                    onClick={handleLogout}
                    className="block w-full text-left px-4 py-2 text-sm text-red-600 hover:bg-gray-100"
                  >
                    Déconnexion
                  </button>
                </>
              ) : (
                <>
                  <Link
                    to="/connexion"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    onClick={() => setIsOpen(false)}
                  >
                    Connexion
                  </Link>
                  <Link
                    to="/inscription"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    onClick={() => setIsOpen(false)}
                  >
                    S'inscrire
                  </Link>
                </>
              )}
            </div>
          )}
        </div>
      </nav>
    </header>
  );
}

export default NavBar;
