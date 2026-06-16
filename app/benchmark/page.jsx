import Image from "next/image";
import SectionHeader from "@/components/SectionHeader";

const categories = [
  ["Rigid-body Pose Transformation", "Pick-place and rotate tasks with approximately rigid objects."],
  ["Constrained Motion", "Push, pull, slide, insert, plug, stack, press, and hinge manipulation."],
  ["Deformable / Topological", "Fold, straighten, braid, tear, squeeze, and other non-rigid changes."],
  ["Tool-mediated Dynamics", "Scoop, stir, cut, wipe, pour, and indirect manipulation through tools."]
];

const differentiators = [
  ["Real-world data", "Collected from real-robot tabletop manipulation rather than simulator-only rollouts."],
  ["Interaction-level design", "Instructions and tasks are grounded in physical interaction mechanisms, not only semantic task categories."],
  ["OOD generalization", "Held-out compositions test whether models can transfer across unseen combinations of atomic skills."],
  ["Direct Level-2 causal probes", "Ground-truth and counterfactual actions are evaluated from matched observations to isolate action-effect reasoning."],
  ["Level-3 real rollouts", "Action-generating models are evaluated through physical execution rather than offline prediction alone."]
];

export default function BenchmarkPage() {
  return (
    <main className="mx-auto max-w-7xl px-5 py-14 lg:px-8">
      <SectionHeader eyebrow="Benchmark" title="Evaluation framework">
      </SectionHeader>

      <div className="grid gap-6 lg:grid-cols-2">
        <div className="rounded-[2rem] border border-slate-200 bg-white p-5 shadow-soft">
          <Image src="/figures/three-level.png" width={1200} height={800} alt="Three-level evaluation protocol" className="w-full rounded-3xl" />
          <h2 className="mt-5 text-xl font-black text-slate-950">Three-level evaluation protocol</h2>
          <p className="mt-3 leading-7 text-slate-600">
            Level-1 measures instruction-conditioned future prediction. Level-2 introduces explicit action sequences, including ground-truth and counterfactual interventions. Level-3 tests whether models can generate executable actions for real-world manipulation.
          </p>
        </div>
        <div className="rounded-[2rem] border border-slate-200 bg-white p-5 shadow-soft">
          <Image src="/figures/atomic-space.png" width={1200} height={800} alt="Atomic physical interaction space" className="w-full rounded-3xl" />
          <h2 className="mt-5 text-xl font-black text-slate-950">Atomic physical interaction space</h2>
          <p className="mt-3 leading-7 text-slate-600">
            Tasks are organized around physical interaction mechanisms rather than surface-level task semantics, making the benchmark more diagnostic for embodied world model failures.
          </p>
        </div>
      </div>

      <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
        {categories.map(([title, body]) => (
          <div key={title} className="rounded-3xl border border-slate-200 bg-white p-6 shadow-soft">
            <h3 className="font-black text-slate-950">{title}</h3>
            <p className="mt-3 text-sm leading-7 text-slate-600">{body}</p>
          </div>
        ))}
      </div>

      <section className="mt-16">
        <SectionHeader
          eyebrow="Benchmark Design"
          title="What makes Phys-WorldBench different"
        >
          The benchmark connects real-world interaction data with a capability protocol that can
          separate passive visual prediction, causal dynamics, and closed-loop execution.
        </SectionHeader>

        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-5">
          {differentiators.map(([title, body]) => (
            <div key={title} className="rounded-3xl border border-slate-200 bg-white p-5 shadow-soft">
              <h3 className="text-sm font-black text-slate-950">{title}</h3>
              <p className="mt-3 text-sm leading-6 text-slate-600">{body}</p>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
