"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import * as Icons from "lucide-react";
import { LucideIcon } from "lucide-react";
import { education as eduData } from "@/lib/data";
import SectionTitle from "./SectionTitle";

gsap.registerPlugin(ScrollTrigger);

export default function Education() {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".edu-card", {
        y: 30,
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
    <section id="education" ref={ref} className="py-16 px-6">
      <div className="max-w-5xl mx-auto">
        <SectionTitle icon="BookOpen">Education & Certifications</SectionTitle>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {eduData.map((edu, i) => {
            const IconComp = (Icons as Record<string, LucideIcon>)[edu.icon] || Icons.GraduationCap;
            return (
              <div
                key={i}
                className="edu-card bg-primary/5 border border-white/10 rounded-2xl p-6 hover:border-primary/40 transition-all"
              >
                <div className="w-10 h-10 rounded-xl bg-gradient-main flex items-center justify-center text-white mb-4">
                  <IconComp size={18} />
                </div>
                <h4 className="font-display text-lg font-semibold text-white mb-1">
                  {edu.degree}
                </h4>
                <p className="text-primary font-medium text-sm mb-2">{edu.school}</p>
                <p className="text-muted text-sm leading-relaxed">{edu.detail}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
