import SectionHeader from "@/components/SectionHeader";

const steps = [
  ["Track selection", "Choose Level-1, Level-2, or Level-3 according to the model interface."],
  ["Prediction format", "Prepare generated videos, action-conditioned rollouts, or action predictions following the official schema."],
  ["Evaluation", "Run public offline scripts where available. Level-3 real-robot rollout requires official verification."],
  ["Review", "Submit metadata and results for manual validation before leaderboard update."]
];

export default function SubmissionPage() {
  return (
    <main className="mx-auto max-w-5xl px-5 py-14 lg:px-8">
      <SectionHeader eyebrow="Submission" title="Public submission is not open yet">
        This page is intentionally conservative because the dataset is not public. Keep this wording until you release data and evaluation scripts.
      </SectionHeader>
      <div className="rounded-[2rem] border border-rose-200 bg-rose-50 p-7 text-rose-950 shadow-soft">
        <h2 className="text-xl font-black">Current status</h2>
        <p className="mt-3 leading-8">
          Public external submission is currently not open. The current leaderboard reports official paper results. Dataset release, evaluation scripts, and external submission instructions will be provided in a future version.
        </p>
      </div>
      <div className="mt-8 grid gap-4 md:grid-cols-2">
        {steps.map(([title, body], index) => (
          <div key={title} className="rounded-3xl border border-slate-200 bg-white p-6 shadow-soft">
            <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-brand-50 font-black text-brand-700">{index + 1}</div>
            <h3 className="mt-4 font-black text-slate-950">{title}</h3>
            <p className="mt-2 text-sm leading-7 text-slate-600">{body}</p>
          </div>
        ))}
      </div>
    </main>
  );
}
