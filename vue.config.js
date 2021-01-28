// vue.config.js for less-loader@6.0.0
module.exports = {
	chainWebpack: (config) => {
		config.plugin('html').tap((args) => {
			args[0].title = 'Web Application';
			return args;
		});
	},
	css: {
		loaderOptions: {
			less: {
				lessOptions: {
					modifyVars: {
						'primary-color': '#403EFB',
						'link-color': '#403EFB',
						'border-radius-base': '2px',
					},
					javascriptEnabled: true,
				},
			},
		},
	},
};
