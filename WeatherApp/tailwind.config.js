// tailwind.config.js
module.exports = {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}', // adjust based on your file types
  ],
  theme: {
    extend: {
      screens: {
        xs: '375px', // your custom breakpoint
      },
    },
  },
  plugins: [],
};
