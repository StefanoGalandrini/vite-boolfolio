<script>
import axios from "axios";
import AppPaginator from "./AppPaginator.vue";
import {store} from "../store";

export default {
	emits: ["project-selected"],

	components: {
		AppPaginator,
	},

	data() {
		return {
			arrProjects: [],
			activePage: 1,
			nPages: 0,
			fixedUrl: "http://localhost:8000/storage/",
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

		userImageUrl(image) {
			return image
				? "http://localhost:8000/" + "storage/" + image
				: "http://localhost:8000/" + "storage/default.jpg";
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
			<div class="card h-100">
				<img
					class="card-img-top"
					:src="project.url_image"
					:alt="project.title" />
				<div class="card-body d-flex flex-column align-items-center">
					<h5 class="card-title text-center fw-bold">{{ project.title }}</h5>
					<div
						class="d-flex flex-column justify-content-center align-items-center flex-grow-1">
						<img
							:src="userImageUrl(project.image)"
							alt=""
							class="mx-2 w-50 my-3" />
						<p class="card-text mx-2">
							Some quick example text to build on the card title and make up the
							bulk of the card's content.
						</p>
					</div>
					<a href="#" class="btn color-button w-75 my-3">Show Project</a>
				</div>
			</div>
		</div>
	</div>

	<!-- <ul> -->
	<!-- <li v-for="project in arrProjects" :key="project.id"> -->
	<!-- <router-link class="show" :to={ name: projects.show }></router-link> -->
	<!-- <button class="show" @click="selectProject(project)">SHOW</button>
		</li>
	</ul> -->

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
</style>
