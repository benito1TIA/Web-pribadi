import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  ArrowLeft,
  ExternalLink,
  CheckCircle2,
} from "lucide-react";
import { FaGithub } from "react-icons/fa";

import Container from "@/components/layout/Container";
import projects from "@/data/projects";

export default function ProjectDetail() {
  const { slug } = useParams();

  const project = projects.find((item) => item.slug === slug);

  if (!project) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-[#09090B] text-white">
        <div className="text-center">
          <h1 className="text-5xl font-bold">
            404
          </h1>

          <p className="mt-4 text-zinc-400">
            Project tidak ditemukan.
          </p>

          <Link
            to="/"
            className="mt-8 inline-flex items-center gap-2 rounded-xl bg-blue-600 px-6 py-3 hover:bg-blue-700 transition"
          >
            <ArrowLeft size={18} />
            Back Home
          </Link>
        </div>
      </div>
    );
  }

  return (
    <section className="min-h-screen bg-[#09090B] text-white">

      {/* ================= HERO ================= */}

      <div className="relative h-[520px] overflow-hidden">

        <img
          src={project.image}
          alt={project.title}
          className="h-full w-full object-cover"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-[#09090B] via-black/70 to-black/30" />

        <Container>

          <div className="absolute bottom-16">

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-blue-400 font-semibold"
            >
              Featured Project
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: .1 }}
              className="mt-3 text-5xl lg:text-7xl font-black"
            >
              {project.title}
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: .2 }}
              className="mt-5 max-w-2xl text-lg text-zinc-300"
            >
              {project.shortDescription}
            </motion.p>

          </div>

        </Container>

      </div>

      {/* ================= CONTENT ================= */}

      <Container>

        {/* About */}

        <section className="py-20">

          <h2 className="text-4xl font-bold">
            About this Project
          </h2>

          <p className="mt-8 max-w-4xl leading-8 text-zinc-400">
            {project.description}
          </p>

        </section>

        {/* Tech */}

        <section className="pb-20">

          <h2 className="text-4xl font-bold">
            Tech Stack
          </h2>

          <div className="mt-8 flex flex-wrap gap-4">

            {project.tech?.map((tech) => (

              <span
                key={tech}
                className="rounded-full border border-blue-500/20 bg-blue-500/10 px-5 py-3 text-blue-400"
              >
                {tech}
              </span>

            ))}

          </div>

        </section>

        {/* Features */}

        <section className="pb-20">

          <h2 className="text-4xl font-bold">
            Features
          </h2>

          <div className="mt-10 grid gap-6 md:grid-cols-2">

            {project.features?.map((feature) => (

              <motion.div
                whileHover={{
                  y: -5,
                }}
                key={feature}
                className="flex items-center gap-4 rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl"
              >

                <CheckCircle2
                  size={24}
                  className="text-blue-400"
                />

                <p>{feature}</p>

              </motion.div>

            ))}

          </div>

        </section>

        {/* Gallery */}

        <section className="pb-20">

          <h2 className="text-4xl font-bold">
            Gallery
          </h2>

          <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">

            {project.gallery?.map((image, index) => (

              <motion.img
                key={index}
                whileHover={{
                  scale: 1.03,
                }}
                src={image}
                alt={project.title}
                className="rounded-2xl border border-white/10 shadow-xl"
              />

            ))}

          </div>

        </section>

        {/* Buttons */}

        <section className="pb-28">

          <div className="flex flex-wrap gap-4">

            {project.github && (

              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 rounded-xl bg-zinc-800 px-6 py-4 transition hover:bg-zinc-700"
              >
                <FaGithub size={20} />
                Github
              </a>

            )}

            {project.demo && (

              <a
                href={project.demo}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 rounded-xl bg-blue-600 px-6 py-4 transition hover:bg-blue-700"
              >
                <ExternalLink size={20} />
                Live Demo
              </a>

            )}

            <Link
              to="/"
              className="flex items-center gap-3 rounded-xl border border-white/10 px-6 py-4 hover:bg-white/5 transition"
            >
              <ArrowLeft size={20} />
              Back to Portfolio
            </Link>

          </div>

        </section>

      </Container>

    </section>
  );
}