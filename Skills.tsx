"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import * as Icons from "lucide-react";
import { LucideIcon } from "lucide-react";
import { skills as skillsData } from "@/lib/data";
import SectionTitle from "./SectionTitle";

gsap.registerPlugin(ScrollTrigger);

export default function Skills() {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".skill-card", {
        y: 40,
        opacity: 0,
        duration: 0.8,
        stagger: 0.12,
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
    <section id="skills" ref={ref} className="py-16 px-6">
      <div className="max-w-5xl mx-auto">
        <SectionTitle icon="Layers">Technical Skills</SectionTitle>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {skillsData.map((cat, i) => {
            const IconComp = (Icons as Record<string, LucideIcon>)[cat.icon] || Icons.Code;
            return (
              <div
                key={i}
                className="skill-card bg-card rounded-2xl p-6 border border-white/10 hover:border-primary/30 transition-all hover:-translate-y-1"
              >
                <h4 className="text-sm text-primary uppercase tracking-wider font-semibold mb-4 flex items-center gap-2">
                  <IconComp size={16} />
                  {cat.category}
                </h4>
                <div className="flex flex-wrap gap-2">
                  {cat.items.map((item, j) => (
                    <span
                      key={j}
                      className="bg-primary/10 border border-primary/20 px-3 py-1.5 rounded-lg text-sm text-white hover:bg-primary/20 hover:border-primary/40 transition-all hover:scale-105 cursor-default"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
