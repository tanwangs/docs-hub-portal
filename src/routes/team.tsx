import { createFileRoute } from "@tanstack/react-router";
import { PageHeader } from "@/components/PageHeader";

export const Route = createFileRoute("/team")({
  head: () => ({
    meta: [
      { title: "Team Samsara — The Tapestry of Monyul" },
      { name: "description", content: "Meet team Samsara, the three people building The Tapestry of Monyul for TechTrek 2026." },
      { property: "og:title", content: "Team Samsara — The Tapestry of Monyul" },
      { property: "og:description", content: "Documentation, storyline, sprites and code — the three people behind the project." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: TeamPage,
});

const members = [
  {
    name: "Tandin Wangyel",
    role: "Lead Developer",
    bio: "Builds the game in Godot — player physics, autoloads, quest scripts and the automated GDScript test suite.",
    initial: "TW",
  },
  {
    name: "Jigme Tshering",
    role: "Documentation and Website",
    bio: "Shapes the storyline and writes the project documentation, and owns this site and the public-facing material.",
    initial: "JT",
  },
  {
    name: "Sangay Tharchen",
    role: "Design",
    bio: "Draws the pixel art — Tashi's gho, the monks, the deities and the Bhutanese architecture props.",
    initial: "ST",
  },
];

function TeamPage() {
  return (
    <div className="mx-auto max-w-5xl px-5 py-14 md:px-8">
      <PageHeader
        eyebrow="Team Samsara"
        title="The team"
        description="Three of us, building a game about paying attention for TechTrek 2026."
      />
      <div className="mt-12 grid gap-6 sm:grid-cols-2">
        {members.map((m) => (
          <div key={m.name} className="border border-border bg-card p-6">
            <div className="flex items-center gap-4">
              <div className="font-display flex h-14 w-14 items-center justify-center bg-primary text-xl font-extrabold text-primary-foreground">
                {m.initial}
              </div>
              <div>
                <div className="font-display text-xl font-extrabold tracking-tight">{m.name}</div>
                <div className="rule-label mt-1 text-primary">{m.role}</div>
              </div>
            </div>
            <p className="mt-4 text-sm text-muted-foreground">{m.bio}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
