import Container from "../layout/Container";
import certificates from "@/data/certificates";
import { motion } from "framer-motion";
import { FiExternalLink } from "react-icons/fi";

export default function Certificates() {
  return (
    <section
      id="certificates"
      className="bg-[#09090B] py-28 text-white"
    >
      <Container>
        {/* Heading */}
        <div className="mb-16 text-center">
          <p className="font-semibold text-blue-400">
            CERTIFICATES
          </p>

          <h2 className="mt-4 text-5xl font-bold">
            Professional Certifications
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-zinc-400">
            Sertifikasi yang saya peroleh selama mengikuti
            pelatihan dan pembelajaran di bidang Networking,
            Software Development, dan Cyber Security.
          </p>
        </div>

        {/* Cards */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {certificates.map((certificate) => (
            <motion.div
              key={certificate.id}
              whileHover={{
                y: -8,
                scale: 1.02,
              }}
              transition={{
                duration: 0.3,
              }}
              className="overflow-hidden rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl"
            >
              {/* Image */}

              <div className="overflow-hidden">
                <motion.img
                  whileHover={{
                    scale: 1.05,
                  }}
                  transition={{
                    duration: 0.3,
                  }}
                  src={certificate.image}
                  alt={certificate.title}
                  className="h-56 w-full object-cover"
                />
              </div>

              {/* Content */}

              <div className="p-6">
                <h3 className="text-xl font-bold">
                  {certificate.title}
                </h3>

                <p className="mt-2 text-zinc-400">
                  {certificate.issuer}
                </p>

                <p className="mt-1 text-sm text-zinc-500">
                  {certificate.issueDate}
                </p>

                {/* Skills */}

                <div className="mt-5 flex flex-wrap gap-2">
                  {certificate.skills.map((skill) => (
                    <span
                      key={skill}
                      className="rounded-full bg-blue-500/10 px-3 py-1 text-xs text-blue-400"
                    >
                      {skill}
                    </span>
                  ))}
                </div>

                {/* Button */}

                {certificate.credential && (
                  <a
                    href={certificate.credential}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-6 inline-flex items-center gap-2 rounded-xl bg-blue-600 px-5 py-3 transition hover:bg-blue-700"
                  >
                    <FiExternalLink />
                    View Credential
                  </a>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}