import Reveal from "./Reveal";

type SkillGroup = {
  title: string;
  icon: React.ReactNode;
  items: string[];
};

const stroke = {
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 2,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
};

const GROUPS: SkillGroup[] = [
  {
    title: "Engines & Languages",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" {...stroke}>
        <polyline points="16 18 22 12 16 6" />
        <polyline points="8 6 2 12 8 18" />
      </svg>
    ),
    items: ["Unity 3D", "C#", "Git"],
  },
  {
    title: "Game Design",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" {...stroke}>
        <line x1="6" y1="12" x2="10" y2="12" />
        <line x1="8" y1="10" x2="8" y2="14" />
        <line x1="15" y1="13" x2="15.01" y2="13" />
        <line x1="18" y1="11" x2="18.01" y2="11" />
        <rect x="2" y="6" width="20" height="12" rx="6" />
      </svg>
    ),
    items: [
      "Gameplay Design",
      "Level Design",
      "Narrative Development",
      "Procedural Generation",
    ],
  },
  {
    title: "Art & Audio",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" {...stroke}>
        <circle cx="13.5" cy="6.5" r=".5" fill="currentColor" />
        <circle cx="17.5" cy="10.5" r=".5" fill="currentColor" />
        <circle cx="8.5" cy="7.5" r=".5" fill="currentColor" />
        <circle cx="6.5" cy="12.5" r=".5" fill="currentColor" />
        <path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10c.926 0 1.648-.746 1.648-1.688 0-.437-.18-.835-.437-1.125-.29-.289-.438-.652-.438-1.125a1.64 1.64 0 0 1 1.668-1.668h1.996c3.051 0 5.555-2.503 5.555-5.554C21.965 6.012 17.461 2 12 2z" />
      </svg>
    ),
    items: ["2D Art", "UI / UX Design", "Audio Design"],
  },
  {
    title: "Process",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" {...stroke}>
        <path d="M9 11l3 3L22 4" />
        <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11" />
      </svg>
    ),
    items: ["Solo Development", "Team Collaboration", "Rapid Prototyping"],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="scroll-mt-24">
      <Reveal className="mb-8 text-center">
        <h2 className="text-3xl font-bold tracking-tight md:text-4xl">Skills</h2>
        <p className="mx-auto mt-2 max-w-md text-muted">
          Tools and disciplines I work across to bring games to life.
        </p>
        <div className="mx-auto mt-4 h-1 w-16 rounded-full bg-accent" />
      </Reveal>

      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {GROUPS.map((group, i) => (
          <Reveal
            key={group.title}
            delay={i * 80}
            className="h-full rounded-2xl border border-line bg-surface p-5 shadow-card transition duration-300 hover:-translate-y-1 hover:border-accent/40 hover:shadow-card-hover"
          >
            <div className="mb-4 inline-flex h-11 w-11 items-center justify-center rounded-xl bg-accent/15 text-accent">
              {group.icon}
            </div>
            <h3 className="mb-3 text-lg font-semibold">{group.title}</h3>
            <ul className="flex flex-col gap-2">
              {group.items.map((item) => (
                <li
                  key={item}
                  className="flex items-center gap-2 text-sm text-foreground/85"
                >
                  <span
                    className="h-1.5 w-1.5 shrink-0 rounded-full bg-accent"
                    aria-hidden="true"
                  />
                  {item}
                </li>
              ))}
            </ul>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
