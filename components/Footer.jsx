import Link from "next/link";

const githubRepositoryUrl = "https://github.com/SiyuanMaCS/AtomicBench-Evaluation";

export default function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-white/70">
      <div className="mx-auto grid max-w-7xl gap-8 px-5 py-10 text-sm text-slate-600 md:grid-cols-[1.5fr_1fr_1fr] lg:px-8">
        <div>
          <div className="font-bold text-slate-950">Phys-WorldBench</div>
          <p className="mt-3 max-w-xl leading-7">
            A unified real-world benchmark for evaluating embodied world models from passive
            prediction to action-conditioned reasoning and real-world intervention.
          </p>
        </div>
        <div>
          <div className="font-semibold text-slate-900">Resources</div>
          <div className="mt-3 flex flex-col gap-2">
            <Link href="/leaderboard" className="hover:text-brand-600">Leaderboard</Link>
            <Link href="/dataset" className="hover:text-brand-600">Dataset</Link>
            <Link href="/submission" className="hover:text-brand-600">Submission</Link>
            <a href={githubRepositoryUrl} target="_blank" rel="noreferrer" className="hover:text-brand-600">Github</a>
          </div>
        </div>
        <div>
          <div className="font-semibold text-slate-900">Status</div>
          <p className="mt-3 leading-7">
            Current results are official paper results. Dataset release, evaluation scripts,
            and external submissions will be opened in a future version.
          </p>
        </div>
      </div>
    </footer>
  );
}
