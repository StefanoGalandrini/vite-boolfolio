<script>
import axios from "axios";

export default {
	data() {
		return {
			arrProjects: [],
			nPages: 0,
		};
	},

	// methods: {
	// 	getProjects()
	// 	{

	// }

	created() {
		axios
			.get("http://localhost:8000/api/projects", {
				params: this.nPage,
			})
			.then((response) => {
				this.arrProjects = response.data.data;
				this.nPages;
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
</template>

<style lang="scss"></style>
