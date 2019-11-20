import Dashboard from "../pages/dashboard";

export const ROUTES = [{
    Pages : { // 404
        NoMatch: {
            path: "/404",
            component: Dashboard
        }, // Dashboard | Index
        Dashboard: {
            path: "/",
            component: Dashboard
        },
        /*Login: {
            path: "/login",
            component: Login
        }*/
    }
}];


