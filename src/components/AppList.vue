<script>
import axios from "axios";
import AppPaginator from "./AppPaginator.vue";
import AppCard from "./AppCard.vue";
import {store} from "../store";

export default {
	components: {
		AppPaginator,
		AppCard,
	},

	data() {
		return {
			arrProjects: [],
			arrTypes: [],
			arrTechnologies: [],
			activePage: 1,
			nPages: 0,
			store,
			selectedType: null,
			selectedTechnology: null,
		};
	},

	methods: {
		changePage(page) {
			this.activePage = page;
			this.getProjects();
		},

		getProjects() {
			axios
				.get(this.store.fixedUrl + "api/projects", {
					params: {
						page: this.activePage,
						q: new URLSearchParams(window.location.search).get("q"),
					},
				})
				.then((response) => {
					this.arrProjects = response.data.results.data;
					this.nPages = response.data.results.last_page;
				});
		},

		getTypes() {
			axios.get(this.store.fixedUrl + "api/types").then((response) => {
				this.arrTypes = response.data.results;
			});
		},

		getTechnologies() {
			axios.get(this.store.fixedUrl + "api/technologies").then((response) => {
				this.arrTechnologies = response.data.results;
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
		"$route.query.q": function () {
			this.getProjects();
		},

		currentPage() {
			this.getProjects();
		},
	},

	created() {
		this.getProjects();
		this.getTypes();
		this.getTechnologies();
	},
};
</script>

<template>
	<div class="d-flex">
		<form class="ms-5">
			<h4>Select Types</h4>
			<div class="d-flex align-items-center">
				<label for="type">Type</label>
				<select
					id="type"
					class="form-select w-75 ms-2"
					v-model="selectedType"
					@change="
						$router.push({name: 'projects', query: {type: selectedType}})
					">
					<option v-for="type in arrTypes" :key="type.id" :value="type.id">
						{{ type.name }}
					</option>
				</select>
			</div>
		</form>

		<form class="ms-5">
			<h4>Select Tecnologies</h4>
			<div class="d-flex align-items-center">
				<label for="type">Tecnology</label>
				<select
					id="technology"
					class="form-select w-75 ms-2"
					v-model="selectedTechnology"
					@change="
						$router.push({
							name: 'projects',
							query: {technology: selectedTechnology},
						})
					">
					<option
						v-for="technology in arrTechnologies"
						:key="technology.id"
						:value="technology.id">
						{{ technology.name }}
					</option>
				</select>
			</div>
		</form>
	</div>

	<div class="row row-cols-6 g-4 my-0 px-5">
		<div class="col" v-for="project in arrProjects" :key="project.id">
			<AppCard :project="project" />
		</div>
	</div>

	<div class="d-flex justify-content-end me-5 mt-3">
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
