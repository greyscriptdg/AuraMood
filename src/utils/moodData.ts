// Centralized mood data for AuraMood
export const moods = [
  { key: 'sad', emoji: '😢', name: 'Sad', quote: "It's okay to feel down. Tomorrow is a new day." },
  { key: 'neutral', emoji: '😐', name: 'Neutral', quote: 'Every moment is a fresh beginning.' },
  { key: 'happy', emoji: '😊', name: 'Happy', quote: 'Your happiness is contagious!' },
  { key: 'excited', emoji: '😄', name: 'Excited', quote: 'The world is full of possibilities!' },
  { key: 'ecstatic', emoji: '🤩', name: 'Ecstatic', quote: "You're radiating positive energy!" },
];

export type MoodKey = typeof moods[number]['key'];