<script>
export default {
	data() {
		return {
			typeId: null,
			technologyId: null,
		};
	},

	props: {
		arrTypes: {
			type: Array,
			required: true,
		},
		arrTechnologies: {
			type: Array,
			required: true,
		},
	},

	watch: {
		arrTypes() {
			this.typeId = this.arrTypes.length ? this.arrTypes[0].id : null;
		},

		arrTechnologies() {
			this.technologyId = this.arrTechnologies.length
				? this.arrTechnologies[0].id
				: null;
		},
	},
};
</script>

<template>
	<div class="d-flex">
		<form class="ms-5">
			<h4>Select Types</h4>
			<div class="d-flex align-items-center">
				<label for="type">Type</label>
				<select
					id="type"
					class="form-select ms-2"
					@change="$emit('changeType', typeId)"
					v-model="typeId">
					<option
						v-for="prtype in arrTypes"
						:key="prtype.id"
						:value="prtype.id">
						{{ prtype.name }}
					</option>
				</select>
			</div>
		</form>

		<form class="ms-5">
			<h4>Select Tecnologies</h4>
			<div class="d-flex align-items-center">
				<label for="type">Tecnology</label>
				<select
					id="technology"
					class="form-select ms-2"
					@change="$emit('changeTechnology', technologyId)"
					v-model="technologyId">
					<option
						v-for="technology in arrTechnologies"
						:key="technology.id"
						:value="technology.id">
						{{ technology.name }}
					</option>
				</select>
			</div>
		</form>
	</div>
</template>

<style></style>
