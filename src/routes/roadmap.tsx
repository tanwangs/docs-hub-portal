import { createFileRoute } from "@tanstack/react-router";
import { PageHeader } from "@/components/PageHeader";
import { Check, Circle, Loader2 } from "lucide-react";

export const Route = createFileRoute("/roadmap")({
  head: () => ({
    meta: [
      { title: "Roadmap — The Tapestry of Monyul" },
      { name: "description", content: "Sprint-by-sprint progress on The Tapestry of Monyul, from architecture to submission." },
      { property: "og:title", content: "Roadmap — The Tapestry of Monyul" },
      { property: "og:description", content: "What is finished, what is in progress and what is still ahead." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: RoadmapPage,
});

type Status = "done" | "active" | "todo";
const milestones: { phase: string; title: string; items: { label: string; status: Status }[] }[] = [
  {
    phase: "Sprint 1",
    title: "Architecture",
    items: [
      { label: "GameState & DialogueManager autoloads", status: "done" },
      { label: "Global spawn persistence & ScreenFade", status: "done" },
      { label: "Player physics and collision", status: "done" },
      { label: "First GDScript test scripts", status: "done" },
    ],
  },
  {
    phase: "Sprint 2",
    title: "World building",
    items: [
      { label: "Three TileMapLayers per map", status: "done" },
      { label: "Y-sort origins and depth fix", status: "done" },
      { label: "Scene exits between realms", status: "done" },
      { label: "Custom Bhutanese props TileSet", status: "done" },
    ],
  },
  {
    phase: "Sprint 3",
    title: "Quests & mechanics",
    items: [
      { label: "Jomolhari pacing-gate ritual", status: "done" },
      { label: "Drakay Pangtsho observation quest", status: "done" },
      { label: "Taktsang story-assembly quest", status: "done" },
      { label: "Six side quests across the realms", status: "done" },
      { label: "Taxi travel system documentation", status: "done" },
    ],
  },
  {
    phase: "Sprint 4",
    title: "Testing & polish",
    items: [
      { label: "Fourteen automated suites — 100% passing", status: "done" },
      { label: "Ending dream & water-bowl arc", status: "done" },
      { label: "Sound-effect layer", status: "active" },
      { label: "User acceptance testing (ages 12–18)", status: "todo" },
    ],
  },
  {
    phase: "Sprint 5",
    title: "Submission",
    items: [
      { label: "Export target chosen (desktop / HTML5)", status: "active" },
      { label: "User manual & screenshots appendix", status: "todo" },
      { label: "Final references and citations", status: "todo" },
      { label: "Submit to TechTrek 2026", status: "todo" },
    ],
  },
  {
    phase: "Beyond",
    title: "Future enhancements",
    items: [
      { label: "Dzongkha localisation", status: "todo" },
      { label: "Classroom discussion guides", status: "todo" },
      { label: "Additional sacred realms", status: "todo" },
      { label: "Accessibility: remappable keys, text speed", status: "todo" },
    ],
  },
];

const styles: Record<Status, { icon: typeof Check; cls: string; label: string }> = {
  done: { icon: Check, cls: "bg-primary text-primary-foreground", label: "Done" },
  active: { icon: Loader2, cls: "border border-primary text-primary", label: "In progress" },
  todo: { icon: Circle, cls: "bg-muted text-muted-foreground", label: "Planned" },
};

function RoadmapPage() {
  const all = milestones.flatMap((m) => m.items);
  const pct = Math.round((all.filter((i) => i.status === "done").length / all.length) * 100);

  return (
    <div className="mx-auto max-w-5xl px-5 py-14 md:px-8">
      <PageHeader
        eyebrow="Progress tracker"
        title="Roadmap"
        description="Where The Tapestry of Monyul stands, sprint by sprint."
      />

      <div className="mt-8 border border-border bg-card p-6">
        <div className="flex items-end justify-between">
          <div>
            <div className="rule-label text-primary">Overall progress</div>
            <div className="display-xl mt-2 text-5xl text-primary">{pct}%</div>
          </div>
          <div className="text-sm text-muted-foreground">
            {all.filter((i) => i.status === "done").length} / {all.length} tasks complete
          </div>
        </div>
        <div className="mt-4 h-2 overflow-hidden bg-muted">
          <div className="h-full bg-primary transition-all" style={{ width: `${pct}%` }} />
        </div>
      </div>

      <div className="mt-10 grid gap-6 md:grid-cols-2">
        {milestones.map((m) => (
          <div key={m.phase} className="border border-border bg-card p-6">
            <div className="rule-label text-primary">{m.phase}</div>
            <h3 className="mt-2 font-display text-xl font-extrabold tracking-tight">{m.title}</h3>
            <ul className="mt-4 space-y-2">
              {m.items.map((it) => {
                const s = styles[it.status];
                const Icon = s.icon;
                return (
                  <li key={it.label} className="flex items-center gap-3 border border-border/60 bg-background p-3">
                    <span className={`flex h-7 w-7 shrink-0 items-center justify-center ${s.cls}`}>
                      <Icon className={`h-3.5 w-3.5 ${it.status === "active" ? "animate-spin" : ""}`} />
                    </span>
                    <span className="flex-1 text-sm">{it.label}</span>
                    <span className="text-[10px] uppercase tracking-widest text-muted-foreground">{s.label}</span>
                  </li>
                );
              })}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}
