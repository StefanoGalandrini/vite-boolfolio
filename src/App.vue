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
	<AppNav class="header" />

	<div class="main container-fluid main-app overflow-auto">
		<router-view></router-view>
	</div>

	<AppFooter class="footer" />
</template>

<style lang="scss">
@import "bootstrap/scss/bootstrap";

.header {
	max-height: 8vh;
}

.main {
	max-height: 80vh;
}

.footer {
	height: 12vh;
}

.main-app {
	height: 80vh;
	overflow: scroll;
}
</style>
