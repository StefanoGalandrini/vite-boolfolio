<script>
import axios from "axios";
import AppPaginator from "./AppPaginator.vue";
import AppCard from "./AppCard.vue";
import AppFilter from "./AppFilter.vue";
import {store} from "../store";

export default {
	components: {
		AppPaginator,
		AppCard,
		AppFilter,
	},

	data() {
		return {
			arrProjects: [],
			arrTypes: [],
			arrTechnologies: [],
			typeId: null,
			technologyId: null,
			activePage: 1,
			nPages: 0,
			store,
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
						q: this.store.search,
						type: this.typeId,
						technology: this.technologyId,
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

		manageChangeType(typeId) {
			this.typeId = typeId;
			this.getProjects();
		},

		manageChangeTechnology(technologyId) {
			this.technologyId = technologyId;
			this.getProjects();
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

		"store.search"() {
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
	<AppFilter
		:arrTypes="arrTypes"
		:arrTechnologies="arrTechnologies"
		@changeType="manageChangeType($event)"
		@changeTechnology="manageChangeTechnology($event)" />

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

select {
	width: 20ch !important;
}
</style>
