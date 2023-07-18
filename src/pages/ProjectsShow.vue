<script>
import {store} from "../store";
import axios from "axios";
import {DateTime} from "luxon";
import Projects404 from "./Projects404.vue";

export default {
	components: {
		Projects404,
	},

	data() {
		return {
			project: null,
			store,
			is404: false,
			luxon: DateTime,
		};
	},

	created() {
		axios
			.get(this.store.fixedUrl + "api/projects/" + this.$route.params.slug)
			.then((response) => {
				if (response.data.success) {
					this.project = response.data.results;
				} else {
					this.is404 = true;
				}
			});
	},
};
</script>

<template>
	<Projects404 v-if="this.is404" />
	<template v-else-if="project">
		<div class="container mb-5">
			<h2 class="card-title fw-bold mb-5 mt-4 text-center">
				Project title:
				<span class="fst-italic fw-normal text-uppercase">
					"{{ project.title }}"</span
				>
			</h2>
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
										:src="store.userImageUrl(project.image)"
										:alt="project.title"
										class="img-fluid"
										style="max-width: 100%; height: auto" />
								</div>
								<div :class="project.image ? 'col-9' : 'col-12'">
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
										<p>
											Created on:
											{{
												luxon
													.fromFormat(project.creation_date, "yyyy-LL-dd")
													.toFormat("dd-MM-yyyy")
											}}
										</p>
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
</template>

<style lang="scss" scoped>
.section {
	border-top: 1px solid #aaaaaa;
	padding-top: 0.5rem;
}
</style>
