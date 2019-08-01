const path = require("path");
const VueLoaderPlugin = require('vue-loader/lib/plugin');
module.exports = {
    entry: './src/main.js', //入口
    mode: 'development', //开发阶段
    output: {//输出
        filename: 'bundle.js',//最终打包后的文件名
        path: __dirname + '/dist'    //打包好的放到哪里
    },
    module: {
        rules: [{//规则
            test: /\.css$/,//匹配到的以.css结尾的文件用use的两个模块处理
          
            use: ['style-loader', 'css-loader']//从右向左执行
        },
        {
            test: /\.(eot|svg|ttf|woff|woff2)(\?\S*)?$/,
            loader: 'file-loader'
        },
        {
            test: /\.less$/,
            loader: "style-loader!css-loader!less-loader",
        },
        {
            test: /\.(png|jpg)$/,
　　　　　　 loader: 'url-loader?limit=8192'
        },
        {
            test:/\.sass$/,
        use:['vue-style-loader', 'css-loader', 'sass-loader']
        },
        {
            test: /\.vue$/,
            loader: ['vue-loader']
        },
        {
            test: /\.m?js$/,
            exclude: /(node_modules|bower_components)/,
            use: {
                loader: 'babel-loader',
                options: {
                    presets: ['@babel/preset-env'],
                    plugins: ['@babel/plugin-proposal-object-rest-spread']
                }
            }
        }]
    },
    devServer: {
        contentBase: path.join(__dirname, "./dist"),
        compress: true,
        port: 3000,
        hot: true
     },
     plugins: [
    
        new VueLoaderPlugin()
      ],
    resolve: {
        alias: {
            'vue$': 'vue/dist/vue.js'
        }
    }
}