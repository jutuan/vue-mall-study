module.exports = {
    configureWebpack:{
        resolve:{
            // extensions:[]
            alias:{
                'assets':'@/assets',
                'commonjs':'@/commonjs',
                'network':'@/network',
                'views':'@/views',
                'components':'@/components',
            }
        }
    }
}