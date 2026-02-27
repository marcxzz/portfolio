'use client'

import { useParams } from "next/navigation";
import Link from "next/link";
import { PROJECTS } from "@/data/projects";
import NotFound from "@/app/not-found";
import { ArrowLeft, X } from "lucide-react";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import Image from "next/image";
import { useEffect, useState } from "react";

const statusColors = {
  live: "bg-primary/20 text-primary border-primary/30",
  "in-development": "bg-accent/20 text-accent border-accent/30",
  archived: "bg-muted text-muted-foreground border-border",
};

export default function ProjectDetail() {
  const { id } = useParams();
  const project = PROJECTS.find((p) => p.id === id);

  const [api, setApi] = useState(null)
  const [current, setCurrent] = useState(0)
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    if (!api) return

    const onSelect = () => {
      setCurrent(api.selectedScrollSnap())
    }

    api.on("select", onSelect)
    onSelect()

    return () => {
      api.off("select", onSelect)
    }
  }, [api])

  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === "Escape") setIsOpen(false)
    }

    window.addEventListener("keydown", handleEsc)
    return () => window.removeEventListener("keydown", handleEsc)
  }, [])

  const [activeImage, setActiveImage] = useState(project.images[current])

  useEffect(() => {
    setActiveImage(project.images[current])
  }, [current])

  const handleImageClick = (img) => {
    setActiveImage(img)
    setIsOpen(true)
  }

  if (!project) {
    return <NotFound pageType='project' />
  }

  return (
    <div className="min-h-screen bg-background">

      <main className="container pt-32 pb-20">
        {/* Back link */}
        <Link
          href="/"
          className="inline-flex items-center gap-2 font-mono text-sm text-muted-foreground hover:text-primary transition-colors mb-12"
        >
          <ArrowLeft size={16} />
          cd ..
        </Link>

        {/* Header */}
        <div className="mb-12 space-y-4">
          <h1 className="text-5xl font-bold tracking-tight">{project.title}</h1>
          <p className="font-mono text-accent">{project.subtitle}</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Main content */}
          <div className="lg:col-span-2 space-y-12">
            {/* Pictures carousel */}
            {project.images.length > 0 && (
              <>
                <div className="px-0">
                  <Carousel
                    className="w-full flex justify-center"
                    setApi={setApi}
                    opts={{
                      align: "center",
                      loop: true
                    }}
                  >
                    <CarouselContent className="flex items-center">
                      {project.images.map((img) => (
                        <>
                          <CarouselItem key={img.filename} className="basis-2/5 md:basis-3/10 xl:basis-2/7" >
                            <div
                              className="w-full h-fit max-h-[65dvh]"
                              onClick={() => handleImageClick(img)}
                            >
                              {/* TODO: all the images must have the same height: desktop images will be wider but equally tall (not scaled down) */}
                              <img
                                src={`/assets/images/${project.id}/${img.filename}`}
                                alt={`${project.id} ${img.name}`}
                                // fill
                                // width={250}
                                // height={200}
                                className="h-fit w-full object-contain! rounded-lg transition-transform duration-300 hover:scale-[1.02] cursor-zoom-in"
                              />
                            </div>
                          </CarouselItem>
                        </>
                      ))}
                    </CarouselContent>

                    <CarouselPrevious />
                    <CarouselNext />
                  </Carousel>
                  <div className="mt-4 text-center">
                    <p className="text-sm text-muted-foreground">
                      {activeImage?.name}
                    </p>
                  </div>
                </div>

                {/* Lightbox */}
                {isOpen && (
                  <div
                    className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center p-8 m-0"
                    onClick={() => setIsOpen(false)}
                  >
                    <div
                      className="absolute top-8 right-8 cursor-pointer"
                      onClick={() => setIsOpen(false)}
                    >
                      <X />
                    </div>
                    <div
                      className="relative w-full h-full max-w-6xl max-h-[85vh]"
                      onClick={(e) => e.stopPropagation()}
                    >
                      <Image
                        src={`/assets/images/${project.id}/${activeImage.filename}`}
                        alt={activeImage.name}
                        fill
                        className="object-contain rounded-xl"
                      />
                    </div>
                  </div>
                )}
              </>
            )}

            {/* Description */}
            <div className="space-y-4">
              <p className="code-comment">about this project</p>
              <p className="text-secondary-foreground leading-relaxed">
                {project.longDescription}
              </p>
            </div>

            {/* Features */}
            <div className="space-y-4">
              <p className="code-comment">key features</p>
              <div className="rounded-lg border border-border bg-card p-6">
                <pre className="font-mono text-sm space-y-2">
                  <code className="text-muted-foreground">
                    {"const features = [\n"}
                  </code>
                  {project.features.map((feature, i) => (
                    <code key={i} className="block pl-4">
                      <span className="text-primary">"</span>
                      <span className="text-foreground">{feature}</span>
                      <span className="text-primary">"</span>
                      <span className="text-muted-foreground">
                        {i < project.features.length - 1 ? "," : ""}
                      </span>
                    </code>
                  ))}
                  <code className="text-muted-foreground">{"];"}</code>
                </pre>
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-8">
            {/* Tech stack */}
            <div className="space-y-4">
              <p className="code-comment">tech stack</p>
              <div className="flex flex-wrap gap-2">
                {project.techStack.map((tech) => (
                  <span
                    key={tech}
                    className="inline-flex items-center px-3 py-1.5 rounded-sm bg-secondary text-secondary-foreground font-mono text-xs border border-border"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Links */}
            <div className="space-y-4">
              <p className="code-comment">links</p>
              <div className="space-y-3">
                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 p-3 rounded-md border border-border bg-card font-mono text-sm text-muted-foreground hover:text-primary hover:border-primary/30 transition-all"
                  >
                    <span className="text-primary">{">"}</span> github
                  </a>
                )}
                {project.liveUrl && (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 p-3 rounded-md border border-primary/30 bg-primary/10 font-mono text-sm text-primary hover:bg-primary/20 hover:shadow-[var(--glow-primary)] transition-all"
                  >
                    <span>◆</span> live demo
                  </a>
                )}
              </div>
            </div>

            {/* Project info card */}
            <div className="rounded-lg border border-border bg-card p-5 space-y-3">
              <div className="flex justify-between font-mono text-xs">
                <span className="text-muted-foreground">category</span>
                <span className="text-foreground">{project.category}</span>
              </div>
              <div className="border-t border-border" />
              <div className="flex justify-between font-mono text-xs">
                <span className="text-muted-foreground">year</span>
                <span className="text-foreground">{project.year}</span>
              </div>
              <div className="border-t border-border" />
              <div className="flex justify-between font-mono text-xs">
                <span className="text-muted-foreground">status</span>
                <span className="text-primary">{project.status}</span>
              </div>
            </div>
          </div>
        </div>
      </main>

    </div>
  );
};
