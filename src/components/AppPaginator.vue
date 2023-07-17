<script>
export default {
	emits: ["page-changed"],

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
			<li class="page-item" :class="{disabled: activePage == 1}">
				<a
					class="page-link"
					href="#"
					@click.prevent="$emit('page-changed', activePage - 1)">
					<span class="user-select-none">&laquo;</span>
				</a>
			</li>

			<li
				v-for="page in nPages"
				:key="page"
				class="page-item paginator"
				:class="{active: page === activePage}">
				<span
					class="page-link"
					href="#"
					@click.prevent="$emit('page-changed', page)">
					{{ page }}
				</span>
			</li>

			<li class="page-item" :class="{disabled: activePage == nPages}">
				<a
					class="page-link"
					href="#"
					aria-label="Next"
					@click.prevent="$emit('page-changed', activePage + 1)">
					<span class="user-select-none">&raquo;</span>
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
