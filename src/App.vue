<script>
import ProjectList from "./components/ProjectList.vue";
import ProjectCard from "./components/ProjectCard.vue";

export default {
	components: {
		ProjectList,
		ProjectCard,
	},

	data() {
		return {
			selectedProject: null,
		};
	},

	methods: {
		handleProjectSelected(project) {
			this.selectedProject = project;
		},
	},
};
</script>

<template>
	<h1>Boolpress</h1>
	<ProjectList @project-selected="handleProjectSelected" />
	<ProjectCard v-if="selectedProject" :project="selectedProject" />
</template>

<style lang="scss">
@import "bootstrap/scss/bootstrap";
</style>
