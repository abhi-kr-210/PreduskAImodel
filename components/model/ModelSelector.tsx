"use client";
import { useEffect, useId, useState } from 'react';

type Model = { id: string; name: string; provider: string };

type Props = {
  models: Model[];
  loading?: boolean;
  error?: string | null;
};

export function ModelSelector({ models, loading, error }: Props) {
  const selectId = useId();
  const [selected, setSelected] = useState<string | undefined>(() => models?.[0]?.id);
  
  useEffect(() => {
    if (!selected && (models?.length ?? 0) > 0) setSelected(models[0]!.id);
  }, [models, selected]);

  if (loading) {
    return (
      <select className="rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 px-2 sm:px-3 py-2 text-xs sm:text-sm text-gray-400 dark:text-gray-500 w-32 sm:w-40 mx-auto block disabled:opacity-50" disabled title="Model selector">
        <option>Loading...</option>
      </select>
    );
  }
  if (error) {
    return (
      <select className="rounded-lg border border-red-400 bg-red-50 dark:bg-red-900/20 px-2 sm:px-3 py-2 text-xs sm:text-sm text-red-600 dark:text-red-400 w-32 sm:w-40 mx-auto block disabled:opacity-50" disabled title="Model selector">
        <option>Error</option>
      </select>
    );
  }
  return (
    <select
      id={selectId}
      aria-label="Model selector"
      title="Model selector"
      className="rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 px-2 sm:px-3 py-2 text-xs sm:text-sm text-gray-900 dark:text-white w-32 sm:w-40 mx-auto block focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 dark:focus:ring-indigo-400 dark:focus:border-indigo-400 transition-colors duration-200 appearance-none cursor-pointer shadow-sm hover:shadow-md"
      value={selected}
      onChange={(e) => setSelected(e.target.value)}
    >
      {models.map((m) => (
        <option key={m.id} value={m.id} className="bg-white dark:bg-gray-700 text-gray-900 dark:text-white">
          {m.name} · {m.provider}
        </option>
      ))}
    </select>
  );
}


