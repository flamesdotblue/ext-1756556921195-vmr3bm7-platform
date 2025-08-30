import React, { useMemo, useState } from 'react';
import { ArrowRight, Cpu, Database, FlaskConical, Shield, FileText, MapPin } from 'lucide-react';

const roles = [
  {
    id: 'quantum-software-engineer',
    title: 'Quantum Software Engineer',
    team: 'Quantum SDK',
    location: 'Remote (UTC-5 to UTC+2)',
    icon: Cpu,
    description:
      'Design and optimize quantum circuits, build tools for transpilation, and integrate with hardware backends.',
    skills: ['Qiskit/Cirq', 'Python', 'Rust or C++', 'Compilers'],
    assignment: {
      summary: 'Design a variational algorithm and benchmark transpilation trade-offs.',
      details: [
        'Implement a 2–4 qubit VQE or QAOA circuit for a small problem instance.',
        'Provide two transpilation strategies and compare depth, 2-qubit count, and fidelity impact.',
        'Submit a short report (max 2 pages) with plots and reasoning. Include your code repo.',
      ],
      resources: [
        { label: 'Qiskit Docs', href: 'https://qiskit.org/documentation/' },
        { label: 'Cirq Docs', href: 'https://quantum.ai.google/cirq' },
      ],
      mailto: 'mailto:careers@bloq.company?subject=Assignment%20Submission%3A%20Quantum%20Software%20Engineer',
    },
  },
  {
    id: 'quantum-algorithms-researcher',
    title: 'Quantum Algorithms Researcher',
    team: 'Research',
    location: 'Boston, MA or Remote',
    icon: FlaskConical,
    description:
      'Investigate near-term algorithms, error mitigation, and resource estimation for practical workloads.',
    skills: ['Variational methods', 'Error mitigation', 'Complexity', 'Python/Julia'],
    assignment: {
      summary: 'Compare error mitigation techniques on a noisy simulator.',
      details: [
        'Choose 1–2 benchmark circuits (e.g., GHZ, simple Hamiltonian evolution).',
        'Compare at least two mitigation methods (e.g., ZNE, Clifford data regression).',
        'Report accuracy vs. runtime overhead and discuss scaling behavior.',
      ],
      resources: [
        { label: 'Mitiq (Error Mitigation)', href: 'https://mitiq.readthedocs.io/' },
        { label: 'Noisy Simulation (Qiskit Aer)', href: 'https://qiskit.org/ecosystem/aer/' },
      ],
      mailto: 'mailto:careers@bloq.company?subject=Assignment%20Submission%3A%20Quantum%20Algorithms%20Researcher',
    },
  },
  {
    id: 'platform-security-engineer',
    title: 'Platform Security Engineer',
    team: 'Platform',
    location: 'Remote',
    icon: Shield,
    description:
      'Secure orchestration pipelines, secrets, and multi-tenant workloads across hybrid quantum infrastructure.',
    skills: ['Kubernetes', 'Cloud IAM', 'Zero Trust', 'Go/Python'],
    assignment: {
      summary: 'Design a minimal threat model and implement a hardened secret path.',
      details: [
        'Write a concise threat model for a job submission API (actors, assets, trust boundaries).',
        'Implement a demo service that fetches a job key using short-lived credentials.',
        'Document auditing and rotation strategy. Include IaC if preferred.',
      ],
      resources: [
        { label: 'CIS Benchmarks', href: 'https://www.cisecurity.org/benchmarks' },
        { label: 'SPIFFE/SPIRE', href: 'https://spiffe.io/' },
      ],
      mailto: 'mailto:careers@bloq.company?subject=Assignment%20Submission%3A%20Platform%20Security%20Engineer',
    },
  },
  {
    id: 'data-infra-engineer',
    title: 'Data Infrastructure Engineer',
    team: 'Data',
    location: 'Hybrid - San Francisco, CA',
    icon: Database,
    description:
      'Build data pipelines for experiment telemetry, performance analytics, and ML-driven calibration.',
    skills: ['Streaming', 'Data Lakes', 'Python/Scala', 'Observability'],
    assignment: {
      summary: 'Stream and analyze experimental telemetry at scale.',
      details: [
        'Model a schema for run metadata and time-series metrics.',
        'Create a small pipeline (ingest -> store -> query) and a simple dashboard or notebook.',
        'Show cost/perf trade-offs and partitioning strategy.',
      ],
      resources: [
        { label: 'Parquet & Iceberg', href: 'https://iceberg.apache.org/' },
        { label: 'Kafka 101', href: 'https://kafka.apache.org/' },
      ],
      mailto: 'mailto:careers@bloq.company?subject=Assignment%20Submission%3A%20Data%20Infrastructure%20Engineer',
    },
  },
];

function Badge({ children }) {
  return (
    <span className="inline-flex items-center rounded-full border border-blue-200 bg-blue-50 text-blue-700 px-2.5 py-1 text-xs font-medium">
      {children}
    </span>
  );
}

function RoleCard({ role, onOpen }) {
  const Icon = role.icon;
  return (
    <div className="group rounded-2xl border border-slate-200/70 bg-white/80 backdrop-blur p-6 shadow-sm hover:shadow-md transition-shadow">
      <div className="flex items-start justify-between gap-4">
        <div className="flex items-center gap-3">
          <div className="h-10 w-10 rounded-xl bg-gradient-to-br from-blue-600 to-blue-400 text-white grid place-items-center shadow-sm">
            <Icon className="h-5 w-5" />
          </div>
          <div>
            <h3 className="text-lg font-semibold text-slate-900">{role.title}</h3>
            <div className="mt-1 flex flex-wrap items-center gap-2 text-sm text-slate-600">
              <Badge>{role.team}</Badge>
              <span className="inline-flex items-center gap-1 text-slate-600"><MapPin className="h-3.5 w-3.5" /> {role.location}</span>
            </div>
          </div>
        </div>
      </div>
      <p className="mt-4 text-slate-600 text-sm leading-relaxed">{role.description}</p>
      <div className="mt-4 flex flex-wrap gap-2">
        {role.skills.map((s) => (
          <span key={s} className="text-xs rounded-full bg-slate-100 border border-slate-200 px-2.5 py-1 text-slate-700">{s}</span>
        ))}
      </div>
      <div className="mt-6 flex items-center justify-between">
        <button onClick={() => onOpen(role)} className="inline-flex items-center gap-2 text-blue-700 hover:text-blue-800 font-medium">
          View assignment <ArrowRight className="h-4 w-4" />
        </button>
        <a href={role.assignment.mailto} className="inline-flex items-center gap-2 rounded-full border border-blue-300 text-blue-700 hover:bg-blue-600 hover:text-white transition-colors px-3 py-1.5 text-xs font-medium">
          <FileText className="h-4 w-4" /> Apply & submit
        </a>
      </div>
    </div>
  );
}

function AssignmentModal({ open, role, onClose }) {
  if (!open || !role) return null;
  return (
    <div className="fixed inset-0 z-50 grid place-items-center p-4">
      <div className="absolute inset-0 bg-slate-900/40" onClick={onClose} />
      <div className="relative w-full max-w-2xl rounded-2xl bg-white shadow-xl border border-slate-200">
        <div className="p-6 sm:p-7">
          <div className="flex items-start justify-between gap-4">
            <div className="flex items-center gap-3">
              <div className="h-10 w-10 rounded-xl bg-gradient-to-br from-blue-600 to-blue-400 text-white grid place-items-center shadow-sm">
                <role.icon className="h-5 w-5" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-slate-900">{role.title} — Assignment</h3>
                <p className="text-sm text-slate-600 mt-0.5">{role.assignment.summary}</p>
              </div>
            </div>
            <button onClick={onClose} className="text-slate-500 hover:text-slate-700">✕</button>
          </div>

          <div className="mt-5">
            <h4 className="text-sm font-semibold text-slate-900">What to do</h4>
            <ul className="mt-2 list-disc pl-5 text-sm text-slate-700 space-y-1.5">
              {role.assignment.details.map((d, i) => (
                <li key={i}>{d}</li>
              ))}
            </ul>

            {role.assignment.resources?.length ? (
              <div className="mt-5">
                <h4 className="text-sm font-semibold text-slate-900">Resources</h4>
                <div className="mt-2 flex flex-wrap gap-2">
                  {role.assignment.resources.map((r) => (
                    <a key={r.href} href={r.href} target="_blank" rel="noreferrer" className="text-xs rounded-full bg-slate-100 border border-slate-200 px-2.5 py-1 text-slate-700 hover:bg-blue-50 hover:border-blue-200 hover:text-blue-700">
                      {r.label}
                    </a>
                  ))}
                </div>
              </div>
            ) : null}
          </div>

          <div className="mt-6 flex flex-wrap items-center justify-between gap-3">
            <a href={role.assignment.mailto} className="inline-flex items-center gap-2 rounded-full bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 text-sm font-medium">
              Submit via email <ArrowRight className="h-4 w-4" />
            </a>
            <p className="text-xs text-slate-500">Include a link to your repo and a short PDF report. File naming: lastname_role.pdf</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function JobsSection() {
  const [active, setActive] = useState(null);
  const grouped = useMemo(() => roles.reduce((acc, r) => {
    acc[r.team] = acc[r.team] || [];
    acc[r.team].push(r);
    return acc;
  }, {}), []);

  return (
    <section id="open-roles" className="relative py-16 sm:py-20">
      <div className="absolute inset-x-0 top-0 h-48 bg-gradient-to-b from-blue-50 to-transparent pointer-events-none" />
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative">
        <div className="flex items-end justify-between gap-6 mb-8">
          <div>
            <p className="text-xs uppercase tracking-widest text-blue-700/80">Open roles</p>
            <h2 className="text-2xl sm:text-3xl font-semibold text-slate-900">Join bloq</h2>
            <p className="text-slate-600 mt-2 text-sm">Every role includes a take-home assignment tailored to real work youll do here.</p>
          </div>
          <a href="mailto:careers@bloq.company" className="hidden sm:inline-flex items-center gap-2 rounded-full border border-blue-300 text-blue-700 hover:bg-blue-600 hover:text-white transition-colors px-4 py-2 text-sm font-medium">
            General application <ArrowRight className="h-4 w-4" />
          </a>
        </div>

        <div className="space-y-10">
          {Object.entries(grouped).map(([team, items]) => (
            <div key={team}>
              <h3 className="text-sm font-semibold text-slate-900 mb-4 flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-blue-600" /> {team}
              </h3>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {items.map((role) => (
                  <RoleCard key={role.id} role={role} onOpen={setActive} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      <AssignmentModal open={!!active} role={active} onClose={() => setActive(null)} />
    </section>
  );
}
