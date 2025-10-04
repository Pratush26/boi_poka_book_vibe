import { createBrowserRouter } from "react-router";
import NotFoundPage from "../Pages/not-found/NotFound";
import Root from "../Pages/Root/Root";

export const router = createBrowserRouter([
  {
    path: "/",
    loader:() => fetch('/booksData.json'),
    Component: Root,
    children:[
      {
        path: "*",
        Component: NotFoundPage,
      },
      {
        path: "*",
        Component: NotFoundPage,
      },
    ]
  }
]);