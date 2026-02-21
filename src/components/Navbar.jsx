'use client'

import Link from "next/link";
import { ThemeToggle } from "./ThemeToggle";

const navItems = [
  { label: "home", href: "/" },
  { label: "projects", href: "/#projects" },
  { label: "stack", href: "/#stack" },
  { label: "contact", href: "/#contact" },
];

export function Navbar() {
  // TODO: fix this
  // const location = null;

  // const handleNavClick = (href) => {
  //   if (href.startsWith("/#")) {
  //     const id = href.replace("/#", "");
  //     if (location.pathname === "/") {
  //       document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  //     }
  //   }
  // };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 border-b border-border bg-background/80 backdrop-blur-xl">
      <div className="container flex h-16 items-center justify-between">
        <Link href="/" className="font-mono text-lg font-bold tracking-tight">
          <span className="text-primary">{"<"}</span>
          <span className="text-foreground">marcoangioni</span>
          <span className="text-primary">{" />"}</span>
        </Link>

        <div className="flex items-center gap-6">
          {navItems.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              // onClick={() => handleNavClick(item.href)}
              className="font-mono text-sm text-muted-foreground transition-colors hover:text-primary hidden sm:block"
            >
              <span className="text-primary/40">./</span>
              {item.label}
            </Link>
          ))}
          <Link
            href="assets/Marco_Angioni_CV.pdf"
            target="_blank"
            // onClick={() => handleNavClick(item.href)}
            className="font-mono text-sm text-muted-foreground transition-colors hover:text-primary hidden sm:block"
          >
            <span className="text-primary/40">./</span>
            cv
          </Link>
          <ThemeToggle />
        </div>
      </div>
    </nav>
  );
};