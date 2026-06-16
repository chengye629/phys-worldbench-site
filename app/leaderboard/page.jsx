import LeaderboardExplorer from "@/components/LeaderboardExplorer";
import SectionHeader from "@/components/SectionHeader";
import Image from "next/image";

const diagnosticFindings = [
  {
    title: "Passive prediction only partially transfers",
    body: "Level-1 and Level-2 correlations weaken under counterfactual actions, showing that action-effect understanding needs explicit interventional evaluation."
  },
  {
    title: "Prediction scores can hide execution bottlenecks",
    body: "Tool-mediated and deformable tasks can receive reasonable prediction scores while still failing in real-world Level-3 rollouts."
  },
  {
    title: "Compositional and OOD tasks remain hard",
    body: "Current policy models are more reliable on isolated atomic skills than on chained interactions or held-out skill compositions."
  }
];

export default function LeaderboardPage() {
  return (
    <main className="mx-auto max-w-7xl px-5 py-14 lg:px-8">
      <SectionHeader eyebrow="Leaderboard" title="Official Phys-WorldBench results">
        Level-1, Level-2, and Level-3 are shown as separate tracks because they evaluate different model interfaces. The current version is an official-results leaderboard, not an open submission system.
      </SectionHeader>
      <section className="mx-auto max-w-5xl px-0 py-8">
        <div className="rounded-3xl border border-slate-200 bg-white p-5 shadow-soft">
          <Image
            src="/figures/l1-radar.png"
            width={900}
            height={600}
            alt="Level-1 radar visualization"
            className="mx-auto w-full max-w-3xl rounded-2xl"
          />
          <h2 className="mt-5 text-2xl font-black text-slate-950">
            Level-1 Model Profiles
          </h2>
          <p className="mt-3 leading-7 text-slate-600">
            Radar visualization of passive world modeling performance across generation consistency,
            visual quality, physics adherence, and instruction following.
          </p>
        </div>
      </section>
      <LeaderboardExplorer />
      <section className="mt-10">
        <SectionHeader
          eyebrow="Cross-Level Diagnosis"
          title="Where prediction stops being enough"
        >
          Phys-WorldBench reports separate levels so failures can be attributed to visual prediction,
          action-conditioned dynamics, or real-world execution.
        </SectionHeader>

        <div className="grid gap-5 md:grid-cols-3">
          {diagnosticFindings.map((item) => (
            <div key={item.title} className="rounded-3xl border border-slate-200 bg-white p-6 shadow-soft">
              <h3 className="text-lg font-black text-slate-950">{item.title}</h3>
              <p className="mt-3 text-sm leading-7 text-slate-600">{item.body}</p>
            </div>
          ))}
        </div>
      </section>
      <div className="mt-8 rounded-3xl border border-amber-200 bg-amber-50 p-6 text-sm leading-7 text-amber-900">
        <strong>Release note:</strong> Public submissions are disabled until the dataset, evaluation scripts, and submission rules are released. Level-3 results should be treated as official verified real-robot rollout results rather than community self-reported scores.
      </div>
    </main>
  );
}
