import { createBrowserRouter, RouteObject } from "react-router-dom"
import App from "../layouts/App"
import ActivitiesDashboard from "../../features/activities/dashboard/ActivitiesDashboard";
import ActivityForm from "../../features/activities/form/ActivityForm";
import ActivityDetails from "../../features/activities/details/ActivityDetails";

export const routes: RouteObject[] = [
    {
        path: '/',
        element: <App/>,
        children: [
            {path: 'activities', element: <ActivitiesDashboard/>},
            {path: 'activities/:id', element: <ActivityDetails />},
            {path: 'createActivity', element: <ActivityForm key={'create'}/>},
            {path: 'manage/:id', element: <ActivityForm key={'manage'}/>},
        ]
    },
]

export const router = createBrowserRouter(routes);