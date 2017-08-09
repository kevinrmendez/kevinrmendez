module.exports = {
    entry: "./src/index.js",
    output: {
        path:"dist/assets",
        filename:"bundle.min.js",
        publicPath: "/assets/"
    },
    devServer: {
        inline: true,
        contentBase: './dist',
        port: 3000
    },
    module: {
        loaders: [
            {
            test: /\.js$/,
            exclude: /(node_modules)/,
            loader: ['babel'],
            query: {
                presets: ['es2015','react','stage-0']
            }
            },{
                test: /\.css$/,
                exclude: /(node_modules)/,
                loader: "style-loader!css-loader!autoprefixer-loader"
            },
            {
            test: /\.scss$/,
            exclude: /(node_modules)/,
            loader: 'style-loader!css-loader!autoprefixer-loader!sass-loader!'
            }
        ]
    }
}