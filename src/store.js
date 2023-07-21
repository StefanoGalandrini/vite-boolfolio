import { reactive } from "vue";

const url = "http://localhost:8000/";

export const store = reactive({
	fixedUrl: url,
	search: new URLSearchParams(window.location.search).get('q'),

	userImageUrl(image)
	{
		return image
			? url + "storage/" + image
			: url + "storage/" + "default.jpg";
	},
});
