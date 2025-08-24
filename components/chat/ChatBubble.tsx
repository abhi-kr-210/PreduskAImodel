"use client";
import { motion } from 'framer-motion';

export function ChatBubble({ role, content }: { role: 'user' | 'assistant'; content: string }) {
  const isUser = role === 'user';
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 8, scale: 0.95 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.2 }}
      className={`flex ${isUser ? 'justify-end' : 'justify-start'}`}
      role="group"
      aria-label={isUser ? 'User message' : 'Assistant message'}
    >
      <div
        className={`max-w-[85%] rounded-2xl px-4 py-3 text-sm shadow-sm ${
          isUser 
            ? 'bg-indigo-600 text-white border border-indigo-500' 
            : 'bg-white dark:bg-gray-700 text-gray-900 dark:text-white border border-gray-200 dark:border-gray-600'
        }`}
      >
        <div className="flex items-start gap-2">
          {!isUser && (
            <div className="w-6 h-6 rounded-full bg-gradient-to-br from-indigo-500 to-violet-600 flex items-center justify-center text-xs text-white font-medium mt-0.5">
              AI
            </div>
          )}
          <div className="flex-1 whitespace-pre-wrap">{content}</div>
          {isUser && (
            <div className="w-6 h-6 rounded-full bg-white/20 flex items-center justify-center text-xs text-white font-medium mt-0.5">
              👤
            </div>
          )}
        </div>
      </div>
    </motion.div>
  );
}


