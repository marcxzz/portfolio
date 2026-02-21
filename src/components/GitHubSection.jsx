'use client'

import { useEffect, useState } from "react";

const GITHUB_USERNAME = "marcxzz";

const languageColors = {
  TypeScript: "bg-accent",
  JavaScript: "bg-yellow-400",
  Python: "bg-blue-400",
  Go: "bg-cyan-400",
  Rust: "bg-orange-400",
  HTML: "bg-red-400",
  CSS: "bg-purple-400",
  Shell: "bg-green-400",
};

export function GitHubSection() {
  const [user, setUser] = useState(null);
  const [repos, setRepos] = useState([]);
  const [loading, setLoading] = useState(true);
  const isVisible = true

  useEffect(() => {
    const fetchGitHub = async () => {
      try {
        const [userRes, reposRes] = await Promise.all([
          fetch(`https://api.github.com/users/${GITHUB_USERNAME}`),
          fetch(`https://api.github.com/users/${GITHUB_USERNAME}/repos?sort=stars&per_page=6`),
        ]);
        if (userRes.ok) setUser(await userRes.json());
        if (reposRes.ok) setRepos(await reposRes.json());
      } catch (err) {
        console.error("GitHub API error:", err);
      } finally {
        setLoading(false);
      }
    };
    fetchGitHub();
  }, []);

  if (loading) {
    return (
      <section className="py-32 border-t border-border">
        <div className="container">
          <p className="code-comment">fetching github data...</p>
          <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {[...Array(6)].map((_, i) => (
              <div key={i} className="h-32 rounded-lg bg-card border border-border animate-pulse" />
            ))}
          </div>
        </div>
      </section>
    );
  }

  if (!user) return null;

  return (
    <section id="github" className="relative py-32 border-t border-border">
      <div className="container">
        <div className="mb-16 space-y-4">
          <p className="code-comment">open source</p>
          <h2 className="text-4xl font-bold tracking-tight">
            <span className="text-primary">git</span> log{" "}
            <span className="text-muted-foreground">--oneline</span>
          </h2>
        </div>

        {/* Profile card */}
        <div
          className={`rounded-lg border border-border bg-card p-6 mb-8 flex flex-col sm:flex-row items-start sm:items-center gap-6 transition-all duration-500 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <img
            src={user.avatar_url}
            alt={user.name}
            className="w-16 h-16 rounded-full border-2 border-primary/30"
          />
          <div className="flex-1">
            <h3 className="text-lg font-bold text-foreground">{user.name}</h3>
            <p className="font-mono text-xs text-muted-foreground mb-2">@{user.login}</p>
            {user.bio && (
              <p className="text-sm text-secondary-foreground">{user.bio}</p>
            )}
          </div>
          <div className="flex gap-6 font-mono text-xs">
            <div className="text-center">
              <p className="text-foreground font-bold text-lg">{user.public_repos}</p>
              <p className="text-muted-foreground">repos</p>
            </div>
            <div className="text-center">
              <p className="text-foreground font-bold text-lg">{user.followers}</p>
              <p className="text-muted-foreground">followers</p>
            </div>
            <div className="text-center">
              <p className="text-foreground font-bold text-lg">{user.following}</p>
              <p className="text-muted-foreground">following</p>
            </div>
          </div>
        </div>

        {/* Repos grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {repos.map((repo, index) => (
            <a
              key={repo.id}
              href={repo.html_url}
              target="_blank"
              rel="noopener noreferrer"
              className={`group rounded-lg border border-border bg-card p-5 transition-all duration-500 hover:border-primary/30 hover:shadow-[var(--glow-primary)] ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: `${(index + 1) * 100}ms` }}
            >
              <div className="flex items-center gap-2 mb-2">
                <span className="text-primary text-xs">◆</span>
                <h4 className="font-mono text-sm font-bold text-foreground group-hover:text-primary transition-colors truncate">
                  {repo.name}
                </h4>
              </div>
              <p className="text-xs text-secondary-foreground mb-4 line-clamp-2 min-h-[2rem]">
                {repo.description || "No description"}
              </p>
              <div className="flex items-center gap-4 font-mono text-xs text-muted-foreground">
                {repo.language && (
                  <span className="flex items-center gap-1">
                    <span className={`w-2 h-2 rounded-full ${languageColors[repo.language] || "bg-muted-foreground"}`} />
                    {repo.language}
                  </span>
                )}
                <span>★ {repo.stargazers_count}</span>
                <span>⑂ {repo.forks_count}</span>
              </div>
            </a>
          ))}
        </div>

        {/* Link to full profile */}
        <div className="mt-8 text-center">
          <a
            href={user.html_url}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 font-mono text-sm text-muted-foreground hover:text-primary transition-colors"
          >
            {">"} view_full_profile() →
          </a>
        </div>
      </div>
    </section>
  );
}