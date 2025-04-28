// Mock mood data array

export interface MoodConfig {
  emoji: string;
  name: string;
  message: string;
  auraColor: string;
}

export const MOODS: MoodConfig[] = [
  {
    emoji: '😞',
    name: 'Sad',
    message: "It's okay to have tough days",
    auraColor: '#6C63FF', // Bluish
  },
  {
    emoji: '😐',
    name: 'Neutral',
    message: 'Every day is a new beginning',
    auraColor: '#4CAF50', // Greenish
  },
  {
    emoji: '😊',
    name: 'Happy',
    message: 'Keep shining!',
    auraColor: '#FFC107', // Yellowish
  },
  {
    emoji: '😁',
    name: 'Excited',
    message: 'Your energy is contagious!',
    auraColor: '#FF4081', // Pinkish
  },
  {
    emoji: '🤩',
    name: 'Ecstatic',
    message: 'You are absolutely amazing!',
    auraColor: '#9C27B0', // Purple
  },
];

export const MAX_HISTORY = 5;

export interface MoodHistory {
  mood: string;
  timestamp: number;
}