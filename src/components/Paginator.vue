<script>
export default {
	props: {
		nPages: {
			type: Number,
			required: true,
		},
		activePage: {
			type: Number,
			required: true,
		},
	},
};
</script>

<template>
	<!-- Pagination -->
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
				<span class="page-link" href="#" @click="$emit('page-changed', page)">
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
