/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				backGround: '#1C1B29',
				nav : '#111827',
				titulos: '#E5E7EB',
				azul: '#7DD3FC',
				amarillo : '#FDE047',
				letrasChica: '#D1D5DB',
				fondoBtn :'#0F172A',
				bordeBtn:'#334155',
				puntos: '#9689C9',
			  },
		},
	},
	plugins: [],
}
