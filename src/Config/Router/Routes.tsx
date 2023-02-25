import { useRoutes } from "react-router-dom"
import {Dashboard} from "src/Views/Dashboard";

export const ROUTE_PATHS = {
    DASHBOARD: "/"
}

export const AppRoutes = () => {
    return useRoutes([
        {path: ROUTE_PATHS.DASHBOARD, element: <Dashboard/>},
    ])
};
