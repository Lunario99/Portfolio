import GenericCarousel from "./GenericCarousel";
import Reveal from "./Reveal";

export default function Project({
  title,
  type,
  role,
  engine,
  description,
  gallery,
}: {
  title: string;
  type: string;
  role: string;
  engine: string;
  description: string;
  gallery: string[];
}) {
  const roles = role.split(",").map((r) => r.trim());

  return (
    <Reveal
      as="article"
      className="overflow-hidden rounded-2xl border border-line bg-surface shadow-card transition duration-300 hover:-translate-y-1 hover:border-accent/40 hover:shadow-card-hover"
    >
      <div className="grid gap-6 p-5 md:grid-cols-2 md:gap-8 md:p-6">
        <GenericCarousel gallery={gallery} title={title} />

        <div className="flex flex-col">
          <div className="mb-3 flex flex-wrap items-center gap-2">
            <span className="rounded-full bg-accent/15 px-3 py-1 text-xs font-medium text-accent-soft">
              {type}
            </span>
            <span className="rounded-full border border-line px-3 py-1 font-mono text-xs text-muted">
              {engine}
            </span>
          </div>

          <h3 className="mb-3 text-2xl font-bold tracking-tight md:text-3xl">
            {title}
          </h3>

          <div className="mb-4 flex flex-wrap gap-1.5">
            {roles.map((r) => (
              <span
                key={r}
                className="rounded-md bg-background/60 px-2 py-1 text-xs text-muted"
              >
                {r}
              </span>
            ))}
          </div>

          <p className="text-sm leading-relaxed text-foreground/85 md:text-base">
            {description}
          </p>
        </div>
      </div>
    </Reveal>
  );
}
