<script>
import axios from "axios";
import {store} from "../store";

export default {
	data() {
		return {
			store,
			arrProjects: [],
		};
	},
	created() {
		axios.get(this.store.fixedUrl + "api/projects/random").then((response) => {
			console.log(response.data.results);
			this.arrProjects = response.data.results;
		});
	},
};
</script>

<template>
	<h1 class="fw-bold text-center text-uppercase">Boolpress</h1>

	<div class="grid-container">
		<div class="grid-item" v-for="project in arrProjects" :key="project.id">
			<router-link
				class="image-link"
				:to="{name: 'show', params: {slug: project.slug}}">
				<img class="image" :src="project.url_image" :alt="project.title" />
			</router-link>
		</div>
	</div>
</template>

<style lang="scss" scoped>
.grid-container {
	height: 70vh;
	width: 70%;
	margin: 0 auto;
	display: flex;
	flex-wrap: wrap;
	justify-content: center;
	align-items: center;
}

.grid-item {
	width: 24%;
	height: calc(70vh / 3);
}

.image-link {
	display: block;
	width: 100%;
	border: 1px solid grey;
}

.image {
	width: 100%;
	object-fit: cover;
}
</style>
