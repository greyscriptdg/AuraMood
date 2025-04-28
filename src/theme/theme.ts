export const lightTheme = {
  colors: {
    primary: '#6C63FF',
    background: '#FFFFFF',
    card: 'rgba(255, 255, 255, 0.7)',
    text: '#333333',
    border: 'rgba(0, 0, 0, 0.1)',
    notification: '#FF3B30',
  },
  spacing: {
    xs: 4,
    sm: 8,
    md: 16,
    lg: 24,
    xl: 32,
  },
};

export const darkTheme = {
  colors: {
    primary: '#6C63FF',
    background: '#121212',
    card: 'rgba(18, 18, 18, 0.7)',
    text: '#FFFFFF',
    border: 'rgba(255, 255, 255, 0.1)',
    notification: '#FF453A',
  },
  spacing: {
    xs: 4,
    sm: 8,
    md: 16,
    lg: 24,
    xl: 32,
  },
};

export type Theme = typeof lightTheme; 