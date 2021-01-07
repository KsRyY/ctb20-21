<template>
	<Layout>
		<h1>Articles</h1>
		<ul>
			<li v-for="edge in $page.allArticles.edges" :key="edge.node.id">
				<g-link :to="edge.node.path">{{ edge.node.title }}</g-link>: {{ edge.node.excerpt }}
			</li>
		</ul>
	</Layout>
</template>

<script>
export default {

}
</script>

<page-query>
query {
	allArticles {
		edges {
			node {
				id
				title
				excerpt
				path
			}
		}
	}
}
</page-query>

<style>

</style>
