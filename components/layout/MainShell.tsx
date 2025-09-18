"use client";
import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import { useTheme } from '@/components/providers/ThemeProvider';
import { ModelSelector } from '@/components/model/ModelSelector';
import { PromptEditor } from '@/components/prompt/PromptEditor';
import { ParametersPanel } from '@/components/params/ParametersPanel';
import { ChatArea } from '@/components/chat/ChatArea';
import { ThemeToggle } from '@/components/ui/ThemeToggle';
import { FaSlidersH } from 'react-icons/fa';

type Model = { id: string; name: string; provider: string };
type Template = { id: string; name: string; prompt: string };

export function MainShell() {
  const { mounted } = useTheme();
  const [models, setModels] = useState<Model[]>([]);
  const [templates, setTemplates] = useState<Template[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [sidebarOpen, setSidebarOpen] = useState(false);

  useEffect(() => {
    if (!mounted) return;
    let cancelled = false;
    async function load() {
      setLoading(true);
      setError(null);
      try {
        const [mRes, tRes] = await Promise.all([
          fetch('/api/models'),
          fetch('/api/templates'),
        ]);
        if (!mRes.ok || !tRes.ok) throw new Error('Failed to fetch mock data');
        const [m, t] = await Promise.all([mRes.json(), tRes.json()]);
        if (!cancelled) {
          setModels(m.models ?? []);
          setTemplates(t.templates ?? []);
        }
      } catch (e: any) {
        if (!cancelled) setError(e?.message ?? 'Unknown error');
      } finally {
        if (!cancelled) setLoading(false);
      }
    }
    load();
    return () => {
      cancelled = true;
    };
  }, [mounted]);

  if (!mounted) {
    return (
      <div className="min-h-screen bg-white dark:bg-gray-900">
        <header className="border-b border-gray-200 dark:border-gray-700 bg-white/70 dark:bg-gray-900/70 backdrop-blur supports-[backdrop-filter]:bg-white/50 dark:supports-[backdrop-filter]:bg-gray-900/40 sticky top-0 z-10">
          <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
            <div className="flex items-center gap-3 justify-center">
              <Link href="/" className="flex items-center gap-3 hover:opacity-80 transition-opacity 
              ml-[51px]
               " >
                <Image src="/logo.png" alt="Logo" width={32} height={32}  />
                <h1 className="text-lg font-semibold text-gray-900 dark:text-white">AIverse Hub</h1>
              </Link>
            </div>
            <div className="flex items-center gap-4">
              <Link 
                href="/" 
                className="text-sm text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors"
              >
                Home
              </Link>
              <div className="w-20 h-8 bg-gray-200 dark:bg-gray-700 rounded animate-pulse" />
            </div>
          </div>
        </header>
        <main className="max-w-7xl mx-auto w-full px-4 py-6">
          <div className="animate-pulse space-y-4">
            <div className="h-32 bg-gray-200 dark:bg-gray-700 rounded" />
            <div className="h-32 bg-gray-200 dark:bg-gray-700 rounded" />
          </div>
        </main>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">

      <header className="border-b border-gray-200 dark:border-gray-700 bg-white/70 dark:bg-gray-900/70 backdrop-blur supports-[backdrop-filter]:bg-white/50 dark:supports-[backdrop-filter]:bg-gray-900/40 sticky top-0 z-20">
        <div className="max-w-7xl mx-auto px-4 py-3 sm:py-4 flex flex-col sm:flex-row items-center justify-between gap-3 sm:gap-0">

          <div className="flex items-center gap-3">
            <Link href="/" className="flex items-center gap-3 hover:opacity-80 transition-opacity
            ml-[51px]">
              <Image src="/logo.png" alt="Logo" width={28} height={28} className="sm:w-8 sm:h-8" />
              <h1 className="text-base sm:text-lg font-semibold text-gray-900 dark:text-white">Predusk AI</h1>
            </Link>
          </div>
          

          <div className="flex-1 flex justify-center max-w-xs sm:max-w-md mx-4 sm:mx-8 order-3 sm:order-2 w-full">
            <div className="flex items-center justify-center gap-2 max-[500px]:gap-3 w-full max-w-md">
              <ModelSelector models={models} loading={loading} error={error} />

              <div className="hidden max-[500px]:block">
                <ThemeToggle />
              </div>
            </div>
          </div>
          

          <div className="flex items-center gap-3 sm:gap-4 order-2 sm:order-3">
            <Link 
              href="/" 
              className="text-sm text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors hidden sm:block"
            >
              Home
            </Link>
           
            <div className="max-[500px]:hidden">
              <ThemeToggle />
            </div>
          </div>
        </div>
      </header>


      <div className="flex h-[calc(100vh-80px)] relative">

 



        <aside
          className={`fixed top-0 left-0 z-50 h-full border-r border-gray-200 dark:border-gray-700 shadow-xl transition-all duration-300 ease-in-out lg:static lg:translate-x-0 lg:shadow-none ${
            sidebarOpen ? 'translate-x-0 w-80' : '-translate-x-full w-0 lg:w-16'
          } lg:min-w-[64px] lg:max-w-[320px] flex-shrink-0`}
        >
          <ParametersPanel />
        </aside>

        <main className="flex-1 flex flex-col min-w-0 bg-gray-50 dark:bg-gray-900 transition-all duration-300 ease-in-out w-full lg:w-auto lg:ml-0">
          <ChatArea />
        </main>
      </div>
    </div>
  );
}


