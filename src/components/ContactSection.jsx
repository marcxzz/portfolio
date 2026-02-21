'use client'

import { useState } from "react";

export function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <section id="contact" className="relative py-32 border-t border-border">
      <div className="container">
        <div className="max-w-2xl mx-auto">
          <div className="mb-12 space-y-4">
            <p className="code-comment">get in touch</p>
            <h2 className="text-4xl font-bold tracking-tight">
              <span className="text-primary">{">"}</span> Contact
            </h2>
            <p className="text-muted-foreground font-mono text-sm">
              Have a project in mind? Let's build something great together.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-2">
              <label className="font-mono text-xs text-muted-foreground">
                <span className="text-primary/60">const </span>name
              </label>
              <input
                type="text"
                required
                value={formData.name}
                onChange={(e) =>
                  setFormData({ ...formData, name: e.target.value })
                }
                className="w-full bg-secondary border border-border rounded-md px-4 py-3 font-mono text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary/50 focus:shadow-[var(--glow-primary)] transition-all"
                placeholder='"your name"'
              />
            </div>

            <div className="space-y-2">
              <label className="font-mono text-xs text-muted-foreground">
                <span className="text-primary/60">const </span>email
              </label>
              <input
                type="email"
                required
                value={formData.email}
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
                className="w-full bg-secondary border border-border rounded-md px-4 py-3 font-mono text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary/50 focus:shadow-[var(--glow-primary)] transition-all"
                placeholder='"you@email.com"'
              />
            </div>

            <div className="space-y-2">
              <label className="font-mono text-xs text-muted-foreground">
                <span className="text-primary/60">const </span>message
              </label>
              <textarea
                required
                rows={5}
                value={formData.message}
                onChange={(e) =>
                  setFormData({ ...formData, message: e.target.value })
                }
                className="w-full bg-secondary border border-border rounded-md px-4 py-3 font-mono text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary/50 focus:shadow-[var(--glow-primary)] transition-all resize-none"
                placeholder='"tell me about your project..."'
              />
            </div>

            <button
              type="submit"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-md border border-primary/30 bg-primary/10 text-primary font-mono text-sm transition-all hover:bg-primary/20 hover:shadow-[var(--glow-primary)]"
            >
              {submitted ? "✓ message_sent()" : "> send_message()"}
            </button>
          </form>

          {/* Social links */}
          <div className="mt-16 pt-8 border-t border-border">
            <p className="code-comment mb-4">find me elsewhere</p>
            <div className="flex gap-6 font-mono text-sm">
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                github
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                linkedin
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                twitter
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};