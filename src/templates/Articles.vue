<template>
	<Layout>
		<div class="reading" v-html="$page.articles.content" />
	</Layout>
</template>

<page-query>
query($id: ID!) {
	articles(id: $id) {
		title
		content
	}
}
</page-query>

<script>
export default {
  metaInfo() {
    return {
      title: this.$page.articles.title
    }
  }
}
</script>

<style lang="scss" scoped>
.reading {
	line-height: 2;
}
</style>
