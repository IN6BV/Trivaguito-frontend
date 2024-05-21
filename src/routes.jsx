import { DashboardPage } from "./pages/dashboard/DashboardPage";
import { AuthPage } from "./pages/auth/AuthPage";
import { DashboardHotel } from "./pages/dashboardHotel";
import { DashboardPlataform } from "./pages/dashboardPlataform";

const routes = [
    {path: '/auth', element: <AuthPage/>},
    {path: '/*', element: <DashboardPage/>},
    {path: '/plataformManager', element: <DashboardPlataform/>},
    {path: '/hotelManager', element: <DashboardHotel/>}
]

export default routes