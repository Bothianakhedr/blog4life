import router from "@mongez/react-router";
import BaseLayout from "./BaseLayout/BaseLayout";
import Home from "./Pages/HomePage/HomePage";
import Home2 from "./Pages/Home2/Home2";
import GalleryPage from "./Pages/GalleryPage/GalleryPage";

router.partOf(BaseLayout, [
  {
    path: "/",
    component: Home,
  },
  {
    path: "home-2",
    component: Home2,
  },
  {
    path: "Gallery",
    component: GalleryPage,
  },

]);
