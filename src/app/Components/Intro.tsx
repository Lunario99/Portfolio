import { SOCIAL_LINKS, SocialButton } from "./socials";

export default function Intro({
  name,
  description,
}: {
  name: string;
  description: string;
}) {
  return (
    <section
      id="home"
      className="animate-fade-up relative scroll-mt-24 overflow-hidden rounded-2xl border border-line bg-surface shadow-card"
    >
      {/* Decorative accent glow */}
      <div
        className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-accent/20 blur-3xl"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute -bottom-32 -left-20 h-72 w-72 rounded-full bg-accent/10 blur-3xl"
        aria-hidden="true"
      />

      <div className="relative flex flex-col items-center gap-6 px-6 py-16 text-center md:px-10 md:py-24">
        <p className="font-mono text-sm uppercase tracking-[0.3em] text-accent">
          Game Designer
        </p>

        <h1 className="text-5xl font-bold tracking-tight sm:text-6xl md:text-7xl">
          {name}
        </h1>

        <p className="max-w-2xl text-base leading-relaxed text-foreground/85 md:text-lg">
          {description}
        </p>

        <div className="flex flex-wrap justify-center gap-3 pt-2">
          {SOCIAL_LINKS.map((link) => (
            <SocialButton key={link.label} link={link} />
          ))}
        </div>
      </div>
    </section>
  );
}
