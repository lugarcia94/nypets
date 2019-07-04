module.exports = {
    sourceMap: false,
    plugins: {
        'autoprefixer': {
            browsers: ['last 2 versions'],
            grid: true
        },
        'postcss-pxtorem': {
            rootValue: 16,
            unitPrecision: 4,
            propList: [
                'font',
                'font-size',
                'line-height',
                'letter-spacing',
                'height',
                'margin',
                'margin*',
                'padding*',
                'top',
                'right',
                'bottom',
                'left'
            ],
            mediaQuery: false,
            minPixelValue: 0,
            replace: true
        },
        'postcss-inline-svg': {},
        'postcss-svgo': {},
        'cssnano': {zindex: false}

    }
}