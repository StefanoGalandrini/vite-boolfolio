import {reactive} from "vue";

const url = "http://localhost:8000/";

export const store = reactive({
	fixedUrl: url,

	userImageUrl(image)
	{
		return image
			? url + "storage/" + image
			: url + "storage/" + "default.jpg";
	},
});
