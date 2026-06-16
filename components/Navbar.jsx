import Link from "next/link";

const links = [
  ["Benchmark", "/benchmark"],
  ["Leaderboard", "/leaderboard"],
  ["Dataset", "/dataset"],
  ["Submission", "/submission"],
  ["Citation", "/citation"]
];

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-slate-200/80 bg-white/85 backdrop-blur-xl">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-5 py-3 lg:px-8">
        <Link href="/" className="group flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-gradient-to-br from-brand-600 to-violet-600 text-lg font-black text-white shadow-soft">
            PW
          </div>
          <div>
            <div className="text-sm font-bold tracking-tight text-slate-950">Phys-WorldBench</div>
            <div className="text-xs text-slate-500">Embodied world model benchmark</div>
          </div>
        </Link>
        <div className="hidden items-center gap-1 md:flex">
          {links.map(([label, href]) => (
            <Link
              key={href}
              href={href}
              className="rounded-full px-4 py-2 text-sm font-medium text-slate-600 transition hover:bg-slate-100 hover:text-slate-950"
            >
              {label}
            </Link>
          ))}
        </div>
      </nav>
    </header>
  );
}
