// This is where project configuration and plugin options are located.
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

function generateExcerptFromFrontMatter(file) {
	file.excerpt = file.data.excerpt
}

module.exports = {
	siteName: 'Stereotypes on Celebrities in the History',
	plugins: [
		{
			use: '@gridsome/source-filesystem',
			options: {
				path: './posts/articles/**/*.md',
				typeName: 'Articles',
			},
		},
		{
			use: '@gridsome/source-filesystem',
			options: {
				path: './posts/paper.md',
				typeName: 'Paper',
			},
		},
	],
	transformers: {
		remark: {
			grayMatter: {
				excerpt: generateExcerptFromFrontMatter,
			},
		},
	},
	templates: {
		Articles: '/articles/:slug',
		Paper: '/paper',
	},
}
