export const theme = {
  colors: {
    bg: '#F7F7FB',
    card: '#FFFFFF',
    text: '#111827',
    subtext: '#6B7280',
    primary: '#2563EB',
    primaryAlt: '#06B6D4',
    inputBg: '#FFFFFF',
    inputBorder: '#E5E7EB',
    danger: '#DC2626',
    link: '#2563EB'
  },
  spacing: 8,
  radius: 14
} as const;

export type Theme = typeof theme;
