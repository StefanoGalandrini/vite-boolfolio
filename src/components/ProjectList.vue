<script>
import axios from "axios";

export default {
	data() {
		return {
			urlServer: "http://localhost:8000/api/",
			arrProjects: [],
			activePage: 1,
			nPages: 0,
		};
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
	},

	created() {
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
		</li>
	</ul>

	<nav>
		<ul class="pagination">
			<li class="page-item">
				<a class="page-link" href="#" aria-label="Previous">
					<span aria-hidden="true">&laquo;</span>
					<!-- <span class="sr-only">Previous</span> -->
				</a>
			</li>

			<li
				v-for="page in nPages"
				:key="page"
				class="page-item paginator"
				:class="{active: page === activePage}">
				<span class="page-link" href="#" @click="changePage(page)">
					{{ page }}
				</span>
			</li>

			<li class="page-item">
				<a class="page-link" href="#" aria-label="Next">
					<span aria-hidden="true">&raquo;</span>
					<!-- <span class="sr-only">Next</span> -->
				</a>
			</li>
		</ul>
	</nav>
</template>

<style lang="scss" scoped>
.paginator {
	cursor: pointer;
}
</style>
