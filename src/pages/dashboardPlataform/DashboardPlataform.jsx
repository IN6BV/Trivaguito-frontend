import { ReportHotels } from "../../components/reports/ReportHotels";
import { Navbar } from "../../components/navbar/Navbar";
import { TableUsuarioRegiste } from "../../components/TableUsuario/TableUsuariosAdmin";

import "./dashboardPlataform.css";

export const DashboardPlataform = () => {

  return (
    <div className="dashboard-container">
      <Navbar />
      <div>
        <ReportHotels />
        <div className="title-container">
            <h1>Usuarios Registrados</h1>
        </div>
        <TableUsuarioRegiste/>
      </div>
    </div>
  );
};
