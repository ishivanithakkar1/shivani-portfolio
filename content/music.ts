export type MusicTrack = {
  id: string;
  title: string;
  genre: string;
  duration: string;
  keySignature: string;
  tempo: string;
  lyricSnippet: string;
  story: string;
  synthFrequency: number; // Pitch reference for Web Audio preview
};

export const musicTracksData: MusicTrack[] = [
  {
    id: "echoes-in-obsidian",
    title: "Echoes in Obsidian",
    genre: "Acoustic / Ambient Vocal",
    duration: "3:42",
    keySignature: "F# Minor",
    tempo: "72 BPM",
    lyricSnippet: "In the space between sound and silence, resonance finds its home...",
    story:
      "A soulful vocal piece exploring acoustic reverb layers, recorded live with single-take vocal harmonies and warm fingerpicked acoustic resonance.",
    synthFrequency: 369.99, // F#4
  },
  {
    id: "algorithmic-lullaby",
    title: "Algorithmic Lullaby",
    genre: "Neoclassical / Vocal Synth",
    duration: "4:15",
    keySignature: "D Major",
    tempo: "84 BPM",
    lyricSnippet: "Lines of light woven into melody, where the heart keeps time...",
    story:
      "An ethereal composition blending classical vocal runs with subtle analog synth textures, capturing the quiet calm of late-night engineering sessions.",
    synthFrequency: 293.66, // D4
  },
  {
    id: "whispers-of-frequency",
    title: "Whispers of Frequency",
    genre: "Symphonic Vocal",
    duration: "3:18",
    keySignature: "A Major",
    tempo: "68 BPM",
    lyricSnippet: "Every frequency holds a memory; every chord tells a story...",
    story:
      "Rich multi-layered vocal improvisation featuring soaring dynamic range and delicate dynamic expression.",
    synthFrequency: 440.0, // A4
  },
];
