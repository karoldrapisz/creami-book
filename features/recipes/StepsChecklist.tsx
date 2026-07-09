"use client";

import { useState } from "react";

type Props = {
  steps: string[];
};

export default function StepsChecklist({ steps }: Props) {
  const [done, setDone] = useState<number[]>([]);

  function toggle(index: number) {
    setDone((prev) =>
      prev.includes(index)
        ? prev.filter((i) => i !== index)
        : [...prev, index]
    );
  }

  const progress = Math.round((done.length / steps.length) * 100);

  return (
    <>
      <div className="mb-5">
        <div className="mb-2 flex justify-between text-sm">
          <span>Postęp</span>
          <span>{progress}%</span>
        </div>

        <div className="h-3 overflow-hidden rounded-full bg-zinc-200">
          <div
            className="h-full rounded-full bg-green-500 transition-all"
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>

      <div className="space-y-3">
        {steps.map((step, index) => {
          const active = done.includes(index);

          return (
            <button
              key={index}
              onClick={() => toggle(index)}
              className={`flex w-full gap-4 rounded-2xl border p-4 text-left transition ${
                active
                  ? "border-green-500 bg-green-50"
                  : "border-zinc-200 bg-white"
              }`}
            >
              <div
                className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full ${
                  active
                    ? "bg-green-500 text-white"
                    : "bg-zinc-900 text-white"
                }`}
              >
                {active ? "✓" : index + 1}
              </div>

              <p
                className={
                  active
                    ? "text-zinc-400 line-through"
                    : "text-zinc-700"
                }
              >
                {step}
              </p>
            </button>
          );
        })}
      </div>
    </>
  );
}