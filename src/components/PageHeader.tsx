interface PageHeaderProps {
  eyebrow?: string;
  title: string;
  description?: string;
}

export function PageHeader({ eyebrow, title, description }: PageHeaderProps) {
  return (
    <header className="border-b border-border pb-10">
      {eyebrow && (
        <div className="rule-label flex items-center gap-3 text-primary">
          <span className="h-px w-10 bg-primary" />
          {eyebrow}
        </div>
      )}
      <h1 className="display-xl mt-5 text-5xl md:text-7xl">{title}</h1>
      {description && (
        <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground">
          {description}
        </p>
      )}
    </header>
  );
}
