<script>
import {store} from "../store";

export default {
	data() {
		return {
			searchString: "",
			store,
		};
	},

	methods: {
		executeSearch() {
			this.store.search = this.searchString;
			this.$router.push({
				name: "project.index",
				query: {q: this.searchString},
			});
		},

		clearSearch() {
			this.store.search = null;
			this.$router.push({query: {...this.$route.query, q: null}});
		},

		resetProjectView() {
			this.store.search = null;
			this.$router.push({name: "projects", query: {}});
		},
	},

	created() {
		this.clearSearch();
	},

	watch: {
		$route() {
			this.searchString = "";
			this.store.search = null;
		},
	},
};
</script>

<template>
	<nav class="navbar navbar-expand-lg navbar-light bg-dark px-5">
		<div class="container-fluid">
			<router-link class="navbar-brand text-light" :to="{name: 'home'}"
				>Boolpress</router-link
			>

			<button
				class="navbar-toggler"
				type="button"
				data-bs-toggle="collapse"
				data-bs-target="#navbarSupportedContent"
				aria-controls="navbarSupportedContent"
				aria-expanded="false"
				aria-label="Toggle navigation">
				<span class="navbar-toggler-icon"></span>
			</button>

			<div class="collapse navbar-collapse" id="navbarSupportedContent">
				<ul class="navbar-nav me-auto mb-2 mb-lg-0">
					<li class="nav-item">
						<router-link
							class="nav-link active text-light"
							:to="{name: 'projects'}"
							@click="resetProjectView">
							Projects
						</router-link>
					</li>

					<li class="nav-item">
						<router-link
							:to="{name: 'about'}"
							class="nav-link active text-light"
							>About</router-link
						>
					</li>

					<li class="nav-item">
						<router-link
							:to="{name: 'contact'}"
							class="nav-link active text-light"
							>Contact Us</router-link
						>
					</li>
				</ul>
				<form class="d-flex" role="search" @submit.prevent="executeSearch">
					<input
						class="form-control me-2"
						type="search"
						placeholder="Search"
						aria-label="Search"
						name="q"
						v-model="searchString" />
					<button class="btn btn-outline-success" type="submit">Search</button>
				</form>
			</div>
		</div>
	</nav>
</template>

<style lang="scss" scoped>
.navbar {
	height: 8vh;
}
</style>
