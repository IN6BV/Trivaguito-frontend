import React from 'react'
import { HotelReservations } from '../../components/reports/ReservationsHotel'
import { HotelUserReservations } from '../../components/reports/UserReservationsHotel'
import { ReservationStateGet } from '../../components/reports/ReservationStateGet'
import './dashboardHotel.css'
export const DashboardHotel = () => {
  return (
    <div className='divGeneral' style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <HotelReservations/>
      <br/>
      <br/>
      <HotelUserReservations/>
      <br/>
      <br/>
      <ReservationStateGet/>
    </div>
  )
}
