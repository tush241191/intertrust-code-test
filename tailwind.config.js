const colors = require('tailwindcss/colors')

module.exports = {
    purge: [
        './pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'
    ],
    darkMode: false, // or 'media' or 'class'
    theme: {
        extend: {
            colors: {
                cyan: colors.cyan,
                sky: colors.sky,
                orange: colors.orange,
            },
            gridTemplateRows: {
                '[auto,auto,1fr]': 'auto auto 1fr',
            },
        }
    },
    variants: {
        extend: {}
    },
    plugins: []
}
