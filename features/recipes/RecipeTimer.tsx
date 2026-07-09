"use client";

import { useEffect, useState } from "react";

type Props = {
  initialMinutes?: number;
};

export default function RecipeTimer({
  initialMinutes = 5,
}: Props) {
  const [seconds, setSeconds] = useState(initialMinutes * 60);
  const [running, setRunning] = useState(false);

  useEffect(() => {
    if (!running) return;

    if (seconds <= 0) {
      setRunning(false);
      return;
    }

    const timer = setInterval(() => {
      setSeconds((prev) => prev - 1);
    }, 1000);

    return () => clearInterval(timer);
  }, [running, seconds]);

  const minutes = Math.floor(seconds / 60);
  const secs = seconds % 60;

  return (
    <div className="rounded-[2rem] border bg-white p-6 shadow-sm">
      <h2 className="text-xl font-bold">
        ⏱️ Timer
      </h2>

      <div className="mt-6 text-center text-5xl font-black tabular-nums">
        {String(minutes).padStart(2, "0")}:
        {String(secs).padStart(2, "0")}
      </div>

      <div className="mt-6 flex gap-3">
        <button
          onClick={() => setRunning(true)}
          className="flex-1 rounded-2xl bg-zinc-900 py-3 font-semibold text-white"
        >
          Start
        </button>

        <button
          onClick={() => setRunning(false)}
          className="flex-1 rounded-2xl border py-3 font-semibold"
        >
          Stop
        </button>

        <button
          onClick={() => {
            setRunning(false);
            setSeconds(initialMinutes * 60);
          }}
          className="flex-1 rounded-2xl border py-3 font-semibold"
        >
          Reset
        </button>
      </div>
    </div>
  );
}