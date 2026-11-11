import Container from "../layout/Container";
import skills from "@/data/skills";

export default function Skills() {
  return (
  <section
  id="skills"
  className="bg-[#09090B] py-28"
>
      <Container>
        {/* Heading */}
        <div className="mb-16 text-center">
          <p className="text-blue-400">Skills</p>

          <h2 className="mt-3 text-5xl font-bold">
            Technical Skills
          </h2>

          <p className="mt-4 text-zinc-400">
            Technologies and tools I use to build modern applications.
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid gap-8 lg:grid-cols-2">
          {skills.map((group) => (
            <div
              key={group.category}
              className="rounded-3xl border border-white/10 bg-zinc-900 p-8"
            >
              <h3 className="mb-8 text-2xl font-bold">
                {group.category}
              </h3>

              <div className="space-y-6">
                {group.items.map((skill) => (
                  <div key={skill.name}>
                    <div className="mb-2 flex justify-between">
                      <span>{skill.name}</span>
                      <span>{skill.level}%</span>
                    </div>

                    <div className="h-2 rounded-full bg-zinc-800">
                      <div
                        className="h-2 rounded-full bg-blue-500"
                        style={{
                          width: `${skill.level}%`,
                        }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}