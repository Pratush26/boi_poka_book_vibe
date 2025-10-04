import { createBrowserRouter } from "react-router";
import NotFoundPage from "../Pages/not-found/NotFound";
import Root from "../Pages/Root/Root";
import Home from "../Pages/Root/Hoom";
import Details from "../Pages/Root/Details";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children:[
      {
        index: true,
        loader:() => fetch('/booksData.json'),
        Component: Home,
      },
      {
        path: "/details",
        Component: Details,
      },
      {
        path: "*",
        Component: NotFoundPage,
      },
    ]
  }
]);