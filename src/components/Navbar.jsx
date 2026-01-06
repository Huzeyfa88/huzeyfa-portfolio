import { Link } from "react-scroll";

export default function Navbar() {
  return (
    <nav className="fixed top-0 w-full z-50 backdrop-blur-lg bg-white/70 border-b">
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold">
          Huzeyfa<span className="text-blue-600">.</span>
        </h1>

        <ul className="hidden md:flex gap-8 font-medium">
          {["hero", "about", "skills", "projects", "contact"].map(item => (
            <li key={item}>
              <Link
                to={item}
                smooth
                duration={500}
                className="cursor-pointer hover:text-blue-600 transition"
              >
                {item.toUpperCase()}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
