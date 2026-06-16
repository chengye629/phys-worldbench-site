import SectionHeader from "@/components/SectionHeader";

const bibtex = `@inproceedings{physworldbench2026,
  title     = {Phys-WorldBench: A Unified Benchmark for Evaluating Embodied World Models from Passive Prediction to Active Intervention},
  author    = {Anonymous Authors},
  booktitle = {Submitted to NeurIPS},
  year      = {2026}
}`;

export default function CitationPage() {
  return (
    <main className="mx-auto max-w-5xl px-5 py-14 lg:px-8">
      <SectionHeader eyebrow="Citation" title="Cite Phys-WorldBench">
        Replace the placeholder BibTeX after the paper is public or accepted.
      </SectionHeader>
      <pre className="overflow-x-auto rounded-[2rem] border border-slate-200 bg-slate-950 p-6 text-sm leading-7 text-slate-100 shadow-soft">
        <code>{bibtex}</code>
      </pre>
    </main>
  );
}
