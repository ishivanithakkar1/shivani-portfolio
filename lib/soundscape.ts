"use client";

class SoundscapeEngine {
  private ctx: AudioContext | null = null;
  private masterGain: GainNode | null = null;
  private isPlaying = false;
  private oscillators: OscillatorNode[] = [];

  public init() {
    if (this.ctx) return;
    const AudioContextClass =
      window.AudioContext ||
      (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
    if (!AudioContextClass) return;

    this.ctx = new AudioContextClass();
    this.masterGain = this.ctx.createGain();
    this.masterGain.gain.setValueAtTime(0.0001, this.ctx.currentTime);
    this.masterGain.connect(this.ctx.destination);
  }

  public toggle(): boolean {
    if (!this.ctx) {
      this.init();
    }

    if (!this.ctx || !this.masterGain) return false;

    if (this.ctx.state === "suspended") {
      this.ctx.resume();
    }

    if (this.isPlaying) {
      this.stop();
      return false;
    } else {
      this.start();
      return true;
    }
  }

  private start() {
    if (!this.ctx || !this.masterGain) return;

    this.stop();

    // Harmonics for a warm ambient acoustic chord (A Major9 open resonance)
    const frequencies = [110, 164.81, 220, 277.18, 329.63, 440]; // A2, E3, A3, C#4, E4, A4

    frequencies.forEach((freq, idx) => {
      if (!this.ctx || !this.masterGain) return;

      const osc = this.ctx.createOscillator();
      const oscGain = this.ctx.createGain();
      const filter = this.ctx.createBiquadFilter();

      // Soft warm sine/triangle wave blend
      osc.type = idx % 2 === 0 ? "sine" : "triangle";
      osc.frequency.setValueAtTime(freq, this.ctx.currentTime);

      // Low pass filter to remove harshness
      filter.type = "lowpass";
      filter.frequency.setValueAtTime(600 + idx * 80, this.ctx.currentTime);

      // Soft individual volume
      const oscVol = 0.02 / (idx + 1);
      oscGain.gain.setValueAtTime(oscVol, this.ctx.currentTime);

      osc.connect(filter);
      filter.connect(oscGain);
      oscGain.connect(this.masterGain);

      osc.start();
      this.oscillators.push(osc);
    });

    // Fade in master gain smoothly
    this.masterGain.gain.linearRampToValueAtTime(
      0.15,
      this.ctx.currentTime + 2
    );
    this.isPlaying = true;
  }

  private stop() {
    if (!this.ctx || !this.masterGain) return;

    // Fade out smoothly
    this.masterGain.gain.linearRampToValueAtTime(
      0.0001,
      this.ctx.currentTime + 1.2
    );

    setTimeout(() => {
      this.oscillators.forEach((osc) => {
        try {
          osc.stop();
          osc.disconnect();
        } catch {
          // ignore already stopped
        }
      });
      this.oscillators = [];
      this.isPlaying = false;
    }, 1300);
  }

  public getActiveState(): boolean {
    return this.isPlaying;
  }
}

export const soundscape = new SoundscapeEngine();
