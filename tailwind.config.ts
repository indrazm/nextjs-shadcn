import type { Config } from 'tailwindcss';

const config: Config = {
  darkMode: 'class',
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    colors: {
      primary: {
        '50': '#f3f3ff',
        '100': '#e9e9fe',
        '200': '#d6d6fe',
        '300': '#b8b5fd',
        '400': '#948bfa',
        '500': '#715df5',
        '600': '#532deb',
        '700': '#4f29d8',
        '800': '#4222b5',
        '900': '#381d95',
        '950': '#201065',
      },
      secondary: {
        '50': '#f6f7f8',
        '100': '#ebebee',
        '200': '#e3e4e8',
        '300': '#c3c6cd',
        '400': '#a5a8b5',
        '500': '#8f91a2',
        '600': '#7e7f92',
        '700': '#717184',
        '800': '#5f5f6e',
        '900': '#4f4f59',
        '950': '#323239',
      },
    },
    extend: {
      borderWidth: {
        1: '1px',
        1.5: '1.5px',
      },
    },
  },
  plugins: [],
};
export default config;
