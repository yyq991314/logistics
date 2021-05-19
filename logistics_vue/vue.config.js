module.exports = {
	baseUrl: './',
	assetsDir: 'static',
	productionSourceMap: false,
	devServer: {
		open: false, //是否自动弹出浏览器页面
		host: "localhost",
		port: '8080',
		https: false,
		hotOnly: false,
		proxy: {
			'/api': {
				target: 'http://localhost:80/api',
				changeOrigin: true,
				ws: true,
				pathRewrite: {
					'/api': ''
				}
			}
		},
	}

}