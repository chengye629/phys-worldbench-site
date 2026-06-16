export default function StatCard({ value, label, note }) {
  return (
    <div className="rounded-3xl border border-slate-200 bg-white/80 p-6 shadow-soft">
      <div className="text-3xl font-black text-slate-950">{value}</div>
      <div className="mt-2 font-semibold text-slate-700">{label}</div>
      {note ? <div className="mt-2 text-sm leading-6 text-slate-500">{note}</div> : null}
    </div>
  );
}
