"use client";
import { useTheme } from '@/components/providers/ThemeProvider';
import { FaMoon, FaSun } from 'react-icons/fa';

export function ThemeToggle() {
  const { theme, toggleTheme, mounted } = useTheme();

  if (!mounted) {
    return (
      <div className="w-20 h-8 bg-gray-200 dark:bg-gray-700 rounded animate-pulse" />
    );
  }

  const isDark = theme === 'dark';

  return (
    <button
      className=" rounded-md border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 hover:bg-gray-50
       dark:hover:bg-gray-700 px-2 sm:px-3 py-1.5 text-sm font-medium text-gray-700
        dark:text-gray-200 transition-colors duration-200 max-[500px]:border-transparent
         max-[500px]:bg-transparent max-[500px]:hover:bg-transparent flex justify-center items-center"
      onClick={toggleTheme}
      aria-label={`Switch to ${isDark ? 'light' : 'dark'} mode`}
      title={`Switch to ${isDark ? 'light' : 'dark'} mode`}
      type="button"
    >
      <span className="inline-flex items-center gap-2">
       
        {isDark ? (
          <FaSun className="w-4 h-4" />
        ) : (
          <FaMoon className="w-4 h-4" />
        )}
        {/* <span className="max-[500px]:hidden">{isDark ? 'Light mode' : 'Dark mode'}</span> */}
      </span>
    </button>
  );
}


