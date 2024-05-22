import React from 'react'
import { HotelReservations } from '../../components/reports/ReservationsHotel'
import { HotelUserReservations } from '../../components/reports/UserReservationsHotel'
import { ReservationStateGet } from '../../components/reports/ReservationStateGet'
export const DashboardHotel = () => {
  return (
    <div style={{marginTop: '550px'}}>
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
