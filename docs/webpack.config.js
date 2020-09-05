const path = require('path');
const webpack = require('webpack')
const merge = require('webpack-merge');
const dotenv = require('dotenv')

dotenv.config({ path: 'docs/.env'})

module.exports = merge(require('../webpack.base'), {
    context: __dirname,

    entry: './app.js',

    output: {
        path: path.resolve(__dirname, 'build'),
        filename: 'app.js',
        publicPath: '/build/',
    },

    resolve: {
        alias: {
            vue: 'vue/dist/vue.js',
        },
    },

    devServer: {
        contentBase: __dirname,
        port: 2000,
    },

    plugins: [
        new webpack.DefinePlugin({
            'CRISP_WEBSITE_ID': JSON.stringify(process.env.CRISP_WEBSITE_ID)
        })
    ]
});
