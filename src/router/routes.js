const routes = [
  {
    path: "/",
    redirect: "/login"
  },
  {
    path: "/login",
    name: "Login",
    component: () =>
      import(/* webpackChunkName: "Login" */ "pages/LoginScreen.vue")
  },
  {
    path: "/dashboard",
    name: "Dashboard",
    component: () =>
      import(/* webpackChunkName: "Dashboard" */ "pages/Dashboard.vue"),
    redirect: {
      path: "/dashboard/home"
    },
    children: [
      {
        path: "home",
        name: "Home",
        component: () =>
          import(/* webpackChunkName: "Home" */ "../pages/Dashboard/Home.vue")
      },
      {
        path: "master-location",
        name: "master-location",
        component: () =>
          import(
            /* webpackChunkName: "MasterLocation" */ "../pages/Dashboard/MasterLocation.vue"
          )
      }
    ]
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: "*",
    component: () => import("pages/Error404.vue")
  }
];

export default routes;
