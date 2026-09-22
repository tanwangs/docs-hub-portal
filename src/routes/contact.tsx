import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { PageHeader } from "@/components/PageHeader";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Mail, Github, Send, Gamepad2 } from "lucide-react";
import { toast } from "sonner";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — The Tapestry of Monyul" },
      { name: "description", content: "Get in touch with team Samsara about The Tapestry of Monyul." },
      { property: "og:title", content: "Contact — The Tapestry of Monyul" },
      { property: "og:description", content: "Questions, feedback or a playtest request? Reach team Samsara." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  const [sending, setSending] = useState(false);

  return (
    <div className="mx-auto max-w-4xl px-5 py-14 md:px-8">
      <PageHeader
        eyebrow="Say hello"
        title="Contact us"
        description="Questions about the project, feedback on the build, or interested in playtesting with a class? Reach out."
      />

      <div className="mt-10 grid gap-6 md:grid-cols-[1.2fr_1fr]">
        <form
          onSubmit={(e) => {
            e.preventDefault();
            setSending(true);
            const form = e.currentTarget;
            setTimeout(() => {
              setSending(false);
              toast.success("Thanks! We'll get back to you soon.");
              form.reset();
            }, 700);
          }}
          className="border border-border bg-card p-6"
        >
          <div className="grid gap-4">
            <div>
              <Label htmlFor="name">Name</Label>
              <Input id="name" required placeholder="Your name" className="mt-1.5" />
            </div>
            <div>
              <Label htmlFor="email">Email</Label>
              <Input id="email" type="email" required placeholder="you@example.com" className="mt-1.5" />
            </div>
            <div>
              <Label htmlFor="message">Message</Label>
              <Textarea id="message" required rows={5} placeholder="What's on your mind?" className="mt-1.5" />
            </div>
            <Button type="submit" disabled={sending} className="rule-label">
              <Send className="mr-2 h-4 w-4" />
              {sending ? "Sending..." : "Send message"}
            </Button>
          </div>
        </form>

        <div className="space-y-4">
          <div className="border border-border bg-card p-5">
            <Github className="h-5 w-5 text-primary" />
            <div className="rule-label mt-3 text-muted-foreground">Source &amp; docs</div>
            <a
              href="https://github.com/tanwangs/TechTrek-2026-Samsara"
              target="_blank"
              rel="noreferrer"
              className="font-display mt-1 block break-words text-lg font-extrabold hover:text-primary"
            >
              tanwangs/TechTrek-2026-Samsara
            </a>
          </div>
          <div className="border border-border bg-card p-5">
            <Gamepad2 className="h-5 w-5 text-primary" />
            <div className="rule-label mt-3 text-muted-foreground">Engine</div>
            <div className="font-display mt-1 text-lg font-extrabold">Godot 4.7.2 · GDScript</div>
          </div>
          <div className="border border-border bg-card p-5">
            <Mail className="h-5 w-5 text-primary" />
            <div className="rule-label mt-3 text-muted-foreground">Team</div>
            <p className="mt-1 text-sm text-muted-foreground">
              Tandin Wangyel · Jigme Tshering · Sangay Tharchen
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
