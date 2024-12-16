// /** @type {import('tailwindcss').Config} */
// export default {
//   content: [
//     "./index.html",
//     "./src/**/*.{js,ts,jsx,tsx}",
//   ],
//   theme: {
//     extend: {},
//   },
//   plugins: [],
// }


import withMT from "@material-tailwind/react/utils/withMT";
 
export default withMT({
  content: [
    "./src/**/*.{html,js,jsx,ts,tsx}",
    "./node_modules/@material-tailwind/react/**/*.js",
  ],
  theme: {
    extend: {
      fontFamily: {
      inter:["Inter", "sans-serif"],
    }
  },
  },
  plugins: [],
});