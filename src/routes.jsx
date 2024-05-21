import { DashboardPage } from "./pages/dashboard/DashboardPage";
import { AuthPage } from "./pages/auth/AuthPage";
import { DashboardHotel } from "./pages/dashboardHotel";
import { DashboardPlataform } from "./pages/dashboardPlataform";
import { MyAccount } from "./pages/myAccount";
import { EditFormUser } from "./components/editUser/EditFormUser";

const routes = [
    {path: '/auth', element: <AuthPage/>},
    {path: '/*', element: <DashboardPage/>},
    {path: '/plataformManager', element: <DashboardPlataform/>},
    {path: '/myAccount', element: <MyAccount/>},
    {path: '/hotelManager', element: <DashboardHotel/>},
    {path: '/editUser', element: <EditFormUser/>}

]

export default routes