import { createFileRoute } from "@tanstack/react-router";
import { PageHeader } from "@/components/PageHeader";

export const Route = createFileRoute("/journey")({
  head: () => ({
    meta: [
      { title: "Our Journey — The Tapestry of Monyul" },
      {
        name: "description",
        content: "How team Samsara went from a question about lost traditions to a playable game across three sacred sites in Bhutan.",
      },
      { property: "og:title", content: "Our Journey — The Tapestry of Monyul" },
      { property: "og:description", content: "Four sprints, three realms and a lot of redrawn pixels." },
      { property: "og:type", content: "article" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: JourneyPage,
});

const beats = [
  {
    title: "The spark",
    body: "We kept noticing the same thing: the sacred places and stories we grew up around feel abstract to people our age, while a phone screen never does. TechTrek 2026 asked us to code, create and educate — so we asked whether a game could carry oral tradition better than a textbook chapter can.",
  },
  {
    title: "Choosing the shape",
    body: "A 2D top-down narrative RPG in Godot 4, set across three real nyes — Jomolhari, Drakay Pangtsho and Taktsang. The rule we set ourselves: no lesson may be delivered by dialogue alone. If the game teaches patience, the player must be made to be patient.",
  },
  {
    title: "Sprint 1 — architecture",
    body: "Singletons first. GameState for the awareness stat and completion flags, DialogueManager for branching conversations, Global for spawn positions, ScreenFade for transitions — plus the first test scripts, before there was much game to test.",
  },
  {
    title: "Sprint 2 — building the world",
    body: "Three TileMapLayers per map: ground, props and water. This is where the depth-sorting bug bit us, and where AI-generated decoration had to be converted from loose sprites into proper tile cells.",
  },
  {
    title: "Sprint 3 — quests and mechanics",
    body: "The pacing gate at Jomolhari, the observation quest at the lake, the story-assembly quest at Taktsang — plus the roadside taxi system connecting the lobby and realms, and six side quests about different kinds of attention.",
  },
  {
    title: "Sprint 4 — testing and polish",
    body: "Fourteen automated GDScript suites across dialogue, quests, audio, taxi transitions and the ending sequence, all passing, plus the closing dream and water-bowl arc that pays off the opening scene.",
  },
  {
    title: "Where we are now",
    body: "The full loop is playable end to end, and the taxi system is now documented. Still ahead: the sound-effect layer, fuller coverage of later side quests, and user testing with players aged 12–18.",
  },
];

function JourneyPage() {
  return (
    <div className="mx-auto max-w-4xl px-5 py-14 md:px-8">
      <PageHeader
        eyebrow="The story so far"
        title="Our journey"
        description="From a question about lost traditions to a game you can finish in one class period."
      />
      <div className="mt-12 border-t border-border">
        {beats.map((b, i) => (
          <div key={b.title} className="grid gap-3 border-b border-border py-8 md:grid-cols-[90px_1fr] md:gap-8">
            <div className="rule-label text-primary">{String(i + 1).padStart(2, "0")}</div>
            <div>
              <h3 className="font-display text-2xl font-extrabold tracking-tight">{b.title}</h3>
              <p className="mt-3 leading-relaxed text-muted-foreground">{b.body}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
