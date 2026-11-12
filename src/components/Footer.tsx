import { profile } from "../data";
import { scrollToId } from "../hooks/useLenis";

export default function Footer() {
  return (
    <footer className="border-t border-white/10 px-4 py-8 sm:px-8">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-3 text-sm text-muted sm:flex-row">
        <span>© {new Date().getFullYear()} {profile.name}</span>
        <span className="hidden md:block">Built with React, Tailwind &amp; Motion</span>
        <a
          href="#top"
          onClick={(e) => {
            e.preventDefault();
            scrollToId("top");
          }}
          className="transition-colors hover:text-cream"
        >
          Back to top ↑
        </a>
      </div>
    </footer>
  );
}
