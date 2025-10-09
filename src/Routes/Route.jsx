import { createBrowserRouter } from "react-router";
import Root from "../Components/Root";
import Home from "../Components/Pages/Home/Home";
import Apps from "../Components/Apps/Apps";
import ErrorPage from "../Components/Error/ErrorPage";
import AppDetails from "../Components/Apps/AppDetails";
import Installation from "../Components/Pages/Installation/Installation";

const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    errorElement: <ErrorPage />,
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
      {
        path: "/apps/:id",
        Component: AppDetails,
      },
    ],
  },
]);
export default router;
