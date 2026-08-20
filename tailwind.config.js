export default {
  content: [
    './index.html',
    './src/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      boxShadow: {
        glass: '0 20px 60px rgba(15, 23, 42, 0.3)',
      },
      backgroundImage: {
        'grid-slate': 'radial-gradient(circle at top right, rgba(99, 102, 241, 0.15), transparent 35%), radial-gradient(circle at bottom left, rgba(79, 70, 229, 0.12), transparent 25%)',
      },
      colors: {
        surface: '#060816',
        panel: 'rgba(15, 23, 42, 0.82)',
      },
    },
  },
  plugins: [],
};
