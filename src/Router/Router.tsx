import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from '../components/Home';
import DashboardPage from '../components/Dashboard';
import requireAuth from "../components/HOC/requireAuth";
export default function Router() {
  const router = createBrowserRouter([

      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/DashboardPage",
        element: requireAuth(DashboardPage)(),
      },
    ]);
    return <RouterProvider router={router} />;}