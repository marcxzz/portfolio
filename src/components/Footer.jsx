export function Footer() {
  return (
    <footer className="border-t border-border py-8">
      <div className="container flex items-center justify-between">
        <p className="font-mono text-xs text-muted-foreground">
          <span className="text-primary/40">{"// "}</span>
          built with React + TypeScript
        </p>
        <p className="font-mono text-xs text-muted-foreground">
          © {new Date().getFullYear()}
        </p>
      </div>
    </footer>
  );
};