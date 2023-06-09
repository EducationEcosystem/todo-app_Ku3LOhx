const path = require('path');

module.exports = {
    entry: path.resolve(__dirname, 'src/index.js'),

    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js'
    },

    module: {
        rules: [
            {
                test: /\.js$/,
                include: [
                    path.resolve(__dirname, 'src'),
                ],
                loader: 'babel-loader'
            }
        ]
    },

    devServer: {
        contentBase: path.join(__dirname, 'dist'),
    }
};
