<script>
export default {
	data() {
		return {
			$searchString: "",
		};
	},

	// updated() {
	// 	this.searchString = new URLSearchParams(window.location.search).get("q");
	// },
};
</script>

<template>
	<nav class="navbar navbar-expand-lg navbar-light bg-dark">
		<div class="container-fluid">
			<router-link class="navbar-brand text-light" :to="{name: 'home'}"
				>Boolpress</router-link
			>

			<button
				class="navbar-toggler"
				type="button"
				data-bs-toggle="collapse"
				data-bs-target="#navbarSupportedContent"
				aria-controls="navbarSupportedContent"
				aria-expanded="false"
				aria-label="Toggle navigation">
				<span class="navbar-toggler-icon"></span>
			</button>

			<div class="collapse navbar-collapse" id="navbarSupportedContent">
				<ul class="navbar-nav me-auto mb-2 mb-lg-0">
					<li class="nav-item">
						<router-link
							class="nav-link active text-light"
							:to="{name: 'projects'}">
							Projects
						</router-link>
					</li>

					<li class="nav-item">
						<router-link
							:to="{name: 'about'}"
							class="nav-link active text-light"
							>About</router-link
						>
					</li>
				</ul>
				<form
					class="d-flex"
					role="search"
					@submit.prevent="
						$router.push({name: 'projects.index', query: {q: searchString}})
					">
					<input
						class="form-control me-2"
						type="search"
						placeholder="Search"
						name="q"
						aria-label="Search" />
					<button class="btn btn-outline-success" type="submit">Search</button>
				</form>
			</div>
		</div>
	</nav>
</template>

<style></style>
