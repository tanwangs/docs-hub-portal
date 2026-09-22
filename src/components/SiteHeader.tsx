import { useState } from "react";
import { Link, useRouterState } from "@tanstack/react-router";
import { Menu, X } from "lucide-react";

const items = [
  { title: "The Game", url: "/game" },
  { title: "The Team", url: "/team" },
  { title: "Our Journey", url: "/journey" },
  { title: "Documentation", url: "/documentation" },
  { title: "Roadmap", url: "/roadmap" },
];

export function SiteHeader() {
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  const [open, setOpen] = useState(false);
  const isActive = (path: string) => pathname.startsWith(path);

  return (
    <header className="sticky top-0 z-40 border-b border-border bg-background/95 backdrop-blur">
      <div className="h-1 w-full bg-primary" />
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-5 md:px-8">
        <Link to="/" className="font-display text-lg font-extrabold uppercase tracking-tight">
          Tech<span className="text-primary">Trek</span>
        </Link>

        <nav className="hidden items-center gap-7 lg:flex">
          {items.map((i) => (
            <Link
              key={i.url}
              to={i.url}
              className={`rule-label transition-colors hover:text-primary ${
                isActive(i.url) ? "text-primary" : "text-foreground"
              }`}
            >
              {i.title}
            </Link>
          ))}
          <Link
            to="/contact"
            className="rule-label bg-primary px-5 py-3 text-primary-foreground transition-opacity hover:opacity-90"
          >
            Get in touch
          </Link>
        </nav>

        <button
          type="button"
          aria-label="Toggle menu"
          onClick={() => setOpen((v) => !v)}
          className="lg:hidden"
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {open && (
        <nav className="border-t border-border bg-background px-5 py-4 lg:hidden">
          {[...items, { title: "Get in touch", url: "/contact" }].map((i) => (
            <Link
              key={i.url}
              to={i.url}
              onClick={() => setOpen(false)}
              className="block border-b border-border py-3 font-display text-xl font-extrabold uppercase tracking-tight last:border-0"
            >
              {i.title}
            </Link>
          ))}
        </nav>
      )}
    </header>
  );
}

export function SiteFooter() {
  return (
    <footer className="mt-24 border-t-4 border-primary bg-foreground text-background">
      <div className="mx-auto grid max-w-7xl gap-10 px-5 py-14 md:grid-cols-3 md:px-8">
        <div>
          <div className="font-display text-2xl font-extrabold uppercase">Tech Trek</div>
          <p className="mt-3 max-w-xs text-sm opacity-70">
            The documented build of our competition game — process, people and progress.
          </p>
        </div>
        <div>
          <div className="rule-label opacity-60">Explore</div>
          <div className="mt-4 grid gap-2 text-sm">
            {items.map((i) => (
              <Link key={i.url} to={i.url} className="opacity-80 hover:opacity-100">
                {i.title}
              </Link>
            ))}
          </div>
        </div>
        <div>
          <div className="rule-label opacity-60">Say hello</div>
          <Link
            to="/contact"
            className="mt-4 inline-block rule-label bg-primary px-5 py-3 text-primary-foreground"
          >
            Contact the team
          </Link>
          <div className="mt-6 text-xs opacity-50">© 2026 Tech Trek project</div>
        </div>
      </div>
    </footer>
  );
}
