import React from 'react';
import { ReportHotels } from '../../components/reports/ReportHotels';
import { Navbar } from '../../components/navbar/Navbar';
import { Link } from 'react-router-dom';

export const DashboardPlataform = () => {

  return (
    <>
      <Navbar />
      <div>
        <h1>Dashboard Plataforma</h1>
        <Link to="/reportHotel">
          <button>Generar Reporte de Hoteles</button>
        </Link>
        <Link to="/dashboardHotels">
          <button>Ver Dashboard Hoteles</button>
        </Link>
      </div>
    </>
  );
};
