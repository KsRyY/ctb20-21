<template>
	<div class="layout">
		<header class="header">
		<strong>
			<g-link to="/">{{ $static.metadata.siteName }}</g-link>
		</strong>
		<nav class="nav">
			<g-link class="nav__link" to="/">Home</g-link>
			<g-link class="nav__link" to="/articles/">Articles</g-link>
			<g-link class="nav__link" to="/paper/">Paper</g-link>
			<g-link class="nav__link" to="/about/">About</g-link>
		</nav>
		</header>
		<div class="content">
			<slot />
		</div>
	</div>
</template>

<static-query>
query {
	metadata {
		siteName
	}
}
</static-query>

<style lang="scss">
body {
	font-family: Raleway,Roboto,"Helvetica Neue",Arial,sans-serif;
	margin: 0;
	padding: 0;
	line-height: 1.5;
}

.layout {
	margin: 0 auto;
	min-height: 100vh;
	max-height: 100vh;
	display: grid;
	grid-template-rows: 80px 80px calc(100vh - 320px) 160px;
	grid-template-columns: 1fr 760px 1fr;
	grid-template-areas:
		". header ."
		". content ."
		"toc-left content toc-right"
		". content .";
}

.header {
	display: flex;
	justify-content: space-between;
	align-items: center;
	margin-bottom: 20px;
	height: 80px;
	grid-area: header;
}

.nav__link {
	margin-left: 20px;
}

.content {
	grid-area: content;
}

.toc-left {
	grid-area: toc-left;
}
</style>
