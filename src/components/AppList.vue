<script>
import axios from "axios";
import AppPaginator from "./AppPaginator.vue";
import AppCard from "./AppCard.vue";
import {store} from "../store";

export default {
	emits: ["project-selected"],

	components: {
		AppPaginator,
		AppCard,
	},

	data() {
		return {
			arrProjects: [],
			activePage: 1,
			nPages: 0,
			store,
		};
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
				.get(this.store.fixedUrl + "api/projects", {
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
	<h3 class="text-center fw-bold fst-italic">Project List</h3>

	<div
		class="row row-cols-1 row-cols-sm-2 row-cols-md-4 row-cols-xl-6 g-4 my-5 px-5">
		<div class="col" v-for="project in arrProjects" :key="project.id">
			<AppCard :project="project" />
		</div>
	</div>

	<div class="d-flex justify-content-end me-5">
		<AppPaginator
			:n-pages="nPages"
			:active-page="activePage"
			@page-changed="changePage" />
	</div>
</template>

<style lang="scss" scoped>
.color-button {
	border: none;
	background-color: rgb(68, 0, 20);
	color: rgb(180, 180, 180);
	padding: 0.25rem 1rem;
	margin: 0.5rem 0;
	border-radius: 50rem;
	transition: all 250ms;

	&:hover {
		box-shadow: 0 0 2px 1px rgb(0, 0, 0, 0.5);
		background-color: rgb(100, 23, 36);
		color: white;
	}
}

.description {
	width: 20ch;
	white-space: nowrap;
	overflow: hidden;
	text-overflow: ellipsis;
}
</style>
