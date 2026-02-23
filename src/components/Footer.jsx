import { Copyright, Github, Instagram, Linkedin, Mail } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t border-border py-8">
      <div className="container flex items-center justify-between">
        <p className="font-mono text-xs text-muted-foreground">
          <span className="text-primary/40">{"// "}</span>
          Marco Angioni from Cagliari, Italy
        </p>

        <div className="flex gap-4 font-mono text-sm">
          <a
            href="https://github.com/marcxzz"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-primary transition-colors"
          >
            <Github size={16} />
          </a>
          <a
            href="https://linkedin.com/in/marco-angioni"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-primary transition-colors"
          >
            <Linkedin size={16} />
          </a>
          <a
            href="https://instagram.com/shot_by_marcxzz_"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-primary transition-colors"
          >
            <Instagram size={16} />
          </a>
          <a
            href="mailto:marcoangioni2006@gmail.com?subject=New%20Email%20from%20Portfolio&body=Hi%20Marco%2C%20let's%20get%20in%20touch!"
            target="_blank"
            className="text-muted-foreground hover:text-primary transition-colors"
          >
            <Mail size={16} />
          </a>
        </div>

        <p className="inline-flex items-center gap-1 font-mono text-xs text-muted-foreground">
          <Copyright size={14} />
          {new Date().getFullYear()} Marco Angioni
        </p>
      </div>
    </footer>
  );
};