<script>
import axios from "axios";
import Paginator from "./Paginator.vue";

export default {
	data() {
		return {
			urlServer: "http://localhost:8000/api/",
			arrProjects: [],
			activePage: 1,
			nPages: 0,
			selectedProject: null,
		};
	},

	components: {
		Paginator,
	},

	methods: {
		changePage(page) {
			this.activePage = page;
			this.getProjects();
		},

		getProjects() {
			axios
				.get(this.urlServer + "projects", {
					params: {
						page: this.activePage,
					},
				})
				.then((response) => {
					this.arrProjects = response.data.data;
					this.nPages = response.data.last_page;
				});
		},

		selectProject(project) {
			this.selectedProject = project;
		},
	},

	created() {
		// this.getProjects();
		axios
			.get(this.urlServer + "projects", {
				params: {
					page: this.activePage,
				},
			})
			.then((response) => {
				this.arrProjects = response.data.data;
				this.nPages = response.data.last_page;
			});
	},
};
</script>

<template>
	<h2>I nostri progetti</h2>

	<ul>
		<li v-for="project in arrProjects" :key="project.id">
			{{ project.title }}
			<button class="show" @click="selectProject(project)">SHOW</button>
		</li>
	</ul>

	<Paginator
		:n-pages="nPages"
		:active-page="activePage"
		@page-changed="changePage" />

	<ProjectCard
		class="card-container"
		v-if="selectedProject"
		:project="selectedProject" />
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
