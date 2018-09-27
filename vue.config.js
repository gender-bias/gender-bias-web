module.exports = {
    configureWebpack: {
        module: {
            rules: [
                {
                    test: /\.scss$/,
                    use: [
                        'vue-style-loader',
                        'sass-loader',
                        'css-loader',
                    ]
                }
            ]
        }
    }
};
