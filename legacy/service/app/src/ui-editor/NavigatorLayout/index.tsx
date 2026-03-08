import { Suspense } from "react";
import { Outlet } from "react-router-dom";

// TODO: Add global navigator

export const NavigatorLayout = () => (
  <Suspense>
    <Outlet />
  </Suspense>
);
