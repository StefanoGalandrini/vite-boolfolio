import {createRouter, createWebHistory} from "vue-router";

// importare i componenti che definiscono le varie pagine
import ProjectsHome from './pages/ProjectsHome.vue';
import ProjectsIndex from './pages/ProjectsIndex.vue';
import ProjectsShow from './pages/ProjectsShow.vue';
import ProjectsAbout from './pages/ProjectsAbout.vue';
import Projects404 from './pages/Projects404.vue';

const router = createRouter({
	history: createWebHistory(),
	routes: [
		{
			path: '/',
			name: 'home',
			component: ProjectsHome,
		},
		{
			path: '/about',
			name: 'about',
			component: ProjectsAbout,
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
		{
			path: '/:pathMatch(.*)*',
			name: 'page404',
			component: Projects404,
		},
	],
});

export
{router};
