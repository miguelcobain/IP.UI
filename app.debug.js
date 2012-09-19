({
    baseUrl: 'src',
    paths : {
		jquery : '../lib/jquery.min'
	},
    name: '../almond',
    include: ['main'],
    insertRequire: ['main'],
    out: 'build/ip.ui.js',
    wrap: true,
    optimize: 'none'
})