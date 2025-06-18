import { Link, NavLink } from "react-router-dom";

const items = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Contact", href: "/contact" },
  { name: "Connexion", href: "/connexion" },
  { name: "Inscription", href: "/inscription" },
];

function NavBar() {
  const navItems = items.map((item) => (
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
  ));

  return (
    <header className="flex justify-between items-center bg-white text-blue-900 p-4 shadow-md">
      <div className="flex items-center gap-4">
        <Link to="/" className="flex items-center ">
          <img
            className="h-10 w-auto"
            src="/public/logosbs.png"
            alt="SBS Logo"
          />
        </Link>
        <div className="flex flex-col">
          <h1 className="text-2xl font-bold ">SBS Research</h1>
          <p className="text-sm text-gray-600">
            Centre de recherche en informatique appliquée
          </p>
        </div>
      </div>
      <nav className="flex items-center">
        <ul className="flex justify-between gap-5 text-xl font-medium">
          {navItems}
        </ul>
      </nav>
    </header>
  );
}

export default NavBar;
