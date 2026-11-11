import { useEffect, useState } from "react";
import { Link } from "react-scroll";
import { Menu, X } from "lucide-react";
import profile from "@/data/profile";

const menus = [
  { name: "Home", to: "home" },
  { name: "About", to: "about" },
  { name: "Skills", to: "skills" },
  { name: "Experience", to: "experience" },
  { name: "Projects", to: "projects" },
  { name: "Contact", to: "contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed left-0 top-0 z-50 w-full transition-all duration-300 ${
        scrolled
          ? "border-b border-zinc-800 bg-black/70 backdrop-blur-xl"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6">
        {/* Logo */}
        <div className="text-2xl font-bold text-white">
          {profile.firstName}
          <span className="text-blue-500">.</span>
        </div>

        {/* Desktop Menu */}
        <nav className="hidden gap-8 lg:flex">
          {menus.map((menu) => (
            <Link
              key={menu.to}
              to={menu.to}
              spy={true}
              smooth={true}
              offset={-80}
              duration={500}
              activeClass="text-blue-500"
              className="cursor-pointer text-zinc-400 transition hover:text-white"
            >
              {menu.name}
            </Link>
          ))}
        </nav>

        {/* Resume Button */}
       <a
  href="/images/CV-Profesi.pdf"
  target="_blank"
  rel="noopener noreferrer"
  className="hidden rounded-xl bg-blue-600 px-5 py-3 text-white transition hover:bg-blue-700 lg:block"
>
  Resume
</a>

        {/* Mobile Button */}
        <button
          onClick={() => setOpen(!open)}
          className="text-white lg:hidden"
        >
          {open ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="border-t border-zinc-800 bg-black lg:hidden">
          {menus.map((menu) => (
            <Link
              key={menu.to}
              to={menu.to}
              smooth
              offset={-80}
              duration={500}
              onClick={() => setOpen(false)}
              className="block cursor-pointer px-6 py-4 text-zinc-300 hover:bg-zinc-900"
            >
              {menu.name}
            </Link>
          ))}
        </div>
      )}
    </header>
  );
}