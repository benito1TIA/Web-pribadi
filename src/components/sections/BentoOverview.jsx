import Container from "../layout/Container";
import overview from "@/data/overviews";

export default function BentoOverview() {
  return (
    <section className="bg-[#09090B] py-20">
      <Container>
        <div className="grid gap-6 md:grid-cols-2">
          {overview.map((item, index) => {
            const Icon = item.icon;

            return (
              <div
                key={index}
                className="rounded-3xl border border-white/10 bg-zinc-900 p-8 transition duration-300 hover:-translate-y-2 hover:border-blue-500/40"
              >
                <div className="mb-6 text-blue-400">
                  <Icon size={32} />
                </div>

                <h3 className="text-xl font-bold">
                  {item.title}
                </h3>

                <p className="mt-3 text-2xl font-semibold">
                  {item.value}
                </p>

                <p className="mt-2 text-zinc-400">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}