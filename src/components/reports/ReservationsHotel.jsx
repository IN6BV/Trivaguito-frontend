import { useEffect, useState } from 'react';
import { fetchReservationsForHotel } from '../../services/api';
import Card from 'react-bootstrap/Card';
export const HotelReservations = () => {
  const [reservations, setReservations] = useState([]);
  const [error, setError] = useState('');
  useEffect(() =>{
    const fetchReservations = async () =>{
      const response = await fetchReservationsForHotel()
      if(!response.error){
        setReservations(response.data.reservations)
        setError('')
      }else{
        setReservations([]);
        setError('Error al traer las reservaciones');
      }
    }
    fetchReservations()
  }, [])
  return (
    <div>
      <h2>Reservaciones del Hotel</h2>
      {error && <p className="text-danger">{error}</p>}
      <div>
        {reservations.map((reservation) => (
          <Card
            key={reservation._id}
            style={{ width: '18rem', margin: '10px' }}
          >
            <Card.Body>
              <Card.Title>{reservation.idHabitacion.tipoHabitacion}</Card.Title>
              <Card.Text>
                Fecha Inicio: {reservation.fechaInicio}
                <br />
                Fecha Fin: {reservation.fechaFin}
                <br />
                Estado Reserva: {reservation.estadoReserva}
              </Card.Text>
            </Card.Body>
          </Card>
        ))}
      </div>
    </div>
  );
};
