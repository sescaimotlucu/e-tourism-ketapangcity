
export const customColors = {
  'red-soft': '#D25959',
  'red-dark': '#681313',
  'green-forest': '#5C7658',
  'golden-beige': '#E6D385',
  'ketapang-maroon': '#801C1C',
  'cream-50': '#fefbf7',
  'cream-100': '#fef7ed',
  'green-50': '#f0fdf4',
  'nature-gradient': {
    'start': '#4ade80',
    'middle': '#22d3ee',
    'end': '#3b82f6',
  },
};

export const shadcnColors = {
  border: 'hsl(var(--border))',
  input: 'hsl(var(--input))',
  ring: 'hsl(var(--ring))',
  background: 'hsl(var(--background))',
  foreground: 'hsl(var(--foreground))',
  primary: {
    DEFAULT: 'hsl(var(--primary))',
    foreground: 'hsl(var(--primary-foreground))'
  },
  secondary: {
    DEFAULT: 'hsl(var(--secondary))',
    foreground: 'hsl(var(--secondary-foreground))'
  },
  destructive: {
    DEFAULT: 'hsl(var(--destructive))',
    foreground: 'hsl(var(--destructive-foreground))'
  },
  muted: {
    DEFAULT: 'hsl(var(--muted))',
    foreground: 'hsl(var(--muted-foreground))'
  },
  accent: {
    DEFAULT: 'hsl(var(--accent))',
    foreground: 'hsl(var(--accent-foreground))'
  },
  popover: {
    DEFAULT: 'hsl(var(--popover))',
    foreground: 'hsl(var(--popover-foreground))'
  },
  card: {
    DEFAULT: 'hsl(var(--card))',
    foreground: 'hsl(var(--card-foreground))'
  },
  sidebar: {
    DEFAULT: 'hsl(var(--sidebar-background))',
    foreground: 'hsl(var(--sidebar-foreground))',
    primary: 'hsl(var(--sidebar-primary))',
    'primary-foreground': 'hsl(var(--sidebar-primary-foreground))',
    accent: 'hsl(var(--sidebar-accent))',
    'accent-foreground': 'hsl(var(--sidebar-accent-foreground))',
    border: 'hsl(var(--sidebar-border))',
    ring: 'hsl(var(--sidebar-ring))'
  }
};

// Ketapang Cultural Colors
export const ketapangColors = {
  'ketapang-earth': 'hsl(25 25% 20%)',
  'ketapang-wood': 'hsl(30 35% 45%)', 
  'ketapang-gold': 'hsl(45 85% 65%)',
  'ketapang-forest': 'hsl(140 30% 40%)',
  'ketapang-river': 'hsl(200 45% 55%)',
  'ketapang-sunset': 'hsl(15 70% 60%)',
  'ketapang-traditional': 'hsl(350 45% 50%)',
  'dayak-batik-primary': 'hsl(25 60% 35%)',
  'dayak-batik-secondary': 'hsl(45 75% 55%)',
  'dayak-ornament': 'hsl(15 85% 45%)',
};

export const allColors = {
  ...customColors,
  ...ketapangColors,
  ...shadcnColors,
};
