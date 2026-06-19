import Link from "next/link";
import Image from "next/image";
import SectionHeader from "@/components/SectionHeader";
import StatCard from "@/components/StatCard";
import LeaderboardExplorer from "@/components/LeaderboardExplorer";

const githubRepositoryUrl = "https://github.com/SiyuanMaCS/AtomicBench-Evaluation";

const contributions = [
  {
    title: "Unified three-level protocol",
    body: "The same real-robot task foundation is used to evaluate passive prediction, action-conditioned reasoning, and executable action generation."
  },
  {
    title: "Counterfactual action-effect probes",
    body: "Level-2 compares ground-truth and deliberately invalid actions from matched observations to directly test causal intervention understanding."
  },
  {
    title: "Cross-level failure diagnosis",
    body: "The benchmark separates upstream modeling failures from downstream execution bottlenecks across compositional, OOD, deformable, and tool-mediated skills."
  }
];

const cards = [
  {
    title: "Level-1: Passive World Modeling",
    body: "Predict future observations from the current observation and language goal without explicit action inputs.",
    tag: "World Models"
  },
  {
    title: "Level-2: Action-Effect Causal Reasoning",
    body: "Predict action-conditioned outcomes under both ground-truth and counterfactual action sequences.",
    tag: "Action-conditioned WMs"
  },
  {
    title: "Level-3: World Action Modeling",
    body: "Generate executable actions from observations and instructions, evaluated by real-robot rollouts.",
    tag: "VLA / WAM"
  }
];

export default function HomePage() {
  return (
    <main>
      <section className="mx-auto max-w-7xl px-5 pb-14 pt-16 lg:px-8 lg:pt-24">
        <div className="mx-auto flex max-w-6xl flex-col items-center text-center">
          {/* Logo */}
          <Image
            src="/figures/phys.png"
            width={160}
            height={80}
            alt="Phys-WorldBench logo"
            className="h-auto w-40 md:w-52 lg:w-60"
            priority
          />

          {/* Title */}
          <h1
            className="mt-7 whitespace-nowrap font-black tracking-tight leading-none"
            style={{ fontSize: "clamp(3rem, 7vw, 6.4rem)" }}
          >
            <span className="bg-gradient-to-r from-blue-900 via-cyan-500 to-blue-700 bg-clip-text text-transparent">
              Phys-World
            </span>
            <span className="text-slate-950">Bench</span>
          </h1>

          {/* Authors: anonymous stage; replace after de-anonymization */}
          <p className="mt-5 text-base font-semibold leading-7 text-slate-700">
            Anonymous Authors
          </p>

          {/* Subtitle */}
          <p className="mx-auto mt-5 max-w-4xl text-xl leading-9 text-slate-600">
            A unified benchmark for evaluating embodied world models from passive prediction to active intervention.
          </p>

          {/* Buttons */}
          <div className="mt-9 flex flex-wrap justify-center gap-3">
            <a
              className="rounded-full bg-slate-950 px-6 py-3 text-sm font-bold text-white shadow-soft transition hover:-translate-y-0.5 hover:bg-brand-700"
              href="#"
            >
              Paper Coming Soon
            </a>

            <Link
              className="rounded-full border border-slate-200 bg-white px-6 py-3 text-sm font-bold text-slate-800 shadow-sm transition hover:-translate-y-0.5 hover:border-brand-200 hover:text-brand-700"
              href="/leaderboard"
            >
              View Leaderboard
            </Link>

            <Link
              className="rounded-full border border-slate-200 bg-white px-6 py-3 text-sm font-bold text-slate-800 shadow-sm transition hover:-translate-y-0.5 hover:border-brand-200 hover:text-brand-700"
              href="/dataset"
            >
              Dataset Coming Soon
            </Link>

            <a
              className="rounded-full border border-slate-200 bg-white px-6 py-3 text-sm font-bold text-slate-800 shadow-sm transition hover:-translate-y-0.5 hover:border-brand-200 hover:text-brand-700"
              href={githubRepositoryUrl}
              target="_blank"
              rel="noreferrer"
            >
              Github
            </a>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-10 lg:px-8">
        <div className="grid gap-4 md:grid-cols-4">
          <StatCard
            value="4,500"
            label="Real-robot trajectories"
            note="Around 30 hours of physical interaction data."
          />
          <StatCard
            value="50"
            label="Evaluation tasks"
            note="20 atomic, 20 compositional, and 10 OOD tasks."
          />
          <StatCard
            value="3"
            label="Evaluation levels"
            note="Passive prediction, causal reasoning, action generation."
          />
          <StatCard
            value="15"
            label="Metrics"
            note="Visual quality, dynamics, physics adherence, rollout success."
          />
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-16 lg:px-8">
        <SectionHeader
          eyebrow="Key Contributions"
          title="Diagnosing physical interaction, not just visual plausibility"
        >
          Phys-WorldBench distinguishes visual prediction, causal action effects, and physical
          execution so failures are not collapsed into a single task-success number.
        </SectionHeader>

        <div className="grid gap-5 md:grid-cols-3">
          {contributions.map((item, index) => (
            <div
              key={item.title}
              className="rounded-3xl border border-slate-200 bg-white p-7 shadow-soft"
            >
              <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-slate-950 text-sm font-black text-white">
                {index + 1}
              </div>
              <h3 className="mt-5 text-xl font-black text-slate-950">
                {item.title}
              </h3>
              <p className="mt-3 leading-7 text-slate-600">
                {item.body}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-16 lg:px-8">
        <SectionHeader
          eyebrow="Protocol"
          title="One task foundation, three capability interfaces"
        >
          Phys-WorldBench evaluates whether embodied world models can predict physical futures,
          reason about interventions, and generate executable actions.
        </SectionHeader>

        <div className="grid gap-5 md:grid-cols-3">
          {cards.map((card) => (
            <div
              key={card.title}
              className="rounded-[2rem] border border-slate-200 bg-white p-7 shadow-soft"
            >
              <div className="inline-flex rounded-full bg-brand-50 px-3 py-1 text-xs font-bold text-brand-700">
                {card.tag}
              </div>
              <h3 className="mt-5 text-xl font-black text-slate-950">
                {card.title}
              </h3>
              <p className="mt-3 leading-7 text-slate-600">
                {card.body}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-16 lg:px-8">
        <SectionHeader
          eyebrow="Official Results"
          title="Interactive leaderboard preview"
        >
          The current leaderboard reports official paper results across passive prediction,
          action-conditioned reasoning, and real-world action generation.
        </SectionHeader>

        <LeaderboardExplorer />
      </section>
    </main>
  );
}
