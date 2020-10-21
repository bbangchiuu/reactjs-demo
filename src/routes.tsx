import Dashboard from "./components/Dashboard";
import NoMath from "./components/no-math";
import Login from "./components/Login";

const routes = [
    {
        path: "/dashboard",
        component: Dashboard,
        isPublic: false
    },
    {
        path: "/login",
        component: Login,
        isPublic: false
    },
    {
        path: "*",
        component: NoMath,
        isPublic: true
    }
]

export default routes;