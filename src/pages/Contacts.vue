<script>
import {store} from "../store";
import axios from "axios";

export default {
	data() {
		return {
			store,
			name: "",
			email: "",
			message: "",
			newsletter: true,
			showSuccess: false,
			isSending: false,
			showError: false,
			errors: {},
		};
	},
	methods: {
		sendLead() {
			this.isSending = true;
			this.showSuccess = false;
			this.showError = false;
			this.errors = {};
			axios
				.post(this.store.fixedUrl + "api/leads", {
					name: this.name,
					email: this.email,
					message: this.message,
					newsletter: this.newsletter,
				})
				.then((response) => {
					this.isSending = false;

					if (response.data.success) {
						this.showSuccess = true;
						this.resetForm();
					} else {
						this.showError = true;
						this.errors = response.data.errors;
					}
				});
		},
		resetForm() {
			this.name = "";
			this.email = "";
			this.message = "";
			this.newsletter = true;
		},
	},
};
</script>

<template>
	<h1 class="text-center">Contact Us</h1>

	<div
		v-if="showSuccess"
		class="alert alert-success alert-dismissible fade show w-50 mx-auto"
		role="alert">
		Messaggio inviato con successo!
		<button
			type="button"
			class="btn-close"
			aria-label="Close"
			@click="showSuccess = false"></button>
	</div>

	<div
		v-if="showError"
		class="alert alert-danger alert-dismissible fade show w-50 mx-auto"
		role="alert">
		Errore nell'invio del messaggio
		<button
			type="button"
			class="btn-close"
			aria-label="Close"
			@click="showError = false"></button>
	</div>

	<form @submit.prevent="sendLead" class="w-50 mx-auto" novalidate>
		<div class="mb-3">
			<label for="name" class="form-label">Name</label>
			<input
				type="text"
				class="form-control"
				:class="{'is-invalid': errors.name}"
				id="name"
				v-model="name" />
			<div class="invalid-feedback">
				<template v-for="errorMessage in errors.name" :key="errorMessage">
					{{ errorMessage }}<br />
				</template>
			</div>
		</div>

		<div class="mb-3">
			<label for="email" class="form-label">Email address</label>
			<input
				type="email"
				class="form-control"
				:class="{'is-invalid': errors.email}"
				id="email"
				v-model="email" />
			<div class="invalid-feedback">
				<template v-for="errorMessage in errors.email" :key="errorMessage">
					{{ errorMessage }}<br />
				</template>
			</div>
		</div>

		<div class="mb-3">
			<label for="message" class="form-label">Message</label>
			<textarea
				class="form-control"
				:class="{'is-invalid': errors.message}"
				id="message"
				rows="5"
				v-model="message"></textarea>
			<div class="invalid-feedback">
				<template v-for="errorMessage in errors.message" :key="errorMessage">
					{{ errorMessage }}<br />
				</template>
			</div>
		</div>

		<div class="mb-3 form-check">
			<input
				type="checkbox"
				class="form-check-input"
				:class="{'is-invalid': errors.newsletter}"
				id="newsletter"
				v-model="newsletter" />
			<label class="form-check-label" for="newsletter"
				>Subscribe to newsletter</label
			>
			<div class="invalid-feedback">
				<template v-for="errorMessage in errors.newsletter" :key="errorMessage">
					{{ errorMessage }}<br />
				</template>
			</div>
		</div>

		<!-- Button with Spinner -->
		<button type="submit" class="btn btn-info btn-lg" :disabled="isSending">
			Submit
			<span
				v-if="isSending"
				class="spinner-border spinner-border-sm"
				role="status"
				aria-hidden="true"></span>
		</button>
	</form>
</template>

<style lang="scss" scoped>
h1 {
	color: rgb(10, 22, 37);
}
</style>
