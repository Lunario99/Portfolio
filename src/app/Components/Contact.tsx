import Reveal from "./Reveal";
import { SOCIAL_LINKS, SocialButton } from "./socials";

export default function Contact() {
  return (
    <section id="contact" className="scroll-mt-24">
      <Reveal className="relative overflow-hidden rounded-2xl border border-line bg-surface px-6 py-14 text-center shadow-card md:px-10 md:py-16">
        <div
          className="pointer-events-none absolute -top-24 left-1/2 h-64 w-64 -translate-x-1/2 rounded-full bg-accent/15 blur-3xl"
          aria-hidden="true"
        />
        <div className="relative flex flex-col items-center gap-5">
          <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
            Let&apos;s connect
          </h2>
          <p className="max-w-xl text-base leading-relaxed text-foreground/85">
            Interested in my work or want to chat about a project? You&apos;ll
            find me on the platforms below — I&apos;d love to hear from you.
          </p>
          <div className="flex flex-wrap justify-center gap-3 pt-2">
            {SOCIAL_LINKS.map((link) => (
              <SocialButton key={link.label} link={link} />
            ))}
          </div>
        </div>
      </Reveal>
    </section>
  );
}
