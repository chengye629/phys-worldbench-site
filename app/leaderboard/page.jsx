import LeaderboardExplorer from "@/components/LeaderboardExplorer";
import SectionHeader from "@/components/SectionHeader";
import Image from "next/image";

const diagnosticFindings = [
  {
    title: "Backbone strength can transfer within a family",
    body: "The new analysis shows stronger passive world modeling can improve action-conditioned dynamics and downstream policies within matched model families."
  },
  {
    title: "Counterfactual actions weaken correlations",
    body: "Level-1 to Level-2 transfer becomes weaker under counterfactual actions, so action-effect reasoning still needs direct interventional probes."
  },
  {
    title: "Execution bottlenecks survive prediction",
    body: "Deformation and tool-mediated skills such as pour, scoop, and squeeze can retain non-trivial prediction scores while collapsing in real-world execution."
  }
];

export default function LeaderboardPage() {
  return (
    <main className="mx-auto max-w-7xl px-5 py-14 lg:px-8">
      <SectionHeader eyebrow="Leaderboard" title="Official Phys-WorldBench results">
        Level-1, Level-2, and Level-3 are shown as separate tracks because they evaluate different model interfaces.
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
    </main>
  );
}
