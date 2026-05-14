"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import * as Icons from "lucide-react";
import { LucideIcon } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

export default function SectionTitle({
  icon,
  children,
}: {
  icon: string;
  children: React.ReactNode;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const IconComp = (Icons as Record<string, LucideIcon>)[icon] || Icons.Star;

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(ref.current, {
        x: -30,
        opacity: 0,
        duration: 0.8,
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
    <div ref={ref} className="flex items-center gap-3 mb-8">
      <div className="w-10 h-10 rounded-xl bg-gradient-main flex items-center justify-center text-white shadow-lg">
        <IconComp size={20} />
      </div>
      <h2 className="font-display text-2xl font-semibold text-white">
        {children}
      </h2>
    </div>
  );
}
