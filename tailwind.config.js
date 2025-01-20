module.exports = {
	content: ["./src/**/*.{html,js,jsx}"],
	mode: "jit",
	theme: {
		fontFamily: {
			Poppins: ["Poppins", "sans-serif"],
			mono: ["Fira Mono", "monospace"],
			mulish: ["Mulish", "sans-serif"],
			Hind: ["Hind", "sans-serif"],
			inter: ["Inter", "sans-serif"],
		},
		extend: {
			colors: {
				"deep-blue": "#010026",
				"light-grey": "#e7f5f5",
				grey: "#e7f5f5",
			},
			keyframes: {
				flashLetter: {
					"0%, 50%, 100%": { opacity: "1" },
					"25%, 75%": { opacity: "0" },
				},
			},
			animation: {
				"flash-letter": "flashLetter 5.2s ease 1.3s infinite",
			},
		},
		screens: {
			xs: "480px",
			sm: "768px",
			md: "1060px",
		},
	},
	plugins: [],
};
