import { createFileRoute } from "@tanstack/react-router";
import { PageHeader } from "@/components/PageHeader";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import tilesetSetupAsset from "@/assets/godot-tileset-setup.png.asset.json";
import shotAutoloads from "@/assets/shot-autoloads.png";
import shotTilemapLayers from "@/assets/shot-tilemap-layers.png";
import shotSceneTree from "@/assets/shot-scene-tree.png";
import shotTaxiRank from "@/assets/shot-taxi-rank.png";
import shotYsortFix from "@/assets/shot-ysort-fix.png";

export const Route = createFileRoute("/documentation")({
  head: () => ({
    meta: [
      { title: "Documentation — The Tapestry of Monyul" },
      {
        name: "description",
        content:
          "Full documentation for The Tapestry of Monyul: game overview, GNH alignment, requirements, Godot architecture, art pipeline, testing and challenges.",
      },
      { property: "og:title", content: "Documentation — The Tapestry of Monyul" },
      {
        property: "og:description",
        content: "Design, engineering, art and testing notes for team Samsara's TechTrek 2026 project.",
      },
      { property: "og:type", content: "article" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: DocsPage,
});

type Block =
  | { kind: "p"; text: string }
  | { kind: "h"; text: string }
  | { kind: "list"; items: string[] }
  | { kind: "table"; head: string[]; rows: string[][] }
  | { kind: "code"; text: string };

type EditorImage = {
  src: string;
  alt: string;
  title: string;
  caption: string;
  compact?: boolean;
};

const sections: { value: string; label: string; title: string; blocks: Block[] }[] = [
  {
    value: "overview",
    label: "Overview",
    title: "Game overview",
    blocks: [
      {
        kind: "p",
        text: "The Tapestry of Monyul is a 2D top-down narrative RPG. You play Tashi, a young student on a 'nature retreat' across Bhutan's sacred landscapes (nyes), where interactions with local guardians, historical figures and lake deities unlock ancient wisdom, environmental mindfulness and Gross National Happiness values.",
      },
      { kind: "h", text: "The problem" },
      {
        kind: "p",
        text: "As globalised lifestyles, technology and screen time dominate modern youth culture, young generations are becoming disconnected from Bhutan's sacred oral traditions, spiritual roots and ecological wisdom. Textbook education often feels abstract, risking the gradual loss of intangible cultural heritage.",
      },
      { kind: "h", text: "Our answer" },
      {
        kind: "p",
        text: "The game turns cultural preservation into play. By embedding educational values into top-down RPG mechanics, narrative choices and environmental puzzles, it turns passive observers into active participants — in a medium digital natives already speak.",
      },
      { kind: "h", text: "Sacred realms at a glance" },
      {
        kind: "table",
        head: ["Realm / nye", "Guardian", "Core concept"],
        rows: [
          ["Jhomo Lhari", "Aum Jomo", "High-altitude ecology, sacred offerings, spiritual respect"],
          ["Drakay Pangtsho", "Tshomen", "Water stewardship and non-interference"],
          ["Tak Tsang", "The monks", "Monastic history carried through oral tradition"],
        ],
      },
      { kind: "h", text: "Scope" },
      {
        kind: "list",
        items: [
          "Full playable loop: village → dream sequence → crossroads hub → three realm quests → return sequence",
          "Three main quests, each with a mechanically distinct lesson, plus two side quests per realm",
          "A functional Awareness stat that shapes the ending",
          "No combat; a narrative-first, low-difficulty experience for a single class period",
        ],
      },
    ],
  },
  {
    value: "education",
    label: "Education & GNH",
    title: "Educational purpose & GNH alignment",
    blocks: [
      {
        kind: "p",
        text: "The project is built for the TechTrek 2026 theme: 'Code, Create, and Educate — Cross-Pollination Through Games.' Its educational goals map onto the pillars of Gross National Happiness.",
      },
      {
        kind: "list",
        items: [
          "Cultural preservation & promotion — direct engagement with Bhutanese folklore, monastic history, local deities (Tshomen, Aum Jomo) and the ancient names of the land (Monyul / Lhomon)",
          "Environmental conservation — interacting with fragile ecosystems to teach non-interference, high-altitude respect and lake preservation",
          "Ley-Ju-Drey (cause and effect) — every action yields a direct environmental or spiritual reaction; disturbing sacred waters triggers the deity's response",
          "Art, architecture and visual humanities — pixel-art representation of gho and kira, dzongs, chortens, stupas and traditional iconography",
        ],
      },
      { kind: "h", text: "Classroom integration" },
      {
        kind: "p",
        text: "Sessions are structured for 30–45 minute class periods matching standard secondary-school slots.",
      },
      {
        kind: "table",
        head: ["Subject", "Application"],
        rows: [
          ["Value Education / GNH", "Discussion on Ley-Ju-Drey and personal responsibility after the Drakay Pangtsho lake quest"],
          ["History & Social Studies", "Examining oral tradition at Tak Tsang through dialogue with the generation keepers"],
          ["Environmental Studies", "High-altitude alpine ecology and conservation themes at Jhomo Lhari"],
        ],
      },
      { kind: "h", text: "Audience" },
      {
        kind: "list",
        items: [
          "Primary: students and youth aged 12–18+ studying digital humanities, environmental studies, value education and Bhutanese history",
          "Secondary: indie RPG players and international audiences interested in Himalayan culture and eco-centric narrative games",
        ],
      },
    ],
  },
  {
    value: "requirements",
    label: "Requirements",
    title: "Requirements & research",
    blocks: [
      { kind: "h", text: "Functional requirements" },
      {
        kind: "list",
        items: [
          "Tashi moves by keyboard with physics-based collision against terrain and props (CharacterBody2D + CollisionShape2D)",
          "NPC dialogue triggers by proximity (Area2D) and an interact key (E / Space)",
          "DialogueManager blocks movement input while a sequence is active and emits line-change signals",
          "NPC._pick_sequence() branches between first-visit and repeat dialogue via GameState.has_seen(lore_key)",
          "Completing a realm calls GameState.mark_realm_complete('realm_name')",
          "Spawn position persists across scenes via Global.set_arrival_pos() / take_arrival_pos()",
          "Scene transitions use ScreenFade's black/white overlay system",
        ],
      },
      { kind: "h", text: "Non-functional requirements" },
      {
        kind: "list",
        items: [
          "Stable frame rate on standard consumer hardware; no specialised GPU required",
          "Responsive dialogue advancement and interaction detection with no noticeable input lag",
          "Consistent 16×16 grid pixel art (48×48 per animation frame), RGBA8 with transparent backgrounds",
        ],
      },
      { kind: "h", text: "Constraints & assumptions" },
      {
        kind: "list",
        items: [
          "Built in Godot Engine 4 / GDScript",
          "Prop and character depth depends on correctly configured 16×16 Y-sort origins on the props TileMapLayer",
          "Assumes familiarity with standard top-down WASD movement conventions",
        ],
      },
      { kind: "h", text: "Research directions" },
      {
        kind: "list",
        items: [
          "Comparable cultural-education games such as Never Alone, which embeds Indigenous Alaskan storytelling into mechanics rather than cutscenes",
          "Experiential vs. didactic learning in educational game design — the basis for our mechanics-first approach",
          "Background research on Ley-Ju-Drey and the GNH pillars as taught in Bhutanese education",
          "Prototyping terrain uses the open-source PixelArt Forest Asset Pack by zedpxl",
        ],
      },
    ],
  },
  {
    value: "architecture",
    label: "Architecture",
    title: "Godot architecture & development",
    blocks: [
      {
        kind: "p",
        text: "The game is built in Godot Engine 4 with GDScript, leaning on modular nodes, scenes and autoload singletons.",
      },
      {
        kind: "table",
        head: ["Node type", "Purpose"],
        rows: [
          ["CharacterBody2D", "Player movement and environmental collision"],
          ["AnimatedSprite2D", "Frame-by-frame walking and idle animation"],
          ["CollisionShape2D", "Hitboxes for terrain, obstacles and detection areas"],
          ["Camera2D", "Child of the player, tracking movement across maps"],
          ["Area2D", "NPC talk triggers, scene exits and viewpoint hitboxes"],
          ["TileMapLayer", "Ground, props and water terrain layers"],
        ],
      },
      { kind: "h", text: "Layering & depth" },
      {
        kind: "list",
        items: [
          "ground — grass, plains and paths; Y-sorting disabled",
          "props/yset — buildings, trees and rocks; Y-sorting enabled so characters render correctly in front of or behind objects",
          "cliff — raised cliff terrain; Y-sorting enabled",
        ],
      },
      { kind: "h", text: "Core autoloads" },
      {
        kind: "list",
        items: [
          "GameState — tracks the awareness stat, the seen_lore dictionary and per-realm completion flags",
          "DialogueManager — runs conversation sequences, blocks movement while active and emits line-change signals",
          "Global — retains player spawn coordinates across scene transitions",
          "ScreenFade — controls black and white screen transition overlays",
        ],
      },
      { kind: "h", text: "Dialogue & quest flow" },
      {
        kind: "list",
        items: [
          "Proximity trigger — the player enters an NPC's Area2D and the interaction prompt highlights",
          "Input intercept — pressing E calls NPC.interact(), which starts a DialogueManager sequence",
          "Branching — _pick_sequence() plays first-visit narrative or repeat dialogue based on GameState",
          "Resolution — cleaning waste, placing altar items or listening to all three monks marks the realm complete",
        ],
      },
      { kind: "h", text: "Roadside taxi travel" },
      {
        kind: "p",
        text: "Travel between maps uses a shared, data-driven taxi rank built from scenes/taxi_rank.tscn and scripts/travel/taxi_rank.gd. TravelDestination resources hold each destination scene and arrival position.",
      },
      {
        kind: "list",
        items: [
          "Outbound — interacting with the lobby chorten dispatches a taxi from off-screen; boarding with E locks controls before the taxi drives away and changes the scene",
          "Return — at a realm taxi post, T calls the taxi; the player boards with E and returns to LobbyTaxiStop",
          "Arrival — the taxi drives in with Tashi hidden inside, pauses for 1.4 seconds, drops Tashi at the rank plus its lane offset, then leaves",
          "Configuration — destinations are TravelDestination resources, lane_offset positions the parked taxi, and allow_manual_call enables T-key calling in realms",
        ],
      },
      { kind: "h", text: "SDLC: four Agile sprints" },
      {
        kind: "list",
        items: [
          "Sprint 1 — architecture: singletons, player physics and test scripts",
          "Sprint 2 — world building: TileMap mapping, Y-sorting configuration and scene exits",
          "Sprint 3 — quests and mechanics: the three realm quest scripts",
          "Sprint 4 — testing and polish: automated suites, bug fixing and the ending dream sequence",
        ],
      },
    ],
  },
  {
    value: "art",
    label: "Art & assets",
    title: "Making the sprites",
    blocks: [
      {
        kind: "p",
        text: "All characters use a 48×48 pixel frame bounding box; world tilemaps sit on a 16×16 grid. Sheets are sliced uniformly and animated at 12–16 FPS. Every entity shares a bottom-centre grounding pivot, a 16-bit palette and consistent outline density, exported as RGBA8 with transparent backgrounds. The Mystic Woods hero sprite anchors the shared proportions and movement style.",
      },
      {
        kind: "code",
        text: "[ AI reference gen ] -> [ Colour extraction ] -> [ Canvas base editing ] -> [ Motion / polish ]\n (Gemini / Ludo.ai)      (ImageColorPicker)      (Piskel 48x48 base)       (Engine integration)",
      },
      { kind: "h", text: "Characters" },
      {
        kind: "list",
        items: [
          "Tashi — the Mystic Woods hero base redrawn frame by frame to wear a gho: wrapped robe, wide white lagay cuffs, hoisted kera belt and the pouch above the waist",
          "The monk — Gemini references for robes and posture, palette extracted with ImageColorPicker, drawn over the 48×48 base; strictly idle, so the work went into robe drape and shading",
          "Choden the Villager — concept art from Ludo.ai's sprite generator, then direct canvas editing to match height, stance and grounding point",
          "Kinley the Guide — Gemini design prompts, custom palette, and clothing detail tuned for seamless integration",
          "The Pilgrim — reference-led design refined on the same 48×48 base for consistent scale and grounding",
          "Tshomen the mermaid — Gemini references for the upper body and tail, tail-swish motion generated in SpriteFlow.io, reassembled and cleaned in Piskel",
        ],
      },
      { kind: "h", text: "Environment & props" },
      {
        kind: "list",
        items: [
          "Prototyping terrain from the open-source PixelArt Forest Asset Pack by zedpxl",
          "Custom Bhutanese props — bhutan_house, dzong, stupa, prayer_flags and water_bowl — packed into TileSet_props",
        ],
      },
    ],
  },
  {
    value: "testing",
    label: "Testing",
    title: "Testing & validation",
    blocks: [
      {
        kind: "p",
        text: "The codebase is covered by 14 GDScript test suites across the full system — dialogue, quests, taxi transitions, audio, spatial rendering and game state — with every suite passing.",
      },
      {
        kind: "code",
        text: `AUTOMATED GDSCRIPT TESTING
14 suites passing
100% pass rate

Coverage: singletons, dialogue, audio crossfading,
taxi journeys, quest states and spatial rendering`,
      },
      { kind: "h", text: "What the suites check" },
      {
        kind: "list",
        items: [
          "Y-sorting and collision alignment — tile sort origins match art height, Y-sorted layers stay at z_index 0, multi-cell collisions cover at least 70% of tile height",
          "Dialogue — unique sequence IDs, non-empty authored text, signal order, early termination, and choice lines that pause until an option is picked",
          "Music — crossfading, same-track guards, interruption handling, per-scene track mapping and loop-point bounds",
          "Taxi travel — returning from a realm queues one return beat, locks input and waits for LobbyTaxiStop's arrival_completed signal before clearing",
          "Jomolhari pacing gate — mashing triggers Aum Jomo's 'Again. Slower.' and grants zero awareness; deliberate spacing completes the ritual",
          "Drakay Pangtsho — Tshomen re-asks until the water cues are noticed; three waste items update the altar sequence",
          "The Pilgrim's Climb — Dolma follows at a fixed speed, calls out when the player rushes ahead, and settles at the viewpoint",
          "The Herder's Path — four trail clues must be read in order before the lost yak becomes interactive",
          "Mending What's Shared — hurried knots slip; deliberate pauses of 900ms or more complete the repair, and partial progress survives a scene reload",
          "Ending sequence — stays inactive until all three realms are finished, then plays the dream and the water-bowl arc",
        ],
      },
      { kind: "h", text: "Manual verification" },
      {
        kind: "list",
        items: [
          "The Jomolhari pacing mechanic gates completion — rushed attempts trigger a retry",
          "Drakay Pangtsho's environmental cues appear before the guide explains them",
          "Prop depth ordering renders correctly after the frame_progress fix",
          "User acceptance testing with players aged 12–18 is still to be completed",
        ],
      },
    ],
  },
  {
    value: "challenges",
    label: "Challenges",
    title: "Challenges & solutions",
    blocks: [
      { kind: "h", text: "Characters rendered at the wrong depth" },
      {
        kind: "p",
        text: "Pre-baked frame_progress attributes on AnimatedSprite2D nodes interfered with engine-driven Y-sorting, so characters appeared in front of or behind props incorrectly. Stripping those attributes restored pure engine sorting, now guarded by test_prop_sorting.gd.",
      },
      { kind: "h", text: "AI-generated decoration bypassed the terrain system" },
      {
        kind: "p",
        text: "Early AI-agent output placed trees, rocks and flags as standalone Sprite2D nodes instead of props TileMapLayer cells, complicating collision and interaction. We converted the sprites into TileMapLayer cells by mapping each to its TileSet source and atlas coordinates, and rewrote future prompts to specify cells explicitly.",
      },
      { kind: "h", text: "Story revisions rippling through built systems" },
      {
        kind: "p",
        text: "Each storyline revision had to be sequenced carefully — map layout before NPC positioning before dialogue. We adopted staged, ordered prompting with an integration-audit pass after every major change to catch camera handoffs, orphaned node references and transition ordering.",
      },
      { kind: "h", text: "Matching AI model to task" },
      {
        kind: "p",
        text: "Spatial map layouts matching real-world geography defeated smaller, faster models. We matched task complexity to model tier: small models for contained edits, larger reasoning models for multi-system or spatially complex work.",
      },
      { kind: "h", text: "Future enhancements" },
      {
        kind: "list",
        items: [
          "Expanded dedicated test coverage for the taxi travel mechanism and all realm side quests",
          "A dedicated sound-effect layer, including real-time pacing cues at Jomolhari",
          "Dzongkha localisation for terms and place names",
          "Expanded classroom materials, such as discussion guides per subject",
          "Additional sacred realms following the established pattern",
          "Accessibility: colourblind-friendly UI, remappable controls, adjustable text speed",
        ],
      },
    ],
  },
  {
    value: "conclusion",
    label: "Conclusion",
    title: "Conclusion & references",
    blocks: [
      {
        kind: "p",
        text: "The Tapestry of Monyul shows how Gross National Happiness values and Bhutanese cultural heritage can be embedded directly into game mechanics rather than delivered as passive, textbook-style content. The Agile, sprint-based process — validated by a fully passing automated test suite — reflects professional software engineering practice applied to a culturally grounded educational game.",
      },
      { kind: "h", text: "Deployment" },
      {
        kind: "p",
        text: "Godot exports to Windows, macOS, Linux and HTML5 from a single project. The final export target and hosted build link will be confirmed before submission.",
      },
      { kind: "h", text: "AI tool usage" },
      {
        kind: "list",
        items: [
          "Claude (Anthropic) — design discussion, storyline drafting and revision, documentation, and structured implementation prompts",
          "Ziva — in-editor AI development agent for Godot, used for scenes, scripts and asset placement from those prompts",
          "Gemini and Ludo.ai — character reference generation; ImageColorPicker for palettes; Piskel and SpriteFlow.io for the pixel art itself",
        ],
      },
      { kind: "h", text: "Audio & music credits" },
      {
        kind: "p",
        text: "All background music and ambience is sourced from third-party creators on itch.io and freesound.org rather than composed in-house. Every creator is credited below, and each pack's licence terms are being confirmed before final submission.",
      },
      {
        kind: "table",
        head: ["Track / use", "Creator", "Pack"],
        rows: [
          ["Main lobby (peaceful town theme)", "angel-cintado-soundtrack.itch.io", "Fantasy Town Music"],
          ["Jomolhari (snow town)", "angel-cintado-soundtrack.itch.io", "Fantasy Town Music"],
          ["Drakay Pangtsho (underwater town)", "angel-cintado-soundtrack.itch.io", "Fantasy Town Music"],
          ["Taktsang", "juanjosound.itch.io", "The Shimmering Expanse RPG Music Pack — 'Our Home'"],
          ["Dream sequence", "mandelbo.itch.io", "Mandelbo's GDC Relief Music Pack — 'Distant Life'"],
          ["Tutorial / village", "theoallen.itch.io", "Theo's BGM Collection — 'Forest — Under The Great Tree'"],
        ],
      },
      {
        kind: "list",
        items: [
          "Still to resolve: the 'Chime' sound's exact usage needs labelling — dialogue advance, interaction prompt, quest completion or the prayer bell at Taktsang",
          "Still to resolve: state each pack's specific licence terms beside its entry rather than only the source link",
        ],
      },
      { kind: "h", text: "This documentation site" },
      {
        kind: "p",
        text: "Per the TechTrek 2026 guidelines, the written documentation lives as Markdown in the repository's /docs folder and is published from the public GitHub repository, with this site presenting the same material in a readable form.",
      },
      { kind: "h", text: "Appendices to attach" },
      {
        kind: "list",
        items: [
          "User manual",
          "Screenshot appendix",
          "Additional supporting materials",
        ],
      },
      { kind: "h", text: "References" },
      {
        kind: "list",
        items: [
          "PixelArt Forest Asset Pack by zedpxl — zedpxl.itch.io/pixelart-forest-asset-pack",
          "Mystic Woods by Game Endeavor — game-endeavor.itch.io/mystic-woods (sprite style anchor)",
          "Godot Engine 4.7.2 — godotengine.org",
          "Source repository — github.com/tanwangs/TechTrek-2026-Samsara",
        ],
      },
    ],
  },
];

const editorImages: Record<string, EditorImage[]> = {
  architecture: [
    {
      src: shotAutoloads,
      alt: "Godot project settings listing the Global, GameState, DialogueManager and ScreenFade autoloads",
      title: "The four autoload singletons",
      caption: "Global, GameState, DialogueManager and ScreenFade are registered as autoloads and drive state, dialogue and transitions everywhere.",
    },
    {
      src: shotTilemapLayers,
      alt: "Godot scene dock showing the ground, props and cliff TileMapLayer nodes",
      title: "Three TileMapLayer nodes per map",
      caption: "ground carries terrain, props/yset is Y-sorted for buildings and trees, and cliff handles raised terrain.",
    },
    {
      src: shotSceneTree,
      alt: "Godot scene tree for a realm map with player, NPCs and trigger areas",
      title: "A realm scene tree",
      caption: "CharacterBody2D, Camera2D, Area2D triggers and AnimatedSprite2D nodes as they are assembled in a real map.",
    },
    {
      src: shotTaxiRank,
      alt: "Godot editor showing the taxi rank scene and its TravelDestination configuration",
      title: "The roadside taxi rank",
      caption: "One reusable taxi_rank scene, configured per map with a TravelDestination, lane offset and manual-call flag.",
    },
  ],
  art: [
    {
      src: tilesetSetupAsset.url,
      alt: "Godot TileSet editor showing the grass tile source and texture settings",
      title: "Preparing a terrain source",
      caption: "Tile sources are configured against the 16×16 grid before they are painted into a realm.",
    },
  ],
  challenges: [
    {
      src: shotYsortFix,
      alt: "Before and after of the depth-sorting fix in the Godot editor",
      title: "The depth-sorting fix",
      caption: "Stripping pre-baked frame_progress values from AnimatedSprite2D nodes restored engine-driven Y-sorting, now guarded by test_prop_sorting.gd.",
    },
  ],
};

function renderBlock(b: Block, i: number) {
  switch (b.kind) {
    case "h":
      return (
        <h3 key={i} className="mt-8 font-display text-xl font-extrabold tracking-tight first:mt-0">
          {b.text}
        </h3>
      );
    case "p":
      return (
        <p key={i} className="mt-4 leading-relaxed text-muted-foreground">
          {b.text}
        </p>
      );
    case "list":
      return (
        <ul key={i} className="mt-4 list-disc space-y-2 pl-5 text-muted-foreground">
          {b.items.map((it) => (
            <li key={it}>{it}</li>
          ))}
        </ul>
      );
    case "code":
      return (
        <pre
          key={i}
          className="mt-4 overflow-x-auto border border-border bg-secondary p-4 font-mono text-xs leading-relaxed"
        >
          {b.text}
        </pre>
      );
    case "table":
      return (
        <div key={i} className="mt-4 overflow-x-auto">
          <table className="w-full border-collapse text-sm">
            <thead>
              <tr>
                {b.head.map((h) => (
                  <th key={h} className="rule-label border-b-2 border-foreground py-2 pr-4 text-left">
                    {h}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {b.rows.map((r) => (
                <tr key={r[0]}>
                  {r.map((c, ci) => (
                    <td
                      key={ci}
                      className={`border-b border-border py-3 pr-4 align-top ${
                        ci === 0 ? "font-medium" : "text-muted-foreground"
                      }`}
                    >
                      {c}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      );
  }
}

function DocsPage() {
  return (
    <div className="mx-auto max-w-5xl px-5 py-14 md:px-8">
      <PageHeader
        eyebrow="Build notes"
        title="Documentation"
        description="The full project documentation for The Tapestry of Monyul — design, education, engineering, art and testing."
      />
      <Tabs defaultValue="overview" className="mt-10">
        <TabsList className="flex h-auto flex-wrap gap-1 bg-secondary p-1">
          {sections.map((s) => (
            <TabsTrigger
              key={s.value}
              value={s.value}
              className="rule-label data-[state=active]:bg-primary data-[state=active]:text-primary-foreground"
            >
              {s.label}
            </TabsTrigger>
          ))}
        </TabsList>
        {sections.map((s) => (
          <TabsContent key={s.value} value={s.value} className="mt-8">
            <article className="border border-border bg-card p-6 md:p-10">
              <div className="rule-label text-primary">{s.label}</div>
              <h2 className="mt-3 font-display text-3xl font-extrabold tracking-tight md:text-4xl">{s.title}</h2>
              <div className="mt-6">{s.blocks.map(renderBlock)}</div>
              {editorImages[s.value]?.length ? (
                <div className="mt-10 grid gap-5 md:grid-cols-2">
                  {editorImages[s.value].map((image) => (
                    <figure
                      key={image.title}
                      className={`border border-border bg-secondary ${image.compact ? "md:col-span-2" : ""}`}
                    >
                      <div className={`flex items-center justify-center overflow-hidden bg-foreground ${image.compact ? "min-h-24 p-5" : "aspect-[4/3]"}`}>
                        <img
                          src={image.src}
                          alt={image.alt}
                          loading="lazy"
                          className={image.compact ? "h-auto w-full object-contain" : "h-full w-full object-cover"}
                        />
                      </div>
                      <figcaption className="border-t border-border bg-card p-4">
                        <span className="font-display text-lg font-extrabold">{image.title}</span>
                        <span className="mt-1 block text-sm text-muted-foreground">{image.caption}</span>
                      </figcaption>
                    </figure>
                  ))}
                </div>
              ) : null}
            </article>
          </TabsContent>
        ))}
      </Tabs>
    </div>
  );
}
