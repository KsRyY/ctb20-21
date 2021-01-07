<template>
	<Layout>

		<!-- Learn how to use images here: https://gridsome.org/docs/images -->
		<div class="header-image">
		<g-image alt="China Thinks Big Logo" src="~/chinathinksbig.png" />
	</div>

		<h1>Stereotypes on Celebrities in the History</h1>

		<p>
			This website hosts materials about our China Thinks Big research -- "Stereotypes on Celebrities in the History".
		</p>

		<ul>
			<li>
				To learn more about China Thinks Big, visit their <a href="https://www.chinathinksbig.org/">official website</a>.
			</li>
			<li>
				<g-link to="/articles/">Articles</g-link>: articles about celebrities that we have researched.
			</li>
			<li>
				<g-link to="/paper/">Paper</g-link>: our research paper.
			</li>
			<li>
				<g-link to="/about/">About</g-link>: learn more about our team.
			</li>
		</ul>

		<p class="home-links">
			<a href="https://gridsome.org/docs/" target="_blank" rel="noopener">Gridsome Docs</a>
			<a href="https://github.com/gridsome/gridsome" target="_blank" rel="noopener">GitHub</a>
		</p>

	</Layout>
</template>

<script>
export default {
	metaInfo: {
		title: 'Home'
	}
}
</script>

<style>
.home-links a {
	margin-right: 1rem;
}
.header-image {
	display: flex;
	justify-content: center;
}
</style>
