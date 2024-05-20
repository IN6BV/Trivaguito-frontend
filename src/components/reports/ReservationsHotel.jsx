import { useState } from 'react';
import { fetchReservationsForHotel } from '../../services/api';
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
export const HotelReservations = () => {
  const [hotelId, setHotelId] = useState('');
  const [reservations, setReservations] = useState([]);
  const [error, setError] = useState('');
  const handleSearch = async () => {
    if (!hotelId) {
      setError('Please enter a hotel ID');
      return;
    }
    const response = await fetchReservationsForHotel(hotelId);
    if (!response.error) {
      setReservations(response.data.reservations);
      setError('');
    } else {
      setReservations([]);
      setError('Error fetching reservations');
    }
  };
  return (
    <div>
      <Form.Group controlId="formHotelId">
        <Form.Label>Ingrese el ID del hotel</Form.Label>
        <Form.Control
          type="text"
          placeholder="Hotel ID"
          value={hotelId}
          onChange={(e) => setHotelId(e.target.value)}
        />
      </Form.Group>
      <Button variant="primary" onClick={handleSearch}>
        Buscar
      </Button>
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
