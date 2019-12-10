const path = require('path')
const nodeExternals = require('webpack-node-externals')

module.exports = {
    target: 'node',
    mode: 'development',
    entry: './server/index.js',
    externals: [nodeExternals()],
    output:{
        filename:'bundle_service.js',
        path:path.resolve(__dirname,'build')
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