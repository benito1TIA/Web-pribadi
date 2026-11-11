import Container from "../layout/Container";
import profile from "@/data/profile";
import {
  MapPin,
  GraduationCap,
  BriefcaseBusiness,
  Shield,
} from "lucide-react";

export default function About() {
  return (
    <section
      id="about"
      className="bg-[#09090B] py-28"
    >
      <Container>

        {/* Heading */}

        <div className="mb-16 text-center">

          <p className="text-blue-400">
            About Me
          </p>

          <h2 className="mt-3 text-5xl font-bold">
            Get To Know Me
          </h2>

        </div>

        <div className="grid gap-12 lg:grid-cols-2">

          {/* Left */}

        <div className="flex justify-center">

  <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-2 shadow-2xl backdrop-blur-xl">

    {/* Glow */}

    <div className="absolute inset-0 rounded-3xl bg-blue-500/10 blur-3xl" />

    {/* Image */}

    <img
      src={profile.avatar2}
      alt={profile.fullName}
      className="relative h-[420px] w-[340px] rounded-3xl object-cover transition duration-500 hover:scale-105"
    />

  </div>

</div>
          {/* Right */}

          <div>

            <h3 className="text-4xl font-bold">

              {profile.fullName}

            </h3>

            <p className="mt-3 text-blue-400">

              {profile.tagline}

            </p>

            <p className="mt-8 leading-8 text-zinc-400">

              {profile.description}

            </p>

            <div className="mt-10 space-y-5">

              <div className="flex items-center gap-3">

                <MapPin className="text-blue-400" />

                <span>{profile.location}</span>

              </div>

              <div className="flex items-center gap-3">

                <GraduationCap className="text-blue-400" />

                <span>Politeknik Caltex Riau</span>

              </div>

              <div className="flex items-center gap-3">

                <BriefcaseBusiness className="text-blue-400" />

                <span>Backend Developer</span>

              </div>

              <div className="flex items-center gap-3">

                <Shield className="text-blue-400" />

                <span>Cyber Security Enthusiast</span>

              </div>

            </div>

          </div>

        </div>

      </Container>

    </section>
  );
}
