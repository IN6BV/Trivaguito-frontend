import { DashboardPage } from "./pages/dashboard/DashboardPage";
import { AuthPage } from "./pages/auth/AuthPage";
import { DashboardHotel } from "./pages/dashboardHotel";
import { DashboardPlataform } from "./pages/dashboardPlataform";
import { MyAccount } from "./pages/myAccount";
import { ReportHotels } from "./components/reports/ReportHotels";
import { ReportHotelPage } from "./pages/dashboardPlataform/ReportHotelPage";
import { EditFormUser } from "../src/components/editUser/EditFormUser";

const routes = [
    {path: '/auth', element: <AuthPage/>},
    {path: '/*', element: <DashboardPage/>},
    {path: '/plataformManager', element: <DashboardPlataform/>},
    {path: '/myAccount', element: <MyAccount/>},
    {path: '/hotelManager', element: <DashboardHotel/>},
    { path: '/reportHotel', element: <ReportHotelPage /> },
    { path: '/editUser', element: <EditFormUser /> },
]

export default routes