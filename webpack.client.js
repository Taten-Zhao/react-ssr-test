const path = require('path')

module.exports = {
    mode: 'development',
    entry: './client/index.js',
    output:{
        filename:'bundle_client.js',
        path:path.resolve(__dirname,'public')
    },
    module:{
        rules:[{
            test:/\.js$/,
            //支持jsx语法的写法
            loader:'babel-loader',
            exclude:'/node_modules/',
            options:{
                presets:['@babel/preset-react',['@babel/preset-env']]
            }

        }]
    }
}