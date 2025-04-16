"use client";

import type React from "react";
import { useState, useRef, useEffect } from "react";
import { Bot, X, ArrowUp, Loader2 } from "lucide-react";
import { cn } from "@/lib/utils";
import Typewriter from "typewriter-effect";

export default function AskAI() {
  const [expanded, setExpanded] = useState(false);
  const [query, setQuery] = useState("");
  const [response, setResponse] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);

  const toggleExpanded = () => {
    expanded && setResponse("");
    setExpanded(!expanded);
  };

  const handleSubmit = async (e?: React.FormEvent) => {
    if (e) e.preventDefault();
    if (!query.trim()) return;

    setIsLoading(true);
    setResponse("");
    setError("");

    try {
      const res = await fetch("/api/query", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ query }),
        referrerPolicy: "origin",
      });

      if (res.ok) {
        const data = await res.json();
        setResponse(data.response || "No response received.");
      } else {
        if (res.status === 403) {
          setError("You are not authorized to make this request.");
        } else if (res.status === 500) {
          setError("Server error, please try again later.");
        } else {
          setError("An unexpected error occurred.");
        }
      }
    } catch (err) {
      setError("Network error, please check your connection.");
    } finally {
      setIsLoading(false);
    }

    setQuery("");
  };

  useEffect(() => {
    if (expanded && inputRef.current) inputRef.current.focus();
  }, [expanded]);

  return (
    <div className="relative w-fit my-2 gap-x-3 items-left flex flex-col">

            {/* Response, Error, or Loading Indicator */}
            {expanded && (response || error) ? (
        response ? (
          <div className="text-xs py-2 rounded-md max-w-xs text-gray-800 dark:text-gray-400 italic">
            <Typewriter
              options={{
                strings: [response],
                autoStart: true,
                loop: false,
                delay: 20,
                deleteSpeed: 2000000000,
                cursor: "",
              }}
            />
          </div>
        ) : (
          <div className="text-xs py-2 rounded-md max-w-xs text-gray-800 dark:text-gray-400 italic">
            <Typewriter
              options={{
                strings: [error],
                autoStart: true,
                loop: false,
                delay: 20,
                deleteSpeed: 2000000000,
                cursor: "",
              }}
            />
          </div>
        )
      ) : expanded && isLoading ? (
        <div className="text-xs py-2 rounded-md max-w-xs text-gray-800 dark:text-gray-400 italic">
          <Typewriter
            options={{
              strings: ["thinking . . ."],
              autoStart: true,
              loop: false,
              delay: 20,
              deleteSpeed: 2000000000,
              cursor: "",
            }}
          />
        </div>
      ) : (
        <div className="text-xs py-2 rounded-md max-w-xs text-gray-800 dark:text-gray-400 italic">
          <Typewriter
            options={{
              strings: ["Use AI assistant"],
              autoStart: true,
              loop: false,
              delay: 20,
              deleteSpeed: 2000000000,
              cursor: "",
            }}
          />
        </div>
      )}

      {/* Input and Button Container */}
      <div
        className={cn(
          "relative transition-all duration-500 ease-out flex items-center overflow-hidden",
          "rounded-full backdrop-blur-xl border h-14",
          expanded ? "w-80 pl-14" : "w-14",
          "bg-white border-gray-300 shadow-md",
          "dark:bg-[#0a0a0a] dark:border-gray-900 dark:shadow-[0_0_15px_#000000ee]"
        )}
      >
        {/* Glowing border only on dark mode */}
        <div
          className={cn(
            "absolute inset-[-2px] rounded-full z-[-1] block",
            "before:absolute before:inset-0 before:rounded-full before:p-[2px]",
            !expanded
              ? "before:bg-[linear-gradient(90deg,white,black)] before:blur-[2px] before:opacity-80 before:animate-spin-slow"
              : "",
            "after:absolute after:inset-[4px] after:rounded-full dark:after:bg-[#0a0a0a] after:bg-white"
          )}
        />

        {/* Toggle Button */}
        <button
          onClick={toggleExpanded}
          className="absolute left-0 top-0 z-10 w-14 h-14 flex items-center justify-center rounded-full focus:outline-none 
          text-gray-800 hover:bg-gray-100
          dark:text-white dark:hover:bg-gray-800/50"
          aria-label={expanded ? "Close AI assistant" : "Open AI assistant"}
        >
          <div className="relative w-5 h-5 flex items-center justify-center">
            <Bot
              className={cn(
                "w-5 h-5 absolute inset-0 transition-all duration-300",
                expanded
                  ? "opacity-0 rotate-90 scale-0"
                  : "opacity-100 rotate-0 scale-100"
              )}
            />
            <X
              className={cn(
                "w-5 h-5 absolute inset-0 transition-all duration-300",
                expanded
                  ? "opacity-100 rotate-0 scale-100"
                  : "opacity-0 rotate-90 scale-0"
              )}
            />
          </div>
        </button>

        {/* Form */}
        <form
          onSubmit={handleSubmit}
          className={cn(
            "flex items-center w-full h-full pr-4 transition-all duration-500",
            expanded ? "opacity-100 translate-x-0" : "opacity-0 translate-x-5"
          )}
        >
          <input
            ref={inputRef}
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Ask anything about me..."
            className="w-full bg-transparent border-none outline-none font-medium transition-all duration-300 
            text-black placeholder:text-gray-400
            dark:text-white dark:placeholder:text-gray-500"
            disabled={!expanded}
          />

          {expanded && (
            <button
              type="submit"
              disabled={isLoading}
              className={cn(
                "ml-2 p-1.5 rounded-full transition",
                isLoading
                  ? "opacity-50 cursor-not-allowed"
                  : "hover:bg-gray-300",
                "bg-gray-200 text-black",
                "dark:bg-gray-800 dark:text-white dark:hover:bg-gray-700"
              )}
            >
              {isLoading ? (
                <Loader2 size={16} className="animate-spin" />
              ) : (
                <ArrowUp size={16} />
              )}
            </button>
          )}
        </form>
      </div>
    </div>
  );
}
