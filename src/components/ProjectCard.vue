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
	<div>
		<h3>{{ project.title }}</h3>
	</div>
</template>

<style lang="scss" scoped></style>
