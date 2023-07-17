<script>
import AppList from "./components/AppList.vue";
import AppCard from "./components/AppCard.vue";

export default {
	components: {
		AppList,
		AppCard,
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
	<h1 class="fw-bold text-center text-uppercase">Boolpress</h1>
	<!-- <router-view></router-view> -->
	<AppList @project-selected="handleProjectSelected" />
	<AppCard v-if="selectedProject" :project="selectedProject" />
</template>

<style lang="scss">
@import "bootstrap/scss/bootstrap";
</style>
