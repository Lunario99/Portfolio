export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="border-t border-line">
      <div className="container flex flex-col items-center justify-between gap-2 py-8 text-sm text-muted sm:flex-row">
        <span>© {year} Daniele Moretti</span>
        <span>Built with Next.js &amp; Tailwind CSS</span>
      </div>
    </footer>
  );
}
