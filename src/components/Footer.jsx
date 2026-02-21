import { Copyright } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t border-border py-8">
      <div className="container flex items-center justify-between">
        <p className="font-mono text-xs text-muted-foreground">
          <span className="text-primary/40">{"// "}</span>
          built with React JS + Next.js
        </p>
        <p className="inline-flex items-center gap-1 font-mono text-xs text-muted-foreground">
          <Copyright size={14} />
          {new Date().getFullYear()} Marco Angioni
        </p>
      </div>
    </footer>
  );
};