<script>
import ProjectList from "./components/ProjectList.vue";
import ProjectCard from "./components/ProjectCard.vue";

export default {
	components: {
		ProjectList,
		ProjectCard,
	},
};
</script>

<template>
	<h1>Boolpress</h1>
	<ProjectList />
	<ProjectCard />
</template>

<style lang="scss">
@import "bootstrap/scss/bootstrap";
</style>
