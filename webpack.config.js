var cwd = process.cwd();
var webpack = require('webpack');

module.exports = {
    entry: {
        "app": "./app.ts"
    },
    output: {
        filename: './bundle.js',
        libraryTarget: "umd"
    },   
    plugins: [
        new webpack.optimize.OccurenceOrderPlugin(true),
        /*new webpack.optimize.UglifyJsPlugin({
            compress: {
                warnings: true
            }
        })*/ //use webpack -p to uglify
    ],
    
    devtool: 'source-map',
   
    module: {
        loaders: [
            {
                test: /\.ts$/,
                loader: 'awesome-typescript-loader'
            }
        ]
    }
};