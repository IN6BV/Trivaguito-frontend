import React from 'react'
import { ReportHotels } from '../../components/reports/ReportHotels'
import { Navbar } from '../../components/navbar/Navbar'
import { Link } from 'react-router-dom'

export const DashboardPlataform = () => {
  return (
    <>
      <Navbar />
      <div>
        <h1>Dashboard Plataforma</h1>
        <ReportHotels />
        <Link to="/dashboardHotels">
          <button>
            Ver Dashboard Hoteles
          </button>
        </Link>
      </div>
    </>
      )
}
