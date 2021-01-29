// webpack.config.js
module.exports = {
	rules: [
		{
			test: /\.less?$/,
			use: [
				'vue-style-loader',
				'css-loader',
				'less-loader',
				{
					loader: 'style-loader',
				},
				{
					loader: 'css-loader', // translates CSS into CommonJS
				},
				{
					loader: 'less-loader', // compiles Less to CSS
					options: {
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
			],
			// ...other rules
		},
	],
	// ...other config
};
