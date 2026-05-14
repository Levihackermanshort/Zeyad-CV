"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import * as Icons from "lucide-react";
import { LucideIcon } from "lucide-react";
import { achievements as achData } from "@/lib/data";
import SectionTitle from "./SectionTitle";

gsap.registerPlugin(ScrollTrigger);

export default function Achievements() {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".achieve-card", {
        y: 50,
        opacity: 0,
        duration: 0.7,
        stagger: 0.1,
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
    <section id="achievements" ref={ref} className="py-16 px-6">
      <div className="max-w-5xl mx-auto">
        <SectionTitle icon="Medal">Key Achievements</SectionTitle>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {achData.map((a, i) => {
            const IconComp = (Icons as Record<string, LucideIcon>)[a.icon] || Icons.Star;
            return (
              <div
                key={i}
                className="achieve-card group relative bg-gradient-to-br from-primary/5 to-secondary/5 border border-white/10 rounded-2xl p-5 hover:border-primary/40 transition-all hover:-translate-y-1 overflow-hidden"
              >
                <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-main opacity-5 rounded-bl-[4rem]" />
                <div className="w-10 h-10 rounded-xl bg-gradient-main flex items-center justify-center text-white mb-3 shadow-lg">
                  <IconComp size={18} />
                </div>
                <h4 className="font-semibold text-white text-sm mb-1">{a.title}</h4>
                <p className="text-muted text-xs leading-relaxed">{a.desc}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
