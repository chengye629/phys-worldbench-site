import SectionHeader from "@/components/SectionHeader";
import StatCard from "@/components/StatCard";

export default function DatasetPage() {
  return (
    <main className="mx-auto max-w-7xl px-5 py-14 lg:px-8">
      <SectionHeader eyebrow="Dataset" title="Dataset release plan">
        Phys-WorldBench contains real-robot trajectories with synchronized visual observations,
        robot states, end-effector poses, language instructions, and task outcome labels.
      </SectionHeader>
      <div className="grid gap-4 md:grid-cols-4">
        <StatCard value="4,500" label="Total trajectories" note="Real-robot interaction data across 50 tasks." />
        <StatCard value="3,600" label="Training trajectories" note="Successful in-domain trajectories for model adaptation." />
        <StatCard value="900" label="Evaluation trajectories" note="Successful, failed counterfactual, and OOD episodes." />
        <StatCard value="50" label="Tasks" note="20 atomic, 20 compositional, and 10 OOD tasks." />
      </div>
      <div className="mt-10 grid gap-5 md:grid-cols-3">
        {[
          ["Atomic", "20 tasks", "Each task isolates one dominant physical interaction skill for fine-grained diagnosis."],
          ["Compositional", "20 tasks", "Short- and long-horizon tasks chain multiple atomic skills into ordered sequences."],
          ["OOD", "10 tasks", "Held-out skill compositions test generalization beyond the in-domain training split."]
        ].map(([title, status, body]) => (
          <div key={title} className="rounded-[2rem] border border-slate-200 bg-white p-7 shadow-soft">
            <div className="inline-flex rounded-full bg-brand-50 px-3 py-1 text-xs font-bold text-brand-700">{status}</div>
            <h2 className="mt-5 text-xl font-black text-slate-950">{title}</h2>
            <p className="mt-3 leading-7 text-slate-600">{body}</p>
          </div>
        ))}
      </div>
      <div className="mt-10 grid gap-6 lg:grid-cols-3">
        {[
          ["Data package", "Coming soon", "RGB observations, robot states, end-effector poses, language instructions, and task outcomes."],
          ["Evaluation scripts", "Coming soon", "Metric computation for Level-1 and Level-2, with official verification for real-robot Level-3."],
          ["License", "To be announced", "Dataset license, intended use, restrictions, and citation requirements will be provided with release."]
        ].map(([title, status, body]) => (
          <div key={title} className="rounded-[2rem] border border-slate-200 bg-white p-7 shadow-soft">
            <div className="inline-flex rounded-full bg-slate-100 px-3 py-1 text-xs font-bold text-slate-600">{status}</div>
            <h2 className="mt-5 text-xl font-black text-slate-950">{title}</h2>
            <p className="mt-3 leading-7 text-slate-600">{body}</p>
          </div>
        ))}
      </div>
    </main>
  );
}
