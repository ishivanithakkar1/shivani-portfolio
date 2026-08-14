"use client";

import { useState, useRef, useEffect } from "react";
import { soundscape } from "@/lib/soundscape";
import { vocalSynthPlayer } from "@/lib/vocalSynthPlayer";

type TerminalHistory = {
  id: string;
  command?: string;
  output: React.ReactNode;
};

export function SystemTerminal() {
  const [input, setInput] = useState("");
  const [history, setHistory] = useState<TerminalHistory[]>([
    {
      id: "welcome",
      output: (
        <div className="space-y-1 font-mono-code text-xs text-text-secondary">
          <p className="text-accent-cyan font-semibold">
            SHIVANI SYSTEM OS v3.4 [RESONANCE EDITION]
          </p>
          <p className="text-text-muted">
            Type <span className="text-accent-amber">&apos;help&apos;</span> to list interactive terminal commands, or click quick execution badges below.
          </p>
        </div>
      ),
    },
  ]);

  const bufferRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  // Scroll ONLY the internal terminal buffer container, never the page window
  useEffect(() => {
    if (bufferRef.current) {
      bufferRef.current.scrollTop = bufferRef.current.scrollHeight;
    }
  }, [history]);

  const executeCommand = (cmdStr: string) => {
    const trimmed = cmdStr.trim().toLowerCase();
    if (!trimmed) return;

    let outputContent: React.ReactNode = null;

    switch (trimmed) {
      case "help":
        outputContent = (
          <div className="space-y-1 text-xs font-mono-code text-text-secondary">
            <p className="text-accent-cyan font-bold">// AVAILABLE COMMANDS:</p>
            <p>
              <span className="text-accent-amber font-semibold">whoami</span> - Display Shivani&apos;s dual identity & background
            </p>
            <p>
              <span className="text-accent-amber font-semibold">stack</span> - Inspect full-stack engineering metrics & tech stack
            </p>
            <p>
              <span className="text-accent-amber font-semibold">sing</span> - Synthesize acoustic vocal melody frequency in terminal
            </p>
            <p>
              <span className="text-accent-amber font-semibold">soundscape</span> - Toggle ambient background acoustic soundscape
            </p>
            <p>
              <span className="text-accent-amber font-semibold">contact</span> - Display direct transmission details & email
            </p>
            <p>
              <span className="text-accent-amber font-semibold">clear</span> - Clear terminal buffer
            </p>
          </div>
        );
        break;

      case "whoami":
        outputContent = (
          <div className="space-y-1.5 text-xs font-mono-code text-text-secondary">
            <p className="text-white font-bold">SHIVANI THAKKAR</p>
            <p>Role: Full-Stack Software Engineer (3.5+ Yrs Exp) & Vocalist</p>
            <p>Status: Software Engineer // Available for Freelance & Senior Roles</p>
            <p className="text-accent-cyan">
              Duality: Full-Stack Web Architecture (Angular, React, NestJS, .NET Core) + Acoustic Vocal Resonance
            </p>
          </div>
        );
        break;

      case "stack":
        outputContent = (
          <div className="rounded-lg border border-white/10 bg-black/60 p-3 font-mono-code text-xs text-text-secondary space-y-1">
            <p className="text-accent-cyan">// FULL-STACK TECH STACK & TELEMETRY</p>
            <p>Experience: 3.5+ Years Professional Full-Stack Engineering</p>
            <p>Frontend & Backend: Angular, React, Next.js, NestJS, Node.js, .NET Core, C#, REST APIs</p>
            <p>Databases: SQL Server, MySQL, MongoDB, Query Optimization (-30% Latency)</p>
            <p>Cloud & DevOps: Azure, GCP, Docker, CI/CD (GitHub, GitLab, Azure DevOps)</p>
            <p>AI / ML: Vertex AI Prompt Engineering (Google Cloud Certified)</p>
            <p className="text-emerald-400">Certifications: Google Cloud Vertex AI • McKinsey & Company Forward Program</p>
          </div>
        );
        break;

      case "sing":
        vocalSynthPlayer.playPreview("terminal-melody", 440);
        outputContent = (
          <div className="text-xs font-mono-code text-accent-amber space-y-1">
            <p>▶ SYNTHESIZING VOCAL MELODY AT 440Hz (A4)...</p>
            <p className="text-text-muted">[ Active Frequency: Pentatonic Vocal Scale ]</p>
          </div>
        );
        break;

      case "soundscape":
        const active = soundscape.toggle();
        outputContent = (
          <div className="text-xs font-mono-code text-accent-indigo">
            <p>Acoustic Soundscape state: {active ? "ENABLED [PLAYING]" : "MUTED"}</p>
          </div>
        );
        break;

      case "contact":
        outputContent = (
          <div className="text-xs font-mono-code text-text-secondary space-y-1">
            <p className="text-white">Email: i.shivanithakkar@gmail.com</p>
            <p>GitHub: https://github.com/ishivanithakkar1</p>
            <p>LinkedIn: https://www.linkedin.com/in/shivani-thakkar-07</p>
            <p>YouTube: https://www.youtube.com/@shivani_sings7721</p>
            <p>Instagram: https://instagram.com/i_shivanithakkar</p>
          </div>
        );
        break;

      case "clear":
        setHistory([]);
        setInput("");
        return;

      default:
        outputContent = (
          <p className="text-xs font-mono-code text-rose-400">
            Command not recognized: &apos;{trimmed}&apos;. Type &apos;help&apos; for list of commands.
          </p>
        );
        break;
    }

    setHistory((prev) => [
      ...prev,
      {
        id: Math.random().toString(),
        command: cmdStr,
        output: outputContent,
      },
    ]);
    setInput("");
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    executeCommand(input);
  };

  return (
    <div className="glass-panel group relative overflow-hidden rounded-2xl border-white/10 backdrop-blur-2xl bg-surface/95 shadow-2xl">
      {/* Terminal Titlebar */}
      <div className="flex items-center justify-between border-b border-white/10 bg-black/60 px-4 py-3 font-mono-code text-xs">
        <div className="flex items-center gap-2">
          <span className="h-3 w-3 rounded-full bg-rose-500/80 inline-block" />
          <span className="h-3 w-3 rounded-full bg-amber-500/80 inline-block" />
          <span className="h-3 w-3 rounded-full bg-emerald-500/80 inline-block" />
          <span className="ml-2 text-text-muted text-[11px]">shivani@resonance-terminal:~</span>
        </div>

        <span className="text-[10px] text-accent-cyan tracking-wider hidden sm:inline">
          INTERACTIVE CLI TERMINAL
        </span>
      </div>

      {/* Quick Command Execution Badges */}
      <div className="flex flex-wrap items-center gap-2 border-b border-white/5 bg-white/[0.02] px-4 py-2.5 font-mono-code text-[11px]">
        <span className="text-text-muted text-[10px] uppercase">// QUICK RUN:</span>
        {["help", "whoami", "stack", "sing", "contact"].map((cmd) => (
          <button
            type="button"
            key={cmd}
            onClick={() => executeCommand(cmd)}
            className="rounded-md border border-white/10 bg-white/5 px-2.5 py-1 text-text-secondary hover:border-accent-cyan/50 hover:bg-accent-cyan/15 hover:text-white transition-all"
          >
            {cmd}
          </button>
        ))}
      </div>

      {/* Terminal Content Buffer */}
      <div
        ref={bufferRef}
        onClick={() => inputRef.current?.focus({ preventScroll: true })}
        className="h-64 overflow-y-auto p-4 space-y-3 font-mono-code text-xs cursor-text scroll-smooth"
      >
        {history.map((item) => (
          <div key={item.id} className="space-y-1">
            {item.command && (
              <div className="flex items-center gap-2 text-accent-cyan font-semibold">
                <span className="text-text-muted">shivani@resonance:~$</span>
                <span>{item.command}</span>
              </div>
            )}
            <div>{item.output}</div>
          </div>
        ))}
      </div>

      {/* Command Input Prompt */}
      <form onSubmit={handleFormSubmit} className="flex items-center border-t border-white/10 bg-black/40 px-4 py-2.5 font-mono-code text-xs">
        <span className="text-accent-cyan font-bold mr-2">shivani@resonance:~$</span>
        <input
          ref={inputRef}
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="type 'help', 'stack', 'sing'..."
          className="w-full bg-transparent text-text-primary placeholder:text-text-muted focus:outline-none"
        />
        <button type="button" onClick={handleFormSubmit} className="text-text-muted hover:text-accent-cyan ml-2 text-xs">
          ⏎
        </button>
      </form>
    </div>
  );
}
