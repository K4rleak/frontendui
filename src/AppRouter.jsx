import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import { GroupPage, UserPage } from "./Pages";
import { SearchPage } from "./Pages/SearchPage";
import { EventPage } from "./Pages/EventPage";
import { EventEditPage } from "./Pages/EventEditPage";
import { PublicationPage } from "./Pages/PublicationPage";
import { PublicationEditPage } from "./Pages/PublicationEditPage";
import { base } from "./config";
// import { UserPage, GroupPage } from "./Pages";

export const Routes = [
    
    {
        path: base + "/",
        errorElement: <SearchPage />,
        element: <SearchPage />
    },
    {
        path: "/event/edit/:id",
        element: <EventEditPage />,
        errorElement: <SearchPage />,
    },
    {
        path: "/event/view/:id",
        element: <EventPage />,
        errorElement: <SearchPage />,
    },
    {
        path: base + "/publication/view/:id",
        element: <PublicationPage />,
        errorElement: <SearchPage />,
    },
    {
        path: base + "/publication/edit/:id",
        element: <PublicationEditPage />,
        errorElement: <SearchPage />,
    },
    {
        path: "/user/:id",
        element: <UserPage />,
        errorElement: <SearchPage />,
    },
    {
        path: "/group/:id",
        element: <GroupPage />,
        errorElement: <SearchPage />,
    },
    {
        path: "/search",
        element: <SearchPage />,
        errorElement: <SearchPage />,
    },
    {
      path: "/search/:phrase",
      element: <SearchPage />,
      errorElement: <SearchPage />,
    },    
]

const router = createBrowserRouter(Routes, {basename: ""});
// const router = createBrowserRouter(Routes);

export const AppRouter = () => <RouterProvider router={router} />