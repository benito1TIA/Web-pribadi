import Container from "../layout/Container";
import experience from "@/data/experience";

export default function Experience() {
  return (
   <section
  id="experience"
  className="bg-[#09090B] py-28"
>
      <Container>
        {/* Heading */}
        <div className="mb-20 text-center">
          <p className="text-blue-400">Experience</p>

          <h2 className="mt-3 text-5xl font-bold">
            Journey & Experience
          </h2>

          <p className="mt-4 text-zinc-400">
            My academic and organizational journey.
          </p>
        </div>

        <div className="relative mx-auto max-w-4xl">

          {/* Garis Timeline */}
          <div className="absolute left-4 top-0 h-full w-[2px] bg-zinc-700"></div>

          <div className="space-y-12">

            {experience.map((item, index) => (

              <div key={index} className="relative pl-16">

                {/* Titik Timeline */}
                <div className="absolute left-0 top-2 flex h-8 w-8 items-center justify-center rounded-full bg-blue-500 ring-4 ring-zinc-900">
                </div>

                {/* Card */}
                <div className="rounded-3xl border border-white/10 bg-zinc-900 p-8 transition hover:border-blue-500/40">

                  <span className="text-sm text-blue-400">
                    {item.year}
                  </span>

                  <h3 className="mt-2 text-2xl font-bold">
                    {item.title}
                  </h3>

                  <p className="mt-1 text-zinc-400">
                    {item.company}
                  </p>

                  <p className="mt-6 leading-8 text-zinc-400">
                    {item.description}
                  </p>

                </div>

              </div>

            ))}

          </div>

        </div>
      </Container>
    </section>
  );
}