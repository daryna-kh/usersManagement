import { ReactNode } from "react";
import { Navigate, useLocation } from "react-router";
import { routePaths } from "../routes/routePaths";
import { tokenService } from "../service/tokenService";

interface RequireAuthProps {
  children: ReactNode;
}

export const RequireAuth = ({ children }: RequireAuthProps) => {
  const isAuthenticated = tokenService.get();
  const location = useLocation();

  if (!isAuthenticated) {
    return (
      <Navigate
        to={routePaths.AUTH}
        state={{ from: location.pathname }}
        replace
      />
    );
  }

  return <>{children}</>;
};
