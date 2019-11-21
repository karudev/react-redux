import Dashboard from "../pages/index";

export const ROUTES = {
    Pages : {
        NoMatch: { // 404
            path: "/404",
            component: null
        },
        Dashboard: { // Dashboard | Index
            path: "/",
            component: Dashboard
        },
        /*Login: {
            path: "/login",
            component: Login
        }*/
    }
};


