import { ReactNode, Suspense } from "react";
import { createBrowserRouter } from "react-router";
import { Auth } from "../pages/Auth/Auth";
import { Home } from "../pages/Home/Home";
import { RecoveryPassword } from "../pages/RecoveryPassword/RecoveryPassword";
import { Register } from "../pages/Register/Register";
import { routePaths } from "./routePaths";
import { RouterProvider } from "react-router/dom";
import { RequireAuth } from "../components/RequireAuth";

export interface routeInfo {
  path: string;
  title: string;
  element: ReactNode;
}

const routes: routeInfo[] = [
  {
    path: routePaths.HOME,
    title: "Home",
    element: (
      <RequireAuth>
        <Suspense fallback={<div>Loading...</div>}>
          <Home />
        </Suspense>
      </RequireAuth>
    ),
  },
  {
    path: routePaths.AUTH,
    title: "Auth",
    element: (
      <Suspense fallback={<div>Loading...</div>}>
        <Auth />
      </Suspense>
    ),
  },
  {
    path: routePaths.REGISTER,
    title: "Register",
    element: (
      <Suspense fallback={<div>Loading...</div>}>
        <Register />
      </Suspense>
    ),
  },
  {
    path: routePaths.RECOVERY_PASSWORD,
    title: "Recovery Password",
    element: (
      <Suspense fallback={<div>Loading...</div>}>
        <RecoveryPassword />
      </Suspense>
    ),
  },
];

export const Router = () => {
  const router = createBrowserRouter(routes);
  return <RouterProvider router={router} />;
};
