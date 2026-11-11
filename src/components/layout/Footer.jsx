import Container from "./Container";
import profile from "@/data/profile";
import socials from "@/data/socials";
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";
import { Mail } from "lucide-react";


export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-[#09090B] py-16 text-white">
      <Container>
        <div className="grid gap-12 lg:grid-cols-3">

          {/* Brand */}
          <div>
            <h2 className="text-3xl font-bold">
              {profile.fullName}
            </h2>

            <p className="mt-4 text-zinc-400 leading-7">
              {profile.tagline}
            </p>

            <div className="mt-6 flex gap-4">

              <a
                href={socials.github}
                target="_blank"
                rel="noreferrer"
                className="rounded-xl border border-zinc-700 p-3 hover:border-blue-500 hover:bg-blue-500/10 transition"
              >
               <FaGithub size={20} />
              </a>

              <a
                href={socials.linkedin}
                target="_blank"
                rel="noreferrer"
                className="rounded-xl border border-zinc-700 p-3 hover:border-blue-500 hover:bg-blue-500/10 transition"
              >
              <FaLinkedin size={20} />
              </a>

              <a
                href={socials.instagram}
                target="_blank"
                rel="noreferrer"
                className="rounded-xl border border-zinc-700 p-3 hover:border-blue-500 hover:bg-blue-500/10 transition"
              >
               <FaInstagram size={20} />
              </a>

            </div>
          </div>

          {/* Navigation */}
          <div>

            <h3 className="text-xl font-semibold">
              Navigation
            </h3>

            <div className="mt-6 space-y-3">

              <a href="#about" className="block text-zinc-400 hover:text-white">
                About
              </a>

              <a href="#skills" className="block text-zinc-400 hover:text-white">
                Skills
              </a>

              <a href="#projects" className="block text-zinc-400 hover:text-white">
                Projects
              </a>

              <a href="#contact" className="block text-zinc-400 hover:text-white">
                Contact
              </a>

            </div>

          </div>

          {/* Contact */}
          <div>

            <h3 className="text-xl font-semibold">
              Contact
            </h3>

            <div className="mt-6 space-y-4">

              <div className="flex items-center gap-3">

                <Mail
                  size={18}
                  className="text-blue-400"
                />

                <span className="text-zinc-400">
                  {profile.email}
                </span>

              </div>

              <p className="text-zinc-400">
                {profile.location}
              </p>

              <p className="text-zinc-400">
                {profile.phone}
              </p>

            </div>

          </div>

        </div>

        <div className="mt-16 border-t border-white/10 pt-8 text-center text-sm text-zinc-500">

          © {new Date().getFullYear()} {profile.fullName}. All rights reserved.

        </div>

      </Container>
    </footer>
  );
}