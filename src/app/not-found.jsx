import { HeartCrack, TriangleAlert } from "lucide-react";
import Link from "next/link";

export default function NotFound({ pageType = 'page' }) {
  return (
    <div className="h-dvh w-full flex flex-col items-center justify-center">
      {/* <HeartCrack size={64} strokeWidth={1.5} className="stroke-muted-foreground mb-4" /> */}
      <div className="text-6xl text-primary font-bold font-mono">404</div>
      <div className="text-xl text-muted-foreground inline-flex items-center gap-2">
        <TriangleAlert size={20} className="mt-[4px]" />
        {pageType ? `${pageType}_` : ''}not_found
      </div>
      <Link href="/" className="mt-4 inline-flex items-center gap-2 font-mono text-sm text-accent hover:underline underline-offset-4 transition-colors">
        {">"} return_home()
      </Link>
    </div>
  )
}
