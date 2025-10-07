import { createBrowserRouter } from "react-router";
import Root from "../Components/Root";
import Home from "../Components/Pages/Home/Home";
import Apps from "../Components/Pages/Apps";
import Installation from "../Components/Pages/Installation";

const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children: [
      {
        index: true,
        Component: Home,
      },
      {
        path: "/app",
        Component: Apps,
      },
      {
        path: "/installation",
        Component: Installation,
      },
    ],
  },
]);
export default router;
