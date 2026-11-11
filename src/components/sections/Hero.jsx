import Container from "../layout/Container";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { FiDownload } from "react-icons/fi";
import profile from "@/data/profile";
import { motion } from "framer-motion";
import { fadeLeft, fadeRight } from "@/animations/variants";
import socials from "@/data/socials";
export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen overflow-hidden bg-[#09090B] text-white"
    >
      {/* Background Glow */}
      <div className="absolute left-10 top-20 h-96 w-96 rounded-full bg-blue-500/20 blur-[150px]" />
      <div className="absolute right-10 bottom-20 h-80 w-80 rounded-full bg-cyan-500/20 blur-[150px]" />

      {/* Background Grid */}
      <div
        className="
          absolute inset-0
          opacity-5
          bg-[linear-gradient(to_right,#ffffff20_1px,transparent_1px),linear-gradient(to_bottom,#ffffff20_1px,transparent_1px)]
          bg-[size:60px_60px]
        "
      />

      <Container>
        <div className="relative z-10 grid min-h-screen items-center gap-16 lg:grid-cols-2">
          {/* LEFT */}
        <motion.div
  variants={fadeLeft}
  initial="hidden"
  animate="visible"
>
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-blue-500/30 bg-blue-500/10 px-4 py-2 text-sm text-blue-400">
              <span className="h-2 w-2 rounded-full bg-blue-400"></span>
              {profile.status}
            </div>

            <p className="mb-4 text-lg text-blue-400">👋 Hey, I'm</p>

            <h1 className="text-6xl font-black leading-tight lg:text-7xl">
              {profile.firstName}
              <br />
              <span className="text-blue-500">{profile.lastName}</span>
            </h1>

            <p className="mt-6 text-xl font-semibold text-zinc-300">
              {profile.role}
            </p>

            <p className="mt-6 max-w-xl leading-8 text-zinc-400">
              {profile.description}
            </p>

            {/* Tech Badge */}
            <div className="mt-8 flex flex-wrap gap-3">
              <span className="rounded-full bg-zinc-800 px-4 py-2">
                Software Engineer
              </span>

              <span className="rounded-full bg-zinc-800 px-4 py-2">
                Backend Developer
              </span>

              <span className="rounded-full bg-zinc-800 px-4 py-2">
                Cyber Security
              </span>
            </div>

           {/* Buttons */}
<div className="mt-10 flex flex-wrap gap-4">

  <motion.a
    href="/images/CV-Profesi.pdf"
    target="_blank"
    rel="noopener noreferrer"
    whileHover={{ scale: 1.05 }}
    whileTap={{ scale: 0.95 }}
    className="flex items-center gap-2 rounded-xl bg-gradient-to-r from-blue-600 to-cyan-500 px-6 py-4 font-semibold shadow-lg shadow-blue-500/30 transition"
  >
    <FiDownload />
    Download CV
  </motion.a>

  <motion.a
       href={socials.github}
    target="_blank"
    rel="noopener noreferrer"
    whileHover={{ scale: 1.1 }}
    className="rounded-xl border border-zinc-700 p-4 transition hover:bg-zinc-800"
  >
    <FaGithub size={20} />
  </motion.a>

  <motion.a
   href={socials.linkedin}
    target="_blank"
    rel="noopener noreferrer"
    whileHover={{ scale: 1.1 }}
    className="rounded-xl border border-zinc-700 p-4 transition hover:bg-zinc-800"
  >
    <FaLinkedin size={20} />
  </motion.a>

</div>
          </motion.div>

          {/* RIGHT */}
        <motion.div
  className="flex justify-center"
  variants={fadeRight}
  initial="hidden"
  animate="visible"
>
          <motion.div
  whileHover={{
    y: -8,
    scale: 1.02,
  }}
  transition={{
    duration: 0.3,
  }}
 className="w-[390px] rounded-3xl border border-white/10 bg-white/5 p-8 shadow-[0_20px_60px_rgba(0,0,0,.5)] backdrop-blur-xl"
>
          <div className="relative mx-auto w-fit">

  <div className="absolute inset-0 rounded-full bg-blue-500 opacity-30 blur-3xl"></div>

  <motion.img
    whileHover={{
      scale: 1.08,
      rotate: 2,
    }}
    transition={{
      duration: 0.3,
    }}
    src={profile.avatar}
    alt={profile.fullName}
    className="relative mx-auto h-44 w-44 rounded-full border-4 border-blue-500 object-cover shadow-xl"
  />

</div>
              <h2 className="mt-6 text-center text-2xl font-bold">
                {profile.fullName}
              </h2>

              <p className="text-center text-blue-400">{profile.role}</p>

              <div className="mt-8 space-y-4">
                <div className="rounded-xl bg-zinc-800 p-4">
                  📍 {profile.location}
                </div>

                <div className="rounded-xl bg-zinc-800 p-4">
                  🎓 {profile.university}
                </div>

                <div className="rounded-xl bg-zinc-800 p-4">
                  💼 {profile.status}
                </div>
              </div>
            </motion.div>
            
          </motion.div>
        </div>

        {/* Stats */}
        <div className="grid gap-6 pb-16 md:grid-cols-4">
          <div className="rounded-2xl bg-zinc-900 p-6">
            <h3 className="text-3xl font-bold text-blue-400">12+</h3>
            <p className="text-zinc-400">Projects</p>
          </div>

          <div className="rounded-2xl bg-zinc-900 p-6">
            <h3 className="text-3xl font-bold text-blue-400">20+</h3>
            <p className="text-zinc-400">Technologies</p>
          </div>

          <div className="rounded-2xl bg-zinc-900 p-6">
            <h3 className="text-3xl font-bold text-blue-400">Backend</h3>
            <p className="text-zinc-400">Specialization</p>
          </div>

          <div className="rounded-2xl bg-zinc-900 p-6">
            <h3 className="text-3xl font-bold text-blue-400">Cyber</h3>
            <p className="text-zinc-400">Security</p>
          </div>
        </div>
      </Container>
    </section>
  );
}