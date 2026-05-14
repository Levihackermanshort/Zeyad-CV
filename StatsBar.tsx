"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { stats } from "@/lib/data";

gsap.registerPlugin(ScrollTrigger);

export default function StatsBar() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".stat-box", {
        y: 30,
        opacity: 0,
        duration: 0.8,
        stagger: 0.1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ref.current,
          start: "top 85%",
        },
      });
    }, ref);
    return () => ctx.revert();
  }, []);

  return (
    <div ref={ref} className="max-w-5xl mx-auto px-6 -mt-4 mb-10">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {stats.map((s, i) => (
          <div
            key={i}
            className="stat-box bg-card border border-white/10 rounded-2xl p-6 text-center hover:border-primary/30 transition-all hover:-translate-y-1"
          >
            <div className="font-display text-3xl md:text-4xl font-bold text-gradient">
              {s.num}
            </div>
            <div className="text-xs text-muted uppercase tracking-wider mt-1">
              {s.label}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
