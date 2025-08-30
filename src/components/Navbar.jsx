import React from 'react';
import { Briefcase, Cpu, Home } from 'lucide-react';

export default function Navbar() {
  return (
    <header className="sticky top-0 z-40 w-full backdrop-blur bg-white/70 border-b border-slate-200/60">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <a href="#home" className="flex items-center gap-2">
            <div className="relative h-8 w-8 grid place-items-center">
              <svg viewBox="0 0 100 100" className="h-8 w-8">
                <defs>
                  <linearGradient id="g" x1="0" y1="0" x2="1" y2="1">
                    <stop offset="0%" stopColor="#1e3a8a" />
                    <stop offset="100%" stopColor="#3b82f6" />
                  </linearGradient>
                </defs>
                <polygon points="50,5 95,50 50,95 5,50" fill="url(#g)" />
              </svg>
            </div>
            <span className="font-semibold tracking-tight text-xl text-slate-900">bloq</span>
          </a>

          <nav className="hidden md:flex items-center gap-6 text-sm">
            <a href="#home" className="inline-flex items-center gap-2 text-slate-700 hover:text-blue-700 transition-colors">
              <Home className="h-4 w-4" /> Home
            </a>
            <a href="#open-roles" className="inline-flex items-center gap-2 text-slate-700 hover:text-blue-700 transition-colors">
              <Briefcase className="h-4 w-4" /> Open Roles
            </a>
            <a href="#tech" className="inline-flex items-center gap-2 text-slate-700 hover:text-blue-700 transition-colors">
              <Cpu className="h-4 w-4" /> Tech
            </a>
          </nav>

          <a href="#open-roles" className="inline-flex items-center justify-center rounded-full bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 text-sm font-medium shadow-sm transition-colors">
            We’re hiring
          </a>
        </div>
      </div>
    </header>
  );
}
