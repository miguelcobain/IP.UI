({
    baseUrl: 'src',
    paths : {
		jquery : '../lib/jquery.min'
	},
    name: '../almond',
    include: ['main'],
    insertRequire: ['main'],
    out: 'build/ip.ui.min.js',
    wrap: true,
})