/** @type {import('tailwindcss').Config} */
export default {
	darkMode: ['class'], // Mantiene la configuración para manejar el modo oscuro mediante la clase 'dark'
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'], // Asegúrate de que las rutas coincidan con la estructura de tu proyecto
	theme: {
	  extend: {
		colors: {
		  // Colores personalizados basados en las variables CSS
		  accent: 'rgb(var(--accent))',
		  'accent-light': 'rgb(var(--accent-light))',
		  'accent-dark': 'rgb(var(--accent-dark))',
		},
		backgroundImage: {
		  // Fondo degradado personalizado
		  'accent-gradient': 'linear-gradient(45deg, rgb(var(--accent)), rgb(var(--accent-light)) 30%, rgba(var(--accent-dark), 0.1) 60%)',
		},
		fontFamily: {
		  // Definición de la familia de fuentes para facilitar su uso
		  inter: ['Inter', 'system-ui', 'sans-serif'],
		},
	  },
	},
	plugins: [],
  };
  