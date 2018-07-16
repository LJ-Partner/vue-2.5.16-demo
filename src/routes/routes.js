import Home from '../pages/home/home.vue'
import Other from '../pages/other/other.vue'
const routers = [
	{
	    path: "/",
	    name: "home",
	    component: Home
	},
	{
	    path: "/o",
	    name: "other",
	    component: Other
	},
]
export default routers;