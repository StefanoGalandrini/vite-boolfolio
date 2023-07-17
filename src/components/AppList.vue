<script>
import axios from "axios";
import AppPaginator from "./AppPaginator.vue";
import {store} from "../store";

export default {
	emits: ["project-selected"],

	data() {
		return {
			arrProjects: [],
			activePage: 1,
			nPages: 0,
			store,
		};
	},

	components: {
		AppPaginator,
	},

	methods: {
		selectProject(project) {
			this.$emit("project-selected", project);
		},

		changePage(page) {
			this.activePage = page;
			this.getProjects();
		},

		getProjects() {
			axios
				.get(this.store.urlServer + "projects", {
					params: {
						page: this.activePage,
					},
				})
				.then((response) => {
					this.arrProjects = response.data.data;
					this.nPages = response.data.last_page;
				});
		},

		toPrevPage() {
			this.activePage != 1 ? this.activePage-- : null;
		},

		toNextPage() {
			this.activePage != this.nPages ? this.activePage++ : null;
		},
	},

	watch: {
		currentPage() {
			this.getProjects();
		},
	},

	created() {
		this.getProjects();
	},
};
</script>

<template>
	<h2>I nostri progetti</h2>

	<ul>
		<li v-for="project in arrProjects" :key="project.id">
			{{ project.title }}
			<!-- <router-link class="show" :to={ name: projects.show }></router-link> -->
			<button class="show" @click="selectProject(project)">SHOW</button>
		</li>
	</ul>

	<AppPaginator
		:n-pages="nPages"
		:active-page="activePage"
		@page-changed="changePage" />
</template>

<style lang="scss" scoped>
button.show {
	border: none;
	background-color: rgb(34, 0, 17);
	color: rgb(180, 180, 180);
	padding: 0.25rem 1rem;
	margin: 0.5rem 0;
	border-radius: 50rem;
	transition: all 250ms;

	&:hover {
		background-color: rgb(80, 32, 59);
		color: white;
	}
}
</style>
