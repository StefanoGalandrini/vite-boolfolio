<script>
export default {
	props: {
		project: {
			type: Object,
			required: true,
		},
	},
};
</script>

<template>
	<div class="card mx-auto rounded">
		<div class="row no-gutters">
			<div
				class="col-12 col-md-4 d-flex align-items-center justify-content-center">
				<img
					:src="project.url_image"
					:alt="project.title"
					class="ms-4 shadow img-fluid"
					style="max-width: 100%; max-height: 100%; object-fit: contain" />
			</div>

			<div class="col-12 col-md-8">
				<div class="card-body">
					<div class="row border-start ps-3">
						<!-- Loaded image -->
						<div class="col-3" v-if="project.image">
							<img
								:src="`http://localhost:8000/storage/${project.image}`"
								:alt="project.title"
								class="img-fluid"
								style="max-width: 80%; height: auto" />
						</div>

						<div class="col-{{ project.image ? '9' : '12' }}"></div>
						<div class="col-12">
							<h2 class="card-title">
								Project
								<span class="fst-italic text-uppercase">
									"{{ project.title }}"</span
								>
							</h2>
							<h4>- Type: {{ project.type.name }}</h4>
							<h5 class="mt-4 fw-light fst-italic">
								- Technologies:
								{{ project.technologies.map((t) => t.name).join(", ") }}
							</h5>
							<p class="card-text mt-5">Description:</p>
							<p>{{ project.description }}</p>
							<ul class="list-group list-group-flush">
								<li class="list-group-item">
									<p>
										Created on:
										{{ new Date(project.creation_date).toLocaleDateString() }}
									</p>
								</li>
								<li class="list-group-item">
									<p>URL Github</p>
									<a :href="project.url_repo">{{ project.url_repo }}</a>
								</li>
							</ul>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<style lang="scss" scoped></style>
