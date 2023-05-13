/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "primary-900": "#0B485B",
        "primary-600": "#19C1CE",
        "primary-500": "#07E5EB",
        "secondary-500": "#D6D6D6",
        "secondary-50": "#FFFFFF",
        "highlight-600": "#F2BF4E",
        "highlight-500": "#F4CA6D",
        'gray-lighter': '#CFD3D8',
      },
      width: {
        "sm": "94px",
        "md": "119px"
      },
      height: {
        "sm": "40px",
        "md": "44px"
      },
      fontSize: {
        'desktop-heading-lg': '56px',
        'mobile-heading-lg': '40px',
        'desktop-heading-md': '40px',
        'mobile-heading-md': '32px',
        'desktop-heading-sm': '32px',
        'mobile-heading-sm': '24px',
        'desktop-heading-xs': '24px',
        'mobile-heading-xs': '20px',
        'desktop-subtitle-md': '18px',
        'mobile-subtitle-md': '16px',
        'desktop-subtitle-sm': '20px',
        'mobile-subtitle-sm': '16px',
        'desktop-subtitle-xs': '14px',
        'mobile-subtitle-xs': '14px',
        'desktop-body-lg': '20px',
        'mobile-body-lg': '16px',
        'desktop-body-md': '16px',
        'mobile-body-md': '16px',
        'desktop-body-sm': '14px',
        'mobile-body-sm': '14px',
      },
      lineHeight: {
        'heading-100': '100%',
        'heading-110': '110%',
        'subtitle-120': '120%',
        'subtitle-140': '140%',
        'body-150': '150%',
      },
      fontWeight: {
        'black': '900',
        'extra-bold': '800',
        'regular': '400',
        'bold': '700',
      },
      screens: {
        "xs": "360px",
        "xl": "1440px"
      },
      backgroundColor: {
        'blue-dark': '#0B485B',
        'cyan': '#19C1CE',
        'cyan-light': '#07E5EB',
        'yellow': '#F2BF4E',
        'yellow-light': '#F4CA6D',
        'black': '#000000',
        'gray-dark': '#212429',
        'gray': '#7E8A98',
        'gray-light': '#97A1AC',
        'gray-lighter': '#CFD3D8',
        'gray-lightest': '#F1F3F5',
        'white': '#FFFFFF',
      },
      textColor: {
        'blue-dark': '#0B485B',
        'cyan': '#19C1CE',
        'cyan-light': '#07E5EB',
        'yellow': '#F2BF4E',
        'yellow-light': '#F4CA6D',
        'black': '#000000',
        'gray-dark': '#212429',
        'gray': '#7E8A98',
        'gray-light': '#97A1AC',
        'gray-lighter': '#CFD3D8',
        'gray-lightest': '#F1F3F5',
        'white': '#FFFFFF',
      },
      padding: {
        "container": "6.75rem"
      },
      boxShadow: {
        'input': 'inset 4px 4px #e3f7f8'
      },
      fontFamily: {
        'darker': ['var(--font-darker-grotesque)'],
        'nunito': ['var(--font-nunito-sans)'],
      },
      backgroundImage: {
        "cta": "url('/cta.png')",
        "cta-mobile": "url('/cta-mobile.png')"
      }
    },
  },
  plugins: [],
};
