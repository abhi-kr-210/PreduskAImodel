"use client";
import { useId, useState } from 'react';
import { Slider } from '@/components/ui/Slider';
import { FaSlidersH, FaThermometerHalf, FaHashtag, FaChartLine, FaBars } from 'react-icons/fa';

export function ParametersPanel() {
  const tempId = useId();
  const maxId = useId();
  const topPId = useId();
  const [temperature, setTemperature] = useState(0.7);
  const [maxTokens, setMaxTokens] = useState(512);
  const [topP, setTopP] = useState(1);
  const [expanded, setExpanded] = useState(false);

  return (
    <div className="h-full flex flex-col bg-white dark:bg-gray-800 border-r border-gray-200 dark:border-gray-700 sidebar-shadow">
      <div className="flex-shrink-0 p-4 border-1 border-gray-200 dark:border-gray-700 
       dark:from-gray-800 dark:to-gray-900  ">
        <div className="flex items-center justify-center w-[36px]">
          <button
            className="group flex items-center justify-center size-10 rounded-md bg-slate-500 dark:bg-slate-600 hover:bg-slate-700 text-white transition-all duration-500 ease-in-out
              shadow-blue-400 dark:focus:ring-offset-gray-800 shadow-sm hover:shadow-sm hover:shadow-blue-400 hover:scale-105 interactive-element
                dark:def:bg-transparent dark:sm:bg-transparent  md:bg-slate-600"
               
            onClick={() => setExpanded((v) => !v)}
            aria-label={expanded ? 'Collapse sidebar' : 'Expand sidebar'}
            title={expanded ? 'Collapse sidebar' : 'Expand sidebar'}
          >
            <FaBars className="size-5 transition-transform duration-300 group-hover:scale-110" />
          </button>
        </div>
      </div>
      <div className={`flex-1 overflow-hidden dark:bg-gray-800 bg-gray-300 transition-all duration-300 ease-in-out ${
        expanded ? 'w-80 opacity-100' : 'w-16 opacity-0 lg:opacity-100'
      }`}>
        {expanded ? (
          <div className="p-4 space-y-4">
            <div className="space-y-3 p-4 bg-gradient-to-br from-white to-gray-50 dark:from-gray-800 dark:to-gray-900 border border-gray-200 dark:border-gray-600 rounded-xl enhanced-card">
              <div className="flex items-center justify-between">
                <label htmlFor={tempId} className="text-sm font-medium text-gray-700 dark:text-gray-300 flex items-center gap-2">
                  <div className="w-8 h-8 bg-red-100 dark:bg-red-900/30 rounded-lg flex items-center justify-center">
                    <FaThermometerHalf className="text-red-500" size={14} />
                  </div>
                  Temperature
                </label>
                <span className="text-sm font-mono text-red-600 dark:text-red-400 bg-red-50 dark:bg-red-900/20 px-3 py-1.5 rounded-lg  font-semibold border border-red-200 dark:border-red-800">
                  {temperature.toFixed(2)}
                </span>
              </div>
              <Slider
                label={`Temperature: ${temperature.toFixed(2)}`}
                min={0}
                max={1}
                step={0.01}
                value={temperature}
                onChange={(e) => setTemperature(parseFloat(e.target.value))}
                id={tempId}
                aria-label="Temperature"
                className="w-full h-2 bg-gray-200 dark:bg-gray-600 rounded-lg appearance-none cursor-pointer slider"
              />
              <p className="text-xs text-gray-500 dark:text-gray-400 leading-relaxed">
                Controls randomness. Higher values make output more creative, lower values make it more focused.
              </p>
            </div>
            <div className="space-y-3 p-4 bg-gradient-to-br from-white to-gray-50 dark:from-gray-800 dark:to-gray-900 border border-gray-200 dark:border-gray-600 rounded-xl enhanced-card">
              <div className="flex items-center justify-between">
                <label htmlFor={maxId} className="text-sm font-medium text-gray-700 dark:text-gray-300 flex items-center gap-2">
                  <div className="w-8 h-8 bg-blue-100 dark:bg-blue-900/30 rounded-lg flex items-center justify-center">
                    <FaHashtag className="text-blue-500" size={14} />
                  </div>
                  Max Tokens
                </label>
                <span className="text-sm font-mono text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-900/20 px-3 py-1.5 rounded-lg  font-semibold border border-blue-200 dark:border-blue-800">
                  {maxTokens}
                </span>
              </div>
              <Slider
                label={`Max Tokens: ${maxTokens}`}
                min={64}
                max={4096}
                step={32}
                value={maxTokens}
                onChange={(e) => setMaxTokens(parseInt(e.target.value))}
                id={maxId}
                aria-label="Max tokens"
                className="w-full h-2 bg-gray-200 dark:bg-gray-600 rounded-lg appearance-none cursor-pointer slider"
              />
              <p className="text-xs text-gray-500 dark:text-gray-400 leading-relaxed">
                Maximum number of tokens in the response. Higher values allow longer responses.
              </p>
            </div>
            
            {/* Top P Section */}
            <div className="space-y-3 p-4 bg-gradient-to-br from-white to-gray-50 dark:from-gray-800 dark:to-gray-900 border border-gray-200 dark:border-gray-600 rounded-xl enhanced-card">
              <div className="flex items-center justify-between">
                <label htmlFor={topPId} className="text-sm font-medium text-gray-700 dark:text-gray-300 flex items-center gap-2">
                  <div className="w-8 h-8 bg-green-100 dark:bg-green-900/30 rounded-lg flex items-center justify-center">
                    <FaChartLine className="text-green-500" size={14} />
                  </div>
                  Top P
                </label>
                <span className="text-sm font-mono text-green-600 dark:text-green-400 bg-green-50 dark:bg-green-900/20 px-3 py-1.5 rounded-lg  font-semibold border border-green-200 dark:border-green-800">
                  {topP.toFixed(2)}
                </span>
              </div>
              <Slider
                label={`Top P: ${topP.toFixed(2)}`}
                min={0}
                max={1}
                step={0.01}
                value={topP}
                onChange={(e) => setTopP(parseFloat(e.target.value))}
                id={topPId}
                aria-label="Top P"
                className="w-full h-2 bg-gray-200 dark:bg-gray-600 rounded-lg appearance-none cursor-pointer slider"
              />
              <p className="text-xs text-gray-500 dark:text-gray-400 leading-relaxed">
                Controls diversity via nucleus sampling. Lower values focus on most likely tokens.
              </p>
            </div>


          </div>
        ) : (
  
          <div className="flex flex-col items-center justify-center h-full space-y-6 p-3">
            <div className="text-center space-y-2 group relative">
              <div className="w-10 h-10 bg-red-100 dark:bg-red-900/30 rounded-xl flex items-center justify-center mx-auto shadow-sm group-hover:shadow-md transition-all duration-200 cursor-pointer hover:scale-110">
                <FaThermometerHalf className="text-red-500" size={16} />
              </div>
              <div className="text-xs font-mono text-red-600 dark:text-red-400 font-semibold">
                {temperature.toFixed(2)}
              </div>
            
              <div className="absolute left-full ml-2 top-1/2 transform -translate-y-1/2 bg-gray-900 dark:bg-gray-100 text-white dark:text-gray-900 px-2 py-1 rounded text-xs whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none z-10">
                Temperature: {temperature.toFixed(2)}
                <div className="absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-1 w-0 h-0 border-l-4 border-l-gray-900 dark:border-l-gray-100 border-t-4 border-t-transparent border-b-4 border-b-transparent"></div>
              </div>
            </div>
            
            <div className="text-center space-y-2 group relative">
              <div className="w-10 h-10 bg-blue-100 dark:bg-blue-900/30 rounded-xl flex items-center justify-center mx-auto shadow-sm group-hover:shadow-md transition-all duration-200 cursor-pointer hover:scale-110">
                <FaHashtag className="text-blue-500" size={16} />
              </div>
              <div className="text-xs font-mono text-blue-600 dark:text-blue-400 font-semibold">
                {maxTokens}
              </div>
             
              <div className="absolute left-full ml-2 top-1/2 transform -translate-y-1/2 bg-gray-900 dark:bg-gray-100 text-white dark:text-gray-900 px-2 py-1 rounded text-xs whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none z-10">
                Max Tokens: {maxTokens}
                <div className="absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-1 w-0 h-0 border-l-4 border-l-gray-900 dark:border-l-gray-100 border-t-4 border-t-transparent border-b-4 border-b-transparent"></div>
              </div>
            </div>
            
            <div className="text-center space-y-2 group relative">
              <div className="w-10 h-10 bg-green-100 dark:bg-green-900/30 rounded-xl flex items-center justify-center mx-auto shadow-sm group-hover:shadow-md transition-all duration-200 cursor-pointer hover:scale-110">
                <FaChartLine className="text-green-500" size={16} />
              </div>
              <div className="text-xs font-mono text-green-600 dark:text-green-400 font-semibold">
                {topP.toFixed(2)}
              </div>
         
              <div className="absolute left-full ml-2 top-1/2 transform -translate-y-1/2 bg-gray-900 dark:bg-gray-100 text-white dark:text-gray-900 px-2 py-1 rounded text-xs whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none z-10">
                Top P: {topP.toFixed(2)}
                <div className="absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-1 w-0 h-0 border-l-4 border-l-gray-900 dark:border-l-gray-100 border-t-4 border-t-transparent border-b-4 border-b-transparent"></div>
              </div>
            </div>
          </div>
        )}
      </div>

    </div>
  );
}


