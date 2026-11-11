import Container from "../layout/Container";
import projects from "@/data/projects";
import { motion } from "framer-motion";
import { FaGithub } from "react-icons/fa";
import { FiExternalLink } from "react-icons/fi";
import { Link } from "react-router-dom";
export default function Projects() {
  return (
    <section
      id="projects"
      className="bg-[#09090B] py-28 text-white"
    >
      <Container>

        {/* Heading */}

        <div className="mb-16 text-center">

          <p className="text-blue-400 font-semibold">
            MY WORK
          </p>

          <h2 className="mt-4 text-5xl font-bold">
            Featured Projects
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-zinc-400">
            Berikut beberapa project yang pernah saya kerjakan,
            mulai dari Web Development,
            Dashboard Analytics,
            hingga Game Development.
          </p>

        </div>

        {/* Project Cards */}

        <div className="grid gap-8 lg:grid-cols-2">

          {projects.map((project) => (

  <Link
    key={project.id}
    to={`/projects/${project.slug}`}
  >

    <motion.div
      whileHover={{
        y: -10,
        scale: 1.02,
      }}
      transition={{
        duration: 0.3,
      }}
      className="cursor-pointer overflow-hidden rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl"
    >

              {/* Image */}

              <div className="overflow-hidden">

                <motion.img
                  whileHover={{
                    scale: 1.05,
                  }}
                  transition={{
                    duration: 0.4,
                  }}
                  src={project.image}
                  alt={project.title}
                  className="h-60 w-full object-cover"
                />

              </div>

              {/* Content */}

              <div className="p-8">

                <h3 className="text-2xl font-bold">
                  {project.title}
                </h3>

                <p className="mt-4 leading-7 text-zinc-400">
                  {project.description}
                </p>

                {/* Tech */}

                <div className="mt-6 flex flex-wrap gap-2">

               {project.tech?.map((tech) => (

                    <span
                      key={tech}
                      className="rounded-full bg-blue-500/10 px-4 py-2 text-sm text-blue-400"
                    >
                      {tech}
                    </span>

                  ))}

                </div>

                {/* Buttons */}

                <div className="mt-8 flex gap-4">

                <a
  href={project.github}
  target="_blank"
  rel="noopener noreferrer"
  onClick={(e) => e.stopPropagation()}
  className="flex items-center gap-2 rounded-xl bg-zinc-800 px-5 py-3 transition hover:bg-zinc-700"
>
  <FaGithub size={18} />
  Github
</a>

                  {project.demo && (
                 <a
  href={project.demo}
  target="_blank"
  rel="noopener noreferrer"
  onClick={(e) => e.stopPropagation()}
  className="flex items-center gap-2 rounded-xl bg-blue-600 px-5 py-3 transition hover:bg-blue-700"
>
  <FiExternalLink size={18} />
  Live Demo
</a>
                  )}

                </div>

              </div>

            </motion.div>
</Link>
          ))}

        </div>

      </Container>
    </section>
  );
}