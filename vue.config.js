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
						'primary-color': '#1DA57A',
						'link-color': '#1DA57A',
						'border-radius-base': '2px',
					},
					javascriptEnabled: true,
				},
			},
		},
	},
};
