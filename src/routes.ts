import router from "@mongez/react-router";
import BaseLayout from "./BaseLayout/BaseLayout";
import Home from "./Pages/HomePage/HomePage";
import GalleryPage from "./Pages/GalleryPage/GalleryPage";
import Home2 from "./Pages/home2/Home2";
import { Home3 } from "./Pages/Home3/Home3";

router.partOf(BaseLayout, [
  {
    path: "/home1",
    component: Home,

  },
  {
    path: "/",
    component: Home,

  },

  {
    path: "/home2",
    component: Home2,
  },

  {
    path: "/home3",
    component: Home3,
  },

  {
    path: "Gallery",
    component: GalleryPage,
  },
]);
