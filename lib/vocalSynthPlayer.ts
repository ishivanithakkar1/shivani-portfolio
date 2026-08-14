"use client";

class VocalSynthPlayer {
  private ctx: AudioContext | null = null;
  private currentTrackId: string | null = null;
  private isPlaying = false;
  private activeNodes: { stop: () => void }[] = [];
  private onStateChangeCallback: ((trackId: string | null, isPlaying: boolean) => void) | null = null;

  private initCtx() {
    if (this.ctx) return;
    const AudioContextClass =
      window.AudioContext ||
      (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
    if (AudioContextClass) {
      this.ctx = new AudioContextClass();
    }
  }

  public subscribe(callback: (trackId: string | null, isPlaying: boolean) => void) {
    this.onStateChangeCallback = callback;
  }

  public playPreview(trackId: string, baseFreq: number) {
    this.initCtx();
    if (!this.ctx) return;

    if (this.ctx.state === "suspended") {
      this.ctx.resume();
    }

    if (this.currentTrackId === trackId && this.isPlaying) {
      this.stop();
      return;
    }

    this.stop();

    this.currentTrackId = trackId;
    this.isPlaying = true;
    this.notify();

    // Generate expressive vocal-like melody notes (Arpeggio pentatonic run based on baseFreq)
    const intervals = [1, 1.25, 1.333, 1.5, 1.666, 2, 2.25, 2.5]; // Musical ratios
    const now = this.ctx.currentTime;

    const masterGain = this.ctx.createGain();
    masterGain.gain.setValueAtTime(0.0001, now);
    masterGain.gain.linearRampToValueAtTime(0.2, now + 0.3);
    masterGain.connect(this.ctx.destination);

    // Play a sequence of 8 melodic vocal notes
    intervals.forEach((ratio, index) => {
      if (!this.ctx) return;
      const noteTime = now + index * 0.45;
      const noteFreq = baseFreq * ratio;

      const osc = this.ctx.createOscillator();
      const oscGain = this.ctx.createGain();
      const filter = this.ctx.createBiquadFilter();

      // Vocal timbre vibrato (LFO)
      const lfo = this.ctx.createOscillator();
      const lfoGain = this.ctx.createGain();
      lfo.frequency.setValueAtTime(5.5, noteTime); // 5.5 Hz vocal vibrato
      lfoGain.gain.setValueAtTime(noteFreq * 0.015, noteTime); // vibrato depth
      lfo.connect(osc.frequency);

      osc.type = "sine";
      osc.frequency.setValueAtTime(noteFreq, noteTime);

      // Formant lowpass filter for vocal resonance
      filter.type = "lowpass";
      filter.frequency.setValueAtTime(800, noteTime);
      filter.frequency.exponentialRampToValueAtTime(1400, noteTime + 0.2);

      // Envelope
      oscGain.gain.setValueAtTime(0.0001, noteTime);
      oscGain.gain.linearRampToValueAtTime(0.18, noteTime + 0.08);
      oscGain.gain.exponentialRampToValueAtTime(0.001, noteTime + 0.42);

      osc.connect(filter);
      filter.connect(oscGain);
      oscGain.connect(masterGain);

      osc.start(noteTime);
      lfo.start(noteTime);
      osc.stop(noteTime + 0.45);
      lfo.stop(noteTime + 0.45);
    });

    // Auto-stop after melody sequence completes
    const totalDuration = intervals.length * 0.45;
    const timer = setTimeout(() => {
      if (this.currentTrackId === trackId) {
        this.stop();
      }
    }, totalDuration * 1000 + 400);

    this.activeNodes.push({
      stop: () => {
        clearTimeout(timer);
        try {
          masterGain.gain.linearRampToValueAtTime(0.0001, (this.ctx?.currentTime || 0) + 0.1);
        } catch {
          // ignore
        }
      },
    });
  }

  public stop() {
    this.activeNodes.forEach((n) => n.stop());
    this.activeNodes = [];
    this.isPlaying = false;
    this.currentTrackId = null;
    this.notify();
  }

  private notify() {
    if (this.onStateChangeCallback) {
      this.onStateChangeCallback(this.currentTrackId, this.isPlaying);
    }
  }

  public getPlayingTrackId(): string | null {
    return this.currentTrackId;
  }
}

export const vocalSynthPlayer = new VocalSynthPlayer();
