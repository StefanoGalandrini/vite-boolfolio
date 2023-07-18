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
	<div class="grid-container">
		<div class="grid-item" v-for="project in arrProjects" :key="project.id">
			<router-link
				class="image-link"
				:to="{name: 'show', params: {slug: project.slug}}">
				<img
					class="round-image"
					:src="project.url_image"
					:alt="project.title" />
			</router-link>
		</div>
	</div>
</template>

<style lang="scss" scoped>
.grid-container {
	width: 80%;
	margin-inline: auto;
	display: flex;
	flex-wrap: wrap;
	justify-content: center;
	align-items: center;
	// height: 80vh;
}

.grid-item {
	width: 23%;
	height: auto;
}

.image-link {
	display: block;
	width: 100%;
	height: 100%;
	border: 1px solid grey;
}

.round-image {
	width: 100%;
	height: auto;
	object-fit: cover;
}
</style>
