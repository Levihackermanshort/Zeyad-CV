"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import * as Icons from "lucide-react";
import { LucideIcon } from "lucide-react";
import { volunteering as volData, languages as langData } from "@/lib/data";
import SectionTitle from "./SectionTitle";

gsap.registerPlugin(ScrollTrigger);

export default function Volunteering() {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".vol-item", {
        y: 30,
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
    <section id="contact" ref={ref} className="py-16 px-6">
      <div className="max-w-5xl mx-auto space-y-16">
        {/* Volunteering */}
        <div>
          <SectionTitle icon="HeartHandshake">Volunteering & Community</SectionTitle>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {volData.map((v, i) => {
              const IconComp = (Icons as Record<string, LucideIcon>)[v.icon] || Icons.Heart;
              return (
                <div
                  key={i}
                  className="vol-item flex items-start gap-3 bg-primary/5 border border-white/10 rounded-xl p-4 hover:border-primary/30 transition-all"
                >
                  <IconComp size={18} className="text-secondary mt-0.5 flex-shrink-0" />
                  <div>
                    <h5 className="font-semibold text-white text-sm">{v.role}</h5>
                    <p className="text-primary text-xs font-medium">{v.org}</p>
                    <p className="text-muted text-xs mt-1">{v.desc}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Languages */}
        <div>
          <SectionTitle icon="Languages">Languages</SectionTitle>
          <div className="flex flex-wrap gap-4">
            {langData.map((l, i) => {
              const IconComp = (Icons as Record<string, LucideIcon>)[l.icon] || Icons.MessageCircle;
              return (
                <div
                  key={i}
                  className="vol-item flex items-center gap-3 bg-primary/5 border border-white/10 rounded-xl px-5 py-3 hover:border-primary/30 transition-all"
                >
                  <IconComp size={20} className="text-accent" />
                  <div>
                    <span className="font-semibold text-white text-sm">{l.name}</span>
                    <span className="text-muted text-xs ml-2">— {l.level}</span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
