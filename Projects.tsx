"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Calendar, Trophy, Building2 } from "lucide-react";
import { projects as projData } from "@/lib/data";
import SectionTitle from "./SectionTitle";

gsap.registerPlugin(ScrollTrigger);

export default function Projects() {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".project-item", {
        y: 40,
        opacity: 0,
        duration: 0.8,
        stagger: 0.15,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ref.current,
          start: "top 80%",
        },
      });
    }, ref);
    return () => ctx.revert();
  }, []);

  return (
    <section id="projects" ref={ref} className="py-16 px-6">
      <div className="max-w-5xl mx-auto">
        <SectionTitle icon="Rocket">Projects</SectionTitle>
        <div className="space-y-8">
          {projData.map((proj, i) => (
            <div key={i} className="project-item relative pl-8 pb-8 border-l-2 border-card-light last:pb-0 last:border-l-transparent">
              <div className="absolute -left-[7px] top-1 w-3 h-3 rounded-full bg-gradient-main border-[3px] border-card" />

              <div className="flex flex-wrap items-start justify-between gap-2 mb-2">
                <div>
                  <h3 className="font-display text-xl font-semibold text-white">
                    {proj.title}
                  </h3>
                  <p className="text-primary font-medium flex items-center gap-1 text-sm">
                    <Building2 size={14} />
                    {proj.org}
                  </p>
                </div>
              </div>

              <div className="flex flex-wrap gap-4 text-sm text-muted mb-3">
                <span className="flex items-center gap-1"><Calendar size={14} /> {proj.period}</span>
                <span className="flex items-center gap-1 text-accent"><Trophy size={14} /> {proj.badge}</span>
              </div>

              <ul className="space-y-2 text-muted text-sm leading-relaxed">
                {proj.points.map((pt, j) => (
                  <li key={j} className="flex items-start gap-2">
                    <span className="text-primary mt-1">▸</span>
                    <span dangerouslySetInnerHTML={{ __html: pt.replace(/<strong>/g, '<strong class="text-white">') }} />
                  </li>
                ))}
              </ul>

              <div className="flex flex-wrap gap-2 mt-4">
                {proj.tech.map((t, j) => (
                  <span key={j} className="bg-accent/10 border border-accent/20 text-accent px-2.5 py-1 rounded-md text-xs font-medium">
                    {t}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
