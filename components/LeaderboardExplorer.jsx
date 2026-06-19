"use client";

import { useMemo, useState } from "react";
import { l1Results, l2Results, l3Results, skillBreakdown } from "@/data/leaderboard";

const tabs = [
  { id: "l1", label: "Level-1", subtitle: "Passive world modeling" },
  { id: "l2", label: "Level-2", subtitle: "Action-effect reasoning" },
  { id: "l3", label: "Level-3", subtitle: "World action modeling" },
  { id: "skill", label: "Skill Breakdown", subtitle: "Interaction categories" }
];

const columns = {
  l1: [
    ["rank", "Rank"],
    ["model", "Model"],
    ["type", "Type"],
    ["access", "Access"],
    ["background", "Bg."],
    ["subject", "Subject"],
    ["musiq", "MUSIQ"],
    ["jedi", "JEDi"],
    ["robot", "Robot"],
    ["object", "Object"],
    ["interaction", "Inter."],
    ["alignment", "Align."],
    ["score", "L1-PWS"]
  ],
  l2: [
    ["rank", "Rank"],
    ["model", "Model"],
    ["type", "Type"],
    ["actionType", "Action"],
    ["psnr", "PSNR"],
    ["vjepa", "V-JEPA"],
    ["ntdw", "NTDW"],
    ["robot", "Robot"],
    ["object", "Object"],
    ["score", "L2-PWS"]
  ],
  l3: [
    ["rank", "Rank"],
    ["model", "Model"],
    ["type", "Type"],
    ["atomicSr", "Atomic SR"],
    ["atomicProgress", "Atomic Prog."],
    ["compSr", "Comp. SR"],
    ["compProgress", "Comp. Prog."],
    ["oodSr", "OOD SR"],
    ["oodProgress", "OOD Prog."],
    ["allSr", "All SR"],
    ["allProgress", "All Prog."]
  ],
  skill: [
    ["skill", "Skill"],
    ["category", "Category"],
    ["l1", "Avg L1"],
    ["l2", "Avg L2"],
    ["l3", "Avg L3 Success"]
  ]
};

const datasets = {
  l1: l1Results,
  l2: l2Results,
  l3: l3Results,
  skill: skillBreakdown
};

function formatValue(key, value) {
  if (typeof value !== "number") return value;
  if (key.toLowerCase().includes("sr")) return `${value.toFixed(1)}%`;
  if (key.toLowerCase().includes("progress")) return value.toFixed(1);
  if (key === "rank") return value;
  return value.toFixed(4);
}

function typePill(value) {
  const colors = {
    WM: "bg-blue-50 text-blue-700 ring-blue-200",
    AWM: "bg-violet-50 text-violet-700 ring-violet-200",
    VLA: "bg-emerald-50 text-emerald-700 ring-emerald-200",
    WAM: "bg-amber-50 text-amber-700 ring-amber-200"
  };
  return colors[value] || "bg-slate-50 text-slate-700 ring-slate-200";
}

export default function LeaderboardExplorer() {
  const [activeTab, setActiveTab] = useState("l1");
  const [query, setQuery] = useState("");
  const [sortKey, setSortKey] = useState("score");
  const [sortDir, setSortDir] = useState("desc");

  const rows = useMemo(() => {
    const base = datasets[activeTab] || [];
    const filtered = base.filter((row) => {
      const text = Object.values(row).join(" ").toLowerCase();
      return text.includes(query.trim().toLowerCase());
    });
    return [...filtered].sort((a, b) => {
      const av = a[sortKey];
      const bv = b[sortKey];
      if (av === undefined || bv === undefined) return 0;
      if (typeof av === "number" && typeof bv === "number") {
        return sortDir === "asc" ? av - bv : bv - av;
      }
      return sortDir === "asc"
        ? String(av).localeCompare(String(bv))
        : String(bv).localeCompare(String(av));
    });
  }, [activeTab, query, sortKey, sortDir]);

  function onSort(nextKey) {
    if (nextKey === sortKey) {
      setSortDir((old) => (old === "asc" ? "desc" : "asc"));
    } else {
      setSortKey(nextKey);
      setSortDir(nextKey === "rank" || nextKey === "skill" || nextKey === "model" ? "asc" : "desc");
    }
  }

  function switchTab(tab) {
    setActiveTab(tab);
    setSortKey(tab === "skill" ? "l3" : tab === "l3" ? "allSr" : "score");
    setSortDir("desc");
  }

  return (
    <div className="rounded-[2rem] border border-slate-200 bg-white p-4 shadow-soft md:p-6">
      <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
        <div className="grid gap-2 sm:grid-cols-2 lg:grid-cols-4">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => switchTab(tab.id)}
              className={`rounded-2xl border px-4 py-3 text-left transition ${
                activeTab === tab.id
                  ? "border-brand-200 bg-brand-50 text-brand-700"
                  : "border-slate-200 bg-white text-slate-600 hover:bg-slate-50"
              }`}
            >
              <div className="text-sm font-bold">{tab.label}</div>
              <div className="mt-1 text-xs opacity-75">{tab.subtitle}</div>
            </button>
          ))}
        </div>
        <div className="w-full lg:max-w-xs">
          <label className="text-xs font-bold uppercase tracking-wider text-slate-500">Search</label>
          <input
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            placeholder="model, metric, skill..."
            className="mt-2 w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm outline-none transition focus:border-brand-500 focus:ring-4 focus:ring-brand-100"
          />
        </div>
      </div>

      <div className="table-scroll mt-6 overflow-x-auto rounded-2xl border border-slate-200">
        <table className="min-w-full divide-y divide-slate-200 text-sm">
          <thead className="bg-slate-50">
            <tr>
              {columns[activeTab].map(([key, label]) => (
                <th
                  key={key}
                  onClick={() => onSort(key)}
                  className="cursor-pointer whitespace-nowrap px-4 py-3 text-left text-xs font-black uppercase tracking-wider text-slate-500 hover:text-brand-700"
                >
                  {label}
                  {sortKey === key ? <span className="ml-1">{sortDir === "asc" ? "up" : "down"}</span> : null}
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100 bg-white">
            {rows.map((row, index) => (
              <tr key={`${row.model || row.skill}-${index}`} className="hover:bg-slate-50/80">
                {columns[activeTab].map(([key]) => {
                  const value = row[key];
                  const highlight = key === "score" || key === "allSr" || key === "l3";
                  return (
                    <td key={key} className="whitespace-nowrap px-4 py-3 text-slate-700">
                      {key === "type" ? (
                        <span className={`inline-flex rounded-full px-2.5 py-1 text-xs font-bold ring-1 ${typePill(value)}`}>
                          {value}
                        </span>
                      ) : key === "model" || key === "skill" ? (
                        <span className="font-semibold text-slate-950">{value}</span>
                      ) : (
                        <span className={highlight ? "font-black text-slate-950" : ""}>{formatValue(key, value)}</span>
                      )}
                    </td>
                  );
                })}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <p className="mt-4 text-xs leading-6 text-slate-500">
        Current entries report official paper results. Dataset release and evaluation scripts
        will be provided in a future version.
      </p>
    </div>
  );
}
