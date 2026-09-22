import { createFileRoute } from "@tanstack/react-router";
import { PageHeader } from "@/components/PageHeader";
import heroArt from "@/assets/game-hero.jpg";
import shotShrine from "@/assets/shot-shrine.png";
import shotLake from "@/assets/shot-lake.png";
import shotBridge from "@/assets/shot-bridge.png";
import shotGameplay from "@/assets/shot-gameplay.png";
import charPlayer from "@/assets/char-player.png";
import charGuide from "@/assets/char-guide.png";
import charAumJomo from "@/assets/char-aumjomo.png";
import charTshomen from "@/assets/char-tshomen.png";
import charMonk from "@/assets/char-taktsangmonk.png";
import charHerder from "@/assets/char-yak-herder.png";

export const Route = createFileRoute("/game")({
  head: () => ({
    meta: [
      { title: "The Tapestry of Monyul — The Game" },
      {
        name: "description",
        content:
          "A 2D top-down narrative exploration game set across three sacred sites in Bhutan — Jomolhari, Drakay Pangtsho and Taktsang.",
      },
      { property: "og:title", content: "The Tapestry of Monyul — The Game" },
      {
        property: "og:description",
        content:
          "Play as Tashi on a nature retreat across Bhutan's sacred landscapes, where attention itself is the mechanic.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: GamePage,
});

const facts = [
  { label: "Genre", value: "2D top-down narrative RPG" },
  { label: "Session length", value: "30–45 minutes" },
  { label: "Engine", value: "Godot 4 (GDScript)" },
  { label: "Controls", value: "WASD / arrows, E to interact, T for taxi" },
  { label: "Audience", value: "Ages 12–18+, classroom friendly" },
];

const realms = [
  {
    name: "Jomolhari (Jhomo Lhari)",
    character: "Aum Jomo",
    lesson: "High-altitude ecology, sacred offerings and spiritual respect",
    mechanic:
      "An offering ritual gated by a pacing mechanic — rush it and the guardian makes you slow down and begin again, so 'intention matters more than action' is enforced, not just spoken.",
    side: "The Herder's Path — read four trail clues in order to find a lost yak.",
    image: charAumJomo,
  },
  {
    name: "Drakay Pangtsho",
    character: "Tshomen, the lake deity",
    lesson: "Environmental stewardship of sacred water sources",
    mechanic:
      "An observation quest: the player must notice what is wrong with the lake themselves — litter, disturbed offering stones — before anyone explains it to them.",
    side: "Mending What's Shared — gather reeds and patiently knot cord to repair a shared fishing platform.",
    image: charTshomen,
  },
  {
    name: "Taktsang (Tiger's Nest)",
    character: "The monks",
    lesson: "Oral history and how a story is carried forward",
    mechanic:
      "A story-assembly quest: gather fragments of the monastery's history from three monks, then choose how to retell it.",
    side: "The Pilgrim's Climb — escort Dolma up the trail at her pace, not yours.",
    image: charMonk,
  },
];

const cast = [
  { image: charPlayer, name: "Tashi", role: "The player — a young villager on a nature retreat" },
  { image: charGuide, name: "Kinley", role: "The guide who points the way between realms" },
  { image: charAumJomo, name: "Aum Jomo", role: "Guardian deity of Jomolhari" },
  { image: charTshomen, name: "Tshomen", role: "Lake deity of Drakay Pangtsho" },
  { image: charMonk, name: "Taktsang monk", role: "Keeper of the monastery's oral history" },
  { image: charHerder, name: "Dema", role: "Yak herder on the Jomolhari trail" },
];

const buildScreenshots = [
  {
    src: shotShrine,
    alt: "Tashi kneeling before a Bhutanese chorten to make an offering",
    title: "The offering at the chorten",
    caption: "The ritual that cannot be rushed — approach, kneel, and give it the time it asks for.",
  },
  {
    src: shotLake,
    alt: "Tashi standing beside Tshomen at the edge of the sacred lake",
    title: "Drakay Pangtsho",
    caption: "Tshomen surfaces only once the player has noticed what is wrong with the water for themselves.",
  },
  {
    src: shotBridge,
    alt: "Tashi crossing a wooden bridge over a river below a waterfall",
    title: "On the trail",
    caption: "Paths, rivers and a villager along the way — the world Tashi walks between the sacred sites.",
  },
  {
    src: shotGameplay,
    alt: "Tashi walking a village path in the current Godot build",
    title: "In the build",
    caption: "A live capture from the Godot project, exactly as the game renders in play.",
  },
];

function GamePage() {
  return (
    <div className="mx-auto max-w-6xl space-y-16 px-5 py-14 md:px-8">
      <PageHeader
        eyebrow="The Game"
        title="The Tapestry of Monyul"
        description="A 2D top-down narrative exploration game built for TechTrek 2026 by team Samsara. Working title in the development docs: The Forgotten Thread."
      />

      <section className="overflow-hidden border border-border">
        <img
          src={heroArt}
          alt="Key art: a traveller overlooking a calm Himalayan range"
          width={1600}
          height={900}
          className="w-full object-cover"
        />
      </section>

      <section className="grid gap-10 lg:grid-cols-[1.5fr_1fr]">
        <div className="space-y-4">
          <h2 className="text-3xl">Preface</h2>
          <p className="text-lg text-muted-foreground">
            Step into the boots of Tashi, a young villager who has quietly
            stopped believing that the old teachings about balance and sacred
            places matter. A gentle telling-off from the Village Elder for
            rushing past a household shrine — and a strange dream about a
            fading, glowing tree — set them walking towards three sacred sites
            across Bhutan.
          </p>
          <p className="text-muted-foreground">
            Rather than teaching through dialogue and exposition alone, the game
            embeds its lessons directly in the mechanics. Ley-Ju-Drey — cause
            and effect — is something you do, not something you are told. Every
            realm also carries a functional <strong>Awareness</strong> stat,
            earned through attentive play, which shapes the tone of the ending.
          </p>
          <h3 className="pt-2 text-xl">How it plays</h3>
          <ul className="list-disc space-y-1 pl-5 text-muted-foreground">
            <li>Walk with WASD or the arrow keys; press E to talk, gather and enter the taxi.</li>
            <li>Start in the village, complete the tutorial, then follow the dream to the crossroads shrine.</li>
            <li>Choose any of the three sacred realms first — each has a main quest and two side quests.</li>
            <li>Earn Awareness by noticing things, not by rushing; it decides how the story closes.</li>
          </ul>
        </div>
        <aside className="h-fit border border-border bg-card p-6">
          <div className="rule-label text-primary">At a glance</div>
          <dl className="mt-5 space-y-3">
            {facts.map((f) => (
              <div key={f.label} className="flex justify-between gap-4 border-b border-border/60 pb-2 text-sm">
                <dt className="text-muted-foreground">{f.label}</dt>
                <dd className="text-right font-medium">{f.value}</dd>
              </div>
            ))}
          </dl>
        </aside>
      </section>

      <section className="space-y-6">
        <div>
          <h2 className="text-3xl md:text-4xl">The three sacred realms (nyes)</h2>
          <p className="mt-2 max-w-3xl text-muted-foreground">
            Each realm pairs a guardian, a lesson and a mechanically distinct
            main quest, plus two side quests about a different form of paying
            attention.
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {realms.map((r) => (
            <article key={r.name} className="flex flex-col border border-border bg-card p-6">
              <img
                src={r.image}
                alt={r.character}
                width={192}
                height={192}
                loading="lazy"
                className="h-24 w-24 self-start object-contain [image-rendering:pixelated]"
              />
              <h3 className="mt-3 font-display text-2xl font-extrabold tracking-tight">{r.name}</h3>
              <div className="rule-label mt-2 text-primary">{r.character}</div>
              <p className="mt-4 text-sm text-muted-foreground">{r.lesson}</p>
              <p className="mt-3 text-sm">{r.mechanic}</p>
              <p className="mt-4 border-t border-border pt-3 text-sm text-muted-foreground">
                <span className="rule-label text-foreground">Side quest</span>
                <br />
                {r.side}
              </p>
            </article>
          ))}
        </div>
      </section>

      <section className="space-y-6">
        <h2 className="text-3xl md:text-4xl">Cast</h2>
        <p className="max-w-3xl text-muted-foreground">
          Custom pixel art at 48×48 per frame, drawn over a shared base so every
          character keeps the same stance, scale and grounding point. Bhutanese
          dress — the gho, the kira, the folded white cuffs — was drawn in
          frame by frame.
        </p>
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">
          {cast.map((c) => (
            <figure key={c.name} className="border border-border bg-card p-4 text-center">
              <img
                src={c.image}
                alt={c.name}
                width={192}
                height={192}
                loading="lazy"
                className="mx-auto h-20 w-20 object-contain [image-rendering:pixelated]"
              />
              <figcaption className="mt-3">
                <span className="font-display block text-sm font-extrabold">{c.name}</span>
                <span className="mt-1 block text-xs text-muted-foreground">{c.role}</span>
              </figcaption>
            </figure>
          ))}
        </div>
      </section>

      <section className="space-y-5">
        <h2 className="text-3xl md:text-4xl">Screenshots from the build</h2>
        <div className="grid gap-5 md:grid-cols-2">
          {buildScreenshots.map((s, index) => (
            <figure
              key={s.title}
              className={`border border-border bg-card ${index === 0 ? "md:col-span-2" : ""}`}
            >
              <div className={`overflow-hidden bg-secondary ${index === 0 ? "aspect-[3/2] md:aspect-[16/7]" : "aspect-[16/10]"}`}>
                <img
                  src={s.src}
                  alt={s.alt}
                  loading="lazy"
                  className="h-full w-full object-cover [image-rendering:pixelated]"
                />
              </div>
              <figcaption className="border-t border-border p-4">
                <span className="font-display text-lg font-extrabold">{s.title}</span>
                <span className="mt-1 block text-sm text-muted-foreground">{s.caption}</span>
              </figcaption>
            </figure>
          ))}
        </div>
      </section>

      <section className="border border-border bg-secondary p-8">
        <div className="rule-label text-primary">Play it yourself</div>
        <h2 className="mt-3 text-2xl md:text-3xl">Install &amp; run</h2>
        <ol className="mt-4 list-decimal space-y-2 pl-5 text-muted-foreground">
          <li>Install Godot Engine 4.7.2 or later (standard build).</li>
          <li>
            Clone the repository:{" "}
            <code className="bg-card px-1.5 py-0.5 text-xs">
              git clone https://github.com/tanwangs/TechTrek-2026-Samsara.git
            </code>
          </li>
          <li>In Godot choose <strong>Import</strong> and select the folder containing <code className="text-xs">project.godot</code>.</li>
          <li>Press <strong>Play</strong> to run, or <strong>Edit</strong> to open the project.</li>
        </ol>
      </section>
    </div>
  );
}
