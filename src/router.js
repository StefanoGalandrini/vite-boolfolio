import {createRouter, createWebHistory} from "vue-router";

// importare i componenti che definiscono le varie pagine
import ProjectsHome from './pages/ProjectsHome.vue';
import ProjectsIndex from './pages/ProjectsIndex.vue';
import ProjectsShow from './pages/ProjectsShow.vue';

const router = createRouter({
	history: createWebHistory(),
	routes: [
		{
			path: '/',
			name: 'home',
			component: ProjectsHome,
		},
		{
			path: '/projects',
			name: 'projects',
			component: ProjectsIndex,
		},
		{
			path: '/projects/:slug',
			name: 'show',
			component: ProjectsShow,
		},
	],
});

export
{router};
