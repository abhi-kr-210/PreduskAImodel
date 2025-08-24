export const dynamic = 'force-dynamic';

export default function NotFound() {
  return (
    <div className="max-w-2xl mx-auto px-4 py-16 text-center">
      <h2 className="text-2xl font-semibold">Page not found</h2>
      <p className="mt-2 text-sm text-neutral-600 dark:text-neutral-300">The page you are looking for does not exist.</p>
    </div>
  );
}


