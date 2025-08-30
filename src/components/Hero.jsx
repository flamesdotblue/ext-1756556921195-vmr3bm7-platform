import React from 'react';
import Spline from '@splinetool/react-spline';
import { ArrowRight } from 'lucide-react';

export default function Hero() {
  return (
    <section id="home" className="relative">
      <div className="relative h-[72vh] w-full overflow-hidden">
        <Spline scene="https://prod.spline.design/qw5pDw-Wh4PXvDw4/scene.splinecode" style={{ width: '100%', height: '100%' }} />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white via-white/60 to-white/0" />
      </div>

      <div className="mx-auto -mt-24 max-w-7xl px-4 sm:px-6 lg:px-8 relative">
        <div className="grid lg:grid-cols-2 gap-8 items-end">
          <div className="bg-white/80 backdrop-blur rounded-2xl p-6 sm:p-8 shadow-lg border border-slate-200/60">
            <p className="text-xs uppercase tracking-widest text-blue-700/80 mb-2">Quantum Careers at bloq</p>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-semibold leading-tight text-slate-900">
              Build the future of quantum computing
            </h1>
            <p className="mt-4 text-slate-600 text-base sm:text-lg">
              Join a world-class team shaping quantum software, hardware interfaces, and developer tooling. Solve problems at the edge of what’s possible.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <a href="#open-roles" className="inline-flex items-center gap-2 rounded-full bg-blue-600 hover:bg-blue-700 text-white px-5 py-3 text-sm font-medium shadow-sm transition-colors">
                Explore open roles <ArrowRight className="h-4 w-4" />
              </a>
              <a href="#culture" className="inline-flex items-center gap-2 rounded-full border border-slate-300 hover:border-blue-400 hover:text-blue-700 text-slate-700 px-5 py-3 text-sm font-medium transition-colors">
                Our culture
              </a>
            </div>
          </div>
          <div id="tech" className="hidden lg:block">
            <div className="rounded-2xl border border-slate-200/60 bg-white/70 backdrop-blur p-6 shadow-lg">
              <h3 className="text-slate-900 font-semibold text-lg">Our stack</h3>
              <ul className="mt-3 grid grid-cols-2 gap-3 text-sm text-slate-600">
                <li className="rounded-lg border border-slate-200 p-3">Quantum SDKs (Qiskit, Cirq)</li>
                <li className="rounded-lg border border-slate-200 p-3">Compilers & transpilers</li>
                <li className="rounded-lg border border-slate-200 p-3">Cloud orchestration</li>
                <li className="rounded-lg border border-slate-200 p-3">Error mitigation</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
