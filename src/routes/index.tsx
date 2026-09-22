import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import heroArt from "@/assets/game-hero.jpg";
import screenVillage from "@/assets/screen-village.png";
import screenRealm from "@/assets/screen-realm.png";
import charPlayer from "@/assets/char-player.png";
import charAumJomo from "@/assets/char-aumjomo.png";
import charTshomen from "@/assets/char-tshomen.png";
import charMonk from "@/assets/char-taktsangmonk.png";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "The Tapestry of Monyul — TechTrek 2026, Team Samsara" },
      {
        name: "description",
        content:
          "Project documentation for The Tapestry of Monyul, a 2D narrative exploration game about Bhutan's sacred sites, built for TechTrek 2026 by team Samsara.",
      },
      { property: "og:title", content: "The Tapestry of Monyul — TechTrek 2026" },
      {
        property: "og:description",
        content: "A game about paying attention, set across Jomolhari, Drakay Pangtsho and Taktsang.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const stats = [
  { value: "3", label: "sacred realms (nyes)" },
  { value: "9", label: "main & side quests" },
  { value: "14", label: "automated test suites passing" },
];

const sections = [
  { to: "/game", n: "01", title: "The Game", desc: "The story, the three realms, the cast and screenshots from the build." },
  { to: "/team", n: "02", title: "The Team", desc: "Team Samsara — documentation, storyline, sprites and code." },
  { to: "/journey", n: "03", title: "Our Journey", desc: "From the first question to four sprints and a playable loop." },
  { to: "/documentation", n: "04", title: "Documentation", desc: "GNH alignment, requirements, Godot architecture, art pipeline and testing." },
  { to: "/roadmap", n: "05", title: "Roadmap", desc: "What is finished, what is active and what comes before submission." },
];

const realms = [
  { img: charAumJomo, name: "Jhomo Lhari", who: "Aum Jomo", line: "An offering ritual you cannot rush." },
  { img: charTshomen, name: "Drakay Pangtsho", who: "Tshomen", line: "Notice what is wrong with the lake yourself." },
  { img: charMonk, name: "Tak Tsang", who: "The monks", line: "Gather a history, then choose how to retell it." },
];

function Index() {
  return (
    <div>
      {/* Hero */}
      <section className="relative flex min-h-[78vh] items-end overflow-hidden">
        <img
          src={heroArt}
          alt="Key art: a traveller overlooking a Himalayan range"
          width={1600}
          height={900}
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-foreground via-foreground/70 to-foreground/20" />
        <div className="relative mx-auto w-full max-w-7xl px-5 pb-16 pt-28 md:px-8">
          <div className="rule-label text-background/70">TechTrek 2026 · Team Samsara</div>
          <h1 className="display-xl mt-6 max-w-4xl text-5xl text-background sm:text-6xl md:text-8xl">
            The Tapestry of <span className="text-primary">Monyul.</span>
          </h1>
          <p className="mt-7 max-w-xl text-lg text-background/80">
            A 2D narrative exploration game across three sacred sites in Bhutan —
            where the lesson is never just spoken, it is the mechanic. This is
            the full record of how we built it.
          </p>
          <div className="mt-9 flex flex-wrap gap-3">
            <Link
              to="/game"
              className="rule-label inline-flex items-center gap-2 bg-primary px-7 py-4 text-primary-foreground transition-opacity hover:opacity-90"
            >
              See the game <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              to="/documentation"
              className="rule-label inline-flex items-center gap-2 border border-background/50 px-7 py-4 text-background transition-colors hover:bg-background hover:text-foreground"
            >
              Read the docs
            </Link>
          </div>
        </div>
      </section>

      {/* Statement + stats */}
      <section className="border-b border-border">
        <div className="mx-auto grid max-w-7xl gap-12 px-5 py-20 md:grid-cols-[1.5fr_1fr] md:px-8">
                    <div>
            <div className="rule-label text-primary">Welcome</div>
            <h2 className="mt-5 text-3xl leading-tight md:text-4xl">
              Play as Tashi, a young villager who stopped believing the old
              teachings mattered — until a dream sends them to three sacred
              places.
            </h2>
            <div className="mt-6 aspect-video w-full max-w-2xl overflow-hidden border border-border">
              <iframe
                src="https://www.youtube.com/embed/oOnbAjUEKRI"
                title="The Tapestry of Monyul"
                className="h-full w-full"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              />
            </div>
            <p className="mt-6 max-w-2xl text-lg text-muted-foreground">
              Built in Godot 4 for the TechTrek 2026 theme, "Code, Create, and
              Educate." Ley-Ju-Drey — cause and effect — is something the game
              makes you feel: rush a ritual and you begin again. Attention is
              tracked as a stat, and it decides how the story ends.
            </p>
          </div>
          <dl className="grid content-start gap-6">
            {stats.map((s) => (
              <div key={s.label} className="border-t-2 border-foreground pt-4">
                <dt className="display-xl text-5xl text-primary">{s.value}</dt>
                <dd className="rule-label mt-2 text-muted-foreground">{s.label}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      {/* Realms */}
      <section className="border-b border-border">
        <div className="mx-auto max-w-7xl px-5 py-20 md:px-8">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <h2 className="text-3xl md:text-5xl">Three sacred realms</h2>
            <Link to="/game" className="rule-label text-primary hover:underline">
              More about the game →
            </Link>
          </div>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {realms.map((r) => (
              <article key={r.name} className="border border-border bg-card p-6">
                <img
                  src={r.img}
                  alt={r.who}
                  width={192}
                  height={192}
                  loading="lazy"
                  className="h-24 w-24 object-contain [image-rendering:pixelated]"
                />
                <h3 className="mt-3 font-display text-2xl font-extrabold tracking-tight">{r.name}</h3>
                <div className="rule-label mt-2 text-primary">{r.who}</div>
                <p className="mt-3 text-muted-foreground">{r.line}</p>
              </article>
            ))}
          </div>
          <div className="mt-8 grid gap-6 sm:grid-cols-2">
            <img
              src={screenVillage}
              alt="The village map in the current build"
              loading="lazy"
              className="w-full border border-border object-cover [image-rendering:pixelated]"
            />
            <img
              src={screenRealm}
              alt="A sacred realm map in the current build"
              loading="lazy"
              className="w-full border border-border object-cover [image-rendering:pixelated]"
            />
          </div>
        </div>
      </section>

      {/* Index of sections */}
      <section className="mx-auto max-w-7xl px-5 py-20 md:px-8">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <h2 className="text-3xl md:text-5xl">Explore the documentation</h2>
          <img
            src={charPlayer}
            alt="Tashi, the player character"
            width={192}
            height={192}
            loading="lazy"
            className="h-20 w-20 object-contain [image-rendering:pixelated]"
          />
        </div>
        <div className="mt-10 border-t border-border">
          {sections.map((s) => (
            <Link
              key={s.to}
              to={s.to}
              className="group grid gap-2 border-b border-border py-7 transition-colors hover:bg-secondary md:grid-cols-[80px_1fr_auto] md:items-center md:gap-8 md:px-4"
            >
              <span className="rule-label text-primary">{s.n}</span>
              <span>
                <span className="font-display block text-2xl font-extrabold tracking-tight md:text-3xl">
                  {s.title}
                </span>
                <span className="mt-1 block text-muted-foreground">{s.desc}</span>
              </span>
              <ArrowRight className="h-6 w-6 text-primary transition-transform group-hover:translate-x-1" />
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}
