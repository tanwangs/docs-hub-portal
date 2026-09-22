interface ClipCardProps {
  /** Optional looping video (mp4/webm). When omitted, the still image loops with a slow pan. */
  videoSrc?: string;
  image: string;
  title: string;
  caption: string;
}

export function ClipCard({ videoSrc, image, title, caption }: ClipCardProps) {
  return (
    <figure className="overflow-hidden rounded-lg border border-border bg-card shadow-card">
      <div className="relative aspect-video overflow-hidden bg-muted">
        {videoSrc ? (
          <video
            className="h-full w-full object-cover"
            src={videoSrc}
            poster={image}
            autoPlay
            loop
            muted
            playsInline
          />
        ) : (
          <img
            src={image}
            alt={title}
            loading="lazy"
            width={1280}
            height={720}
            className="slow-pan h-full w-full object-cover"
          />
        )}
      </div>
      <figcaption className="border-t border-border/70 px-4 py-3">
        <div className="font-display text-sm font-semibold">{title}</div>
        <p className="mt-1 text-sm text-muted-foreground">{caption}</p>
      </figcaption>
    </figure>
  );
}
