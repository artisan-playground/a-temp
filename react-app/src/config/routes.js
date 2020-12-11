import { lazy } from "react";

export default{
  Home:{
    path: "/",
    exact: true,
    component: lazy(()=> import('../pages/Home'))
  },
  Charts:{
    path: "/Charts",
    exact: true,
    component: lazy(()=> import('../pages/Charts'))
  },
}
