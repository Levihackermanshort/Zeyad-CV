"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { Mail, Phone, MapPin, Linkedin, Github } from "lucide-react";
import { personal } from "@/lib/data";

export default function Hero() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".hero-anim", {
        y: 40,
        opacity: 0,
        duration: 1,
        stagger: 0.15,
        ease: "power3.out",
      });
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  const contacts = [
    { icon: Mail, href: `mailto:${personal.email}`, text: personal.email },
    { icon: Phone, href: `tel:${personal.phoneUK.split(" ").join("")}`, text: personal.phoneUK },
    { icon: Phone, href: `tel:${personal.phoneEG.split(" ").join("")}`, text: personal.phoneEG },
    { icon: MapPin, href: "#", text: personal.location },
    { icon: Linkedin, href: personal.linkedin, text: "linkedin.com/in/zezomaeen" },
    { icon: Github, href: personal.github, text: "github.com/levihackermanshort" },
  ];

  return (
    <section
      id="about"
      ref={sectionRef}
      className="relative min-h-screen flex items-center justify-center pt-20 pb-10 px-6"
    >
      <div className="max-w-5xl mx-auto w-full">
        <div className="bg-card rounded-3xl p-10 md:p-16 border border-white/10 relative overflow-hidden shadow-2xl">
          {/* Glow orbs */}
          <div className="absolute -top-32 -right-32 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
          <div className="absolute -bottom-24 -left-24 w-80 h-80 bg-secondary/10 rounded-full blur-3xl" />

          <div className="relative z-10 flex flex-col md:flex-row items-center gap-10">
            {/* Avatar */}
            <div className="relative w-36 h-36 flex-shrink-0">
              <div className="absolute inset-0 rounded-full border-2 border-transparent border-t-primary border-r-secondary animate-spin" style={{ animationDuration: "8s" }} />
              <div className="w-full h-full rounded-full bg-gradient-main flex items-center justify-center text-5xl font-display font-bold text-white border-4 border-card shadow-[0_0_40px_rgba(99,102,241,0.4)]">
                ZM
              </div>
            </div>

            <div className="text-center md:text-left flex-1">
              <h1 className="hero-anim font-display text-4xl md:text-5xl font-bold text-gradient mb-2">
                {personal.name}
              </h1>
              <p className="hero-anim text-lg md:text-xl text-muted font-medium mb-4">
                {personal.tagline}
              </p>
              <p className="hero-anim text-muted leading-relaxed max-w-2xl">
                {personal.summary}
              </p>

              <div className="hero-anim flex flex-wrap gap-3 mt-6 justify-center md:justify-start">
                {contacts.map((c, i) => (
                  <a
                    key={i}
                    href={c.href}
                    target={c.href.startsWith("http") ? "_blank" : undefined}
                    rel={c.href.startsWith("http") ? "noopener noreferrer" : undefined}
                    className="inline-flex items-center gap-2 bg-primary/10 border border-primary/20 px-4 py-2 rounded-full text-sm text-white hover:bg-primary/20 hover:border-primary/40 transition-all hover:-translate-y-0.5"
                  >
                    <c.icon size={14} className="text-primary" />
                    <span className="hidden sm:inline">{c.text}</span>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
