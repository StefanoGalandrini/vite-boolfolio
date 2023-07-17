<script>
import {store} from "../store";
import axios from "axios";

export default {
	data() {
		return {
			project: null,
			store,
		};
	},

	methods: {
		userImageUrl(image) {
			return image
				? this.store.fixedUrl + "storage/" + image
				: this.store.fixedUrl + "storage/" + "default.jpg";
		},

		formatDate(date) {
			let d = new Date(date);
			let day = d.getDate();
			let month = d.getMonth() + 1;
			let year = d.getFullYear();

			if (day < 10) day = "0" + day;
			if (month < 10) month = "0" + month;

			return day + "-" + month + "-" + year;
		},
	},

	created() {
		axios
			.get(this.store.fixedUrl + "api/projects/" + this.$route.params.slug)
			.then((response) => {
				this.project = response.data;
			});
	},
};
</script>

<template>
	<div class="container mb-5">
		<router-link
			:to="{name: 'projects'}"
			class="btn btn-primary px-4 mb-3 fs-4">
			Index
		</router-link>

		<div class="card mx-auto rounded">
			<div class="row no-gutters">
				<div
					class="col-12 col-md-4 d-flex align-items-center justify-content-center"
					style="">
					<img
						:src="project.url_image"
						:alt="project.title"
						class="ms-4 shadow img-fluid"
						style="max-width: 100%; max-height: 100%; object-fit: contain" />
				</div>

				<div class="col-12 col-md-8">
					<div class="card-body">
						<div class="row border-start ps-3">
							<div v-if="project.image" class="col-3">
								<img
									:src="userImageUrl(project.image)"
									:alt="project.title"
									class="img-fluid"
									style="max-width: 100%; height: auto" />
							</div>
							<div :class="project.image ? 'col-9' : 'col-12'">
								<h2 class="card-title fw-bold">
									Project title:
									<span class="fst-italic fw-normal text-uppercase">
										"{{ project.title }}"</span
									>
								</h2>
								<h4>- Type: {{ project.type.name }}</h4>
								<h5 class="mt-4 fw-light fst-italic fw-bold">
									- Technologies:
									<ul>
										<li
											class="fw-normal"
											v-for="(technology, index) in project.technologies"
											:key="index">
											{{ technology.name }}
										</li>
									</ul>
								</h5>

								<p class="card-text mt-5 mb-0 fw-bold">Description:</p>
								<p class="fw-normal fst-italic">{{ project.description }}</p>
								<div class="section">
									<p>Created on: {{ formatDate(project.creation_date) }}</p>
								</div>
								<p>
									URL Github:
									<a :href="project.url_repo">{{ project.url_repo }}</a>
								</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<style lang="scss" scoped>
.section {
	border-top: 1px solid #aaaaaa;
	padding-top: 0.5rem;
}
</style>
