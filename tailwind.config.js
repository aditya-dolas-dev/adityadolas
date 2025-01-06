/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        glow: '0 0 10px #00ff00, 0 0 20px #00ff00',
        redglow: '0 4px 10px #DC143C',  // Customize glow color
        textblueglow: '0 4px 10px #0057ff33',  // Customize glow color
      },
      colors: {
        silver: '#C0C0C0',
        golden: "#FFD700",
        amber: "#FFBF00",
        bronze: "#CD7F32",
        chocolate: "#8B4513",
        darkBrown: "#5D3A1A",
        'body-bg': '#CBCBCB',
        'text-primary': '#2E373A',
      },
      gradientColorStops: {
        goldenBrown: {
          from: "#FFD700",
          via: "#FFBF00",
          to: "#5D3A1A",
        },
      },
      keyframes: {
        autoRotateAnimation: {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' },
        },
        autoShowAnimation: {
          '0%': { opacity: '0', transform: 'translateY(200px) scale(0.3)' },
          '100%': { opacity: '1', transform: 'translateY(0) scale(1)' },
        },
        autoBlurAnimation: {
          '0%': { filter: 'blur(40px)' },
          '45%, 55%': { filter: 'blur(0px)' },
          '100%': { filter: 'blur(40px)' },
        },
      },
      animation: {
        autoRotate: 'autoRotateAnimation 1s linear infinite',
        autoShow: 'autoShowAnimation 1s both',
        autoBlur: 'autoBlurAnimation 1s linear both',
      },
      
    },
  },
  plugins: [
  ],
}