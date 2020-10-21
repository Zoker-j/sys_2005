const dynamicRouters=[
    {
        path: "/",
        name: "Home",
        component: () =>
          import(/* webpackChunkName: "Home" */ "../pages/Home"),
        children:[]
      }

]
export default dynamicRouters