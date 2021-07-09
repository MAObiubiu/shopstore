module.exports = {
    devServer: {
        host: "localhost",
        port: 8081, // 端口号
        https: false, // https:{type:Boolean}
        // open: true, //配置自动启动浏览器
        //配置跨域
        proxy: {
            '/api': {
                // 要代理的地址
                target: 'http://localhost:3000',
                ws:true,
                changeOrigin: true,
                //重写接口
                pathRewrite: {
                    '^/api': 'http://localhost:3000'
                },
            }
        }
    }
}