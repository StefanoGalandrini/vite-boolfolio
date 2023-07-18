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
	height: 8vh;
}

.main {
	height: 84vh;
}

.footer {
	height: 8vh;
}
</style>
