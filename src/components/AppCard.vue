<script>
import {store} from "../store";

export default {
	props: {
		project: {
			type: Object,
			required: true,
		},
	},

	data() {
		return {
			store,
		};
	},

	methods: {
		// userImageUrl(image) {
		// 	return image
		// 		? this.store.fixedUrl + "storage/" + image
		// 		: this.store.fixedUrl + "storage/" + "default.jpg";
		// },
	},
};
</script>

<template>
	<div class="card h-100">
		<img class="card-img-top" :src="project.url_image" :alt="project.title" />
		<div class="card-body d-flex flex-column align-items-center">
			<h5 class="card-title text-center fw-bold">{{ project.title }}</h5>
			<div
				class="d-flex flex-column justify-content-start align-items-center flex-grow-1">
				<img
					:src="store.userImageUrl(project.image)"
					alt=""
					class="mx-2 w-50 my-3" />
				<p class="card-text description mx-2">{{ project.description }}</p>
			</div>
			<router-link
				:to="{name: 'show', params: {slug: project.slug}}"
				class="btn color-button w-75 my-2">
				Show Details
			</router-link>
		</div>
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
