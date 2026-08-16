export type MusicTrack = {
  id: string;
  title: string;
  type: "YouTube Video" | "YouTube Shorts" | "Instagram Reel";
  url: string;
  duration?: string;
  description: string;
  synthFrequency: number;
};

export const musicTracksData: MusicTrack[] = [
  {
    id: "aankho-ma-bethela",
    title: "Aankho Ma Bethela Chatak Kahe He",
    type: "YouTube Video",
    url: "https://youtu.be/dZ4UjyKTMs8?si=ylasaLaeiXMRG3ic",
    duration: "Full Video",
    description: "Official vocal performance exploring authentic acoustic Gujarati timbre and soulful melodic resonance.",
    synthFrequency: 369.99, // F#4
  },
  {
    id: "satranga-cover",
    title: "Satranga Cover",
    type: "YouTube Shorts",
    url: "https://youtube.com/shorts/TZqCVSOy_G4?si=uNFKWlxAnWjVN540",
    duration: "Shorts",
    description: "Expressive vocal short performance capturing intricate ornamentations and emotive pitch bends.",
    synthFrequency: 440.0, // A4
  },
  {
    id: "kanku-chanti-kankotari",
    title: "Kanku Chanti Kankotari",
    type: "YouTube Video",
    url: "https://youtu.be/T32wcNSCRQE",
    duration: "Full Video",
    description: "Traditional acoustic folk masterpiece delivered with rich dynamic range and crystal-clear vocals.",
    synthFrequency: 329.63, // E4
  },
  {
    id: "insta-acoustic-reel",
    title: "Live Acoustic Performance Reel",
    type: "Instagram Reel",
    url: "https://www.instagram.com/reel/DWXiFWdO_BI/",
    duration: "Reel",
    description: "Raw live studio session captured on Instagram showcasing acoustic vocal expression.",
    synthFrequency: 293.66, // D4
  },
];

export const socialLinks = {
  linktree: "https://linktr.ee/i.shivani",
  youtubeChannel: "https://youtube.com/@shivani_sings7721?sub_confirmation=1",
  instagram: "https://www.instagram.com/i_shivanithakkar",
};
