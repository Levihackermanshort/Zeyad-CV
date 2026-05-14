"use client";

import { personal } from "@/lib/data";
import { Mail, Phone, Linkedin, Github, Heart } from "lucide-react";

export default function Footer() {
  return (
    <footer className="py-12 px-6 border-t border-white/5">
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="text-center md:text-left">
          <h3 className="font-display font-bold text-xl text-gradient mb-1">
            {personal.name}
          </h3>
          <p className="text-muted text-sm">{personal.tagline}</p>
        </div>

        <div className="flex items-center gap-4">
          <a
            href={`mailto:${personal.email}`}
            className="w-10 h-10 rounded-full bg-card border border-white/10 flex items-center justify-center text-muted hover:text-white hover:border-primary/40 transition-all"
          >
            <Mail size={18} />
          </a>
          <a
            href={personal.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="w-10 h-10 rounded-full bg-card border border-white/10 flex items-center justify-center text-muted hover:text-white hover:border-primary/40 transition-all"
          >
            <Linkedin size={18} />
          </a>
          <a
            href={personal.github}
            target="_blank"
            rel="noopener noreferrer"
            className="w-10 h-10 rounded-full bg-card border border-white/10 flex items-center justify-center text-muted hover:text-white hover:border-primary/40 transition-all"
          >
            <Github size={18} />
          </a>
        </div>

        <p className="text-muted text-xs flex items-center gap-1">
          Built with <Heart size={12} className="text-primary" /> by Zeyad Maeen
        </p>
      </div>
    </footer>
  );
}
