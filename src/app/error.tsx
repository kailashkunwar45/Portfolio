"use client";

export default function ErrorPage({ reset }: { reset: () => void }) {
  return (
    <div className="grid min-h-screen place-items-center bg-[#05070f] p-6 text-zinc-100">
      <div className="rounded-2xl border border-white/10 bg-white/5 p-6 text-center backdrop-blur">
        <h2 className="text-2xl font-semibold">Something went wrong</h2>
        <p className="mt-2 text-zinc-300">Try reloading the portfolio view.</p>
        <button type="button" onClick={reset} className="mt-4 rounded-lg bg-cyan-300/20 px-4 py-2">
          Retry
        </button>
      </div>
    </div>
  );
}
