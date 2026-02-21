import { HeartCrack } from "lucide-react";

export default function NotFound() {
  return (
    <div className="h-dvh w-full flex flex-col items-center justify-center">
      <HeartCrack size={64} strokeWidth={1.5} className="stroke-muted-foreground" />
      <div className="text-4xl text-primary font-bold mt-4">404</div>
      <div className="text-xl">Page not found</div>
      <a href="/" className="mt-4 inline-flex items-center gap-2 font-mono text-sm text-muted-foreground hover:text-primary transition-colors">
        {">"} return_to_home()
      </a>
    </div>
  )
}
