import Reveal from "./Reveal";

const FACTS = [
  { value: "B.Des", label: "Design (Games)" },
  { value: "RMIT", label: "Distinction" },
  { value: "Unity", label: "3D · C#" },
];

export default function About() {
  return (
    <section id="about" className="scroll-mt-24">
      <div className="grid gap-8 md:grid-cols-[1fr_minmax(0,360px)] md:items-center">
        <Reveal>
          <h2 className="mb-4 text-3xl font-bold tracking-tight md:text-4xl">
            About
          </h2>
          <div className="mb-6 h-1 w-16 rounded-full bg-accent" />
          <div className="flex flex-col gap-4 text-base leading-relaxed text-foreground/85">
            <p>
              I&apos;m a graduate game designer with a Bachelor of Design (Games)
              from RMIT, where I achieved Distinction. My focus sits at the
              intersection of game design, narrative development, and interactive
              experiences.
            </p>
            <p>
              I started out building personal projects in Unity to learn C# and
              the fundamentals of design, then carried that drive through
              university — taking on everything from solo procedural-generation
              experiments to collaborative team projects under real deadlines.
            </p>
            <p>
              I&apos;m meticulous by nature and enjoy owning a project
              end-to-end, but I&apos;ve also learned how much sharper the work
              gets when a team shares a goal.
            </p>
          </div>
        </Reveal>

        <Reveal delay={120} className="grid grid-cols-3 gap-3 md:grid-cols-1">
          {FACTS.map((fact) => (
            <div
              key={fact.label}
              className="rounded-2xl border border-line bg-surface p-4 text-center shadow-card md:flex md:items-baseline md:justify-between md:text-left"
            >
              <span className="block text-2xl font-bold text-accent md:text-3xl">
                {fact.value}
              </span>
              <span className="mt-1 block text-xs text-muted md:mt-0 md:text-sm">
                {fact.label}
              </span>
            </div>
          ))}
        </Reveal>
      </div>
    </section>
  );
}
