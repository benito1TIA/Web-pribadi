import Container from "../layout/Container";
import profile from "@/data/profile";
import socials from "@/data/socials";

import {
  Mail,
  Phone,
  MapPin,
  Send,
} from "lucide-react";

import {
  FaGithub,
  FaLinkedin,
  FaInstagram,
} from "react-icons/fa";

export default function Contact() {
  return (
  <section
  id="contact"
  className="bg-[#09090B] py-28"
>
      <Container>
        {/* Heading */}
        <div className="mb-20 text-center">
          <p className="text-blue-400">Contact</p>

          <h2 className="mt-3 text-5xl font-bold">
            Let's Build Something Together
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-zinc-400">
            Saya terbuka untuk peluang magang, freelance,
            kolaborasi proyek, maupun diskusi mengenai software
            development dan cyber security.
          </p>
        </div>

        <div className="grid gap-10 lg:grid-cols-2">

          {/* LEFT */}
          <div className="space-y-6">

            <div className="rounded-3xl border border-white/10 bg-zinc-900 p-8">

              <h3 className="mb-8 text-2xl font-bold">
                Contact Information
              </h3>

              <div className="space-y-6">

                {/* Email */}
                <a
                  href={socials.email}
                  className="flex items-center gap-5 transition hover:text-blue-400"
                >
                  <div className="rounded-xl bg-blue-500/10 p-4 text-blue-400">
                    <Mail />
                  </div>

                  <div>
                    <p className="text-sm text-zinc-500">
                      Email
                    </p>

                    <p>{profile.email}</p>
                  </div>
                </a>

                {/* Phone */}
                <div className="flex items-center gap-5">

                  <div className="rounded-xl bg-blue-500/10 p-4 text-blue-400">
                    <Phone />
                  </div>

                  <div>
                    <p className="text-sm text-zinc-500">
                      Phone
                    </p>

                    <p>{profile.phone}</p>
                  </div>

                </div>

                {/* Location */}
                <div className="flex items-center gap-5">

                  <div className="rounded-xl bg-blue-500/10 p-4 text-blue-400">
                    <MapPin />
                  </div>

                  <div>
                    <p className="text-sm text-zinc-500">
                      Location
                    </p>

                    <p>{profile.location}</p>
                  </div>

                </div>

              </div>

            </div>

            {/* Social Media */}
            <div className="rounded-3xl border border-white/10 bg-zinc-900 p-8">

              <h3 className="mb-6 text-2xl font-bold">
                Follow Me
              </h3>

              <div className="flex gap-4">

                <a
                  href={socials.github}
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-xl border border-zinc-700 p-4 transition hover:border-blue-500 hover:bg-blue-500/10"
                >
                  <FaGithub />
                </a>

                <a
                  href={socials.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-xl border border-zinc-700 p-4 transition hover:border-blue-500 hover:bg-blue-500/10"
                >
                  <FaLinkedin />
                </a>

                <a
                  href={socials.instagram}
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-xl border border-zinc-700 p-4 transition hover:border-blue-500 hover:bg-blue-500/10"
                >
                  <FaInstagram />
                </a>

              </div>

            </div>

          </div>

          {/* RIGHT */}
          <div className="rounded-3xl border border-white/10 bg-zinc-900 p-8">

            <h3 className="mb-8 text-2xl font-bold">
              Send Message
            </h3>

            <form className="space-y-5">

              <input
                type="text"
                placeholder="Your Name"
                className="w-full rounded-xl border border-zinc-700 bg-zinc-800 px-5 py-4 outline-none transition focus:border-blue-500"
              />

              <input
                type="email"
                placeholder="Your Email"
                className="w-full rounded-xl border border-zinc-700 bg-zinc-800 px-5 py-4 outline-none transition focus:border-blue-500"
              />

              <input
                type="text"
                placeholder="Subject"
                className="w-full rounded-xl border border-zinc-700 bg-zinc-800 px-5 py-4 outline-none transition focus:border-blue-500"
              />

              <textarea
                rows={6}
                placeholder="Write your message..."
                className="w-full rounded-xl border border-zinc-700 bg-zinc-800 px-5 py-4 outline-none transition focus:border-blue-500"
              />

              <button
                className="flex w-full items-center justify-center gap-2 rounded-xl bg-blue-600 py-4 font-semibold transition hover:bg-blue-700"
              >
                <Send size={18} />
                Send Message
              </button>

            </form>

          </div>

        </div>

      </Container>
    </section>
  );
}