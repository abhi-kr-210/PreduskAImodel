"use client";
export const dynamic = 'force-dynamic';

export default function Error({ error, reset }: { error: Error & { digest?: string }; reset: () => void }) {
  return (
    <div className="max-w-2xl mx-auto px-4 py-16 text-center">
      <h2 className="text-2xl font-semibold">Something went wrong</h2>
      <p className="mt-2 text-sm text-neutral-600 dark:text-neutral-300">{error.message}</p>
      <button className="mt-4 rounded-md border px-3 py-1.5 text-sm" onClick={reset}>Try again</button>
    </div>
  );
}


