<script>
import AppFooter from "./components/AppFooter.vue";
import AppNav from "./components/AppNav.vue";

export default {
	components: {
		AppNav,
		AppFooter,
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
	<AppNav />

	<div class="container-fluid">
		<h1 class="fw-bold text-center text-uppercase">Boolpress</h1>
		<router-view></router-view>
	</div>

	<AppFooter />
</template>

<style lang="scss">
@import "bootstrap/scss/bootstrap";
</style>
