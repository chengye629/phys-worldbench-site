export default function SectionHeader({ eyebrow, title, children }) {
  return (
    <div className="mx-auto mb-10 max-w-7xl text-center">
      {eyebrow ? (
        <div className="mb-3 text-xs font-bold uppercase tracking-[0.24em] text-brand-600">
          {eyebrow}
        </div>
      ) : null}
      <h2 className="text-3xl font-black tracking-tight text-slate-950 md:text-4xl">{title}</h2>
      {children ? <p className="mt-4 text-base leading-8 text-slate-600">{children}</p> : null}
    </div>
  );
}
