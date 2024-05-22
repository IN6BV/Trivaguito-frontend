import React from 'react';
import { useGetHabitationFromHotel } from '../../shared/hooks/useGetHabitationFromHotel';
import { Card, Carousel, Spinner, Alert, Container, Row, Col, Button} from 'react-bootstrap';

export const GetHabitationsRD = () => {
    const { habitaciones, loading, error } = useGetHabitationFromHotel();

    if (loading) {
        return <Spinner animation="border" />;
    }

    if (error) {
        return <Alert variant='danger'>{error}</Alert>;
    }

    if (!habitaciones || habitaciones.length === 0) {
        return <Alert variant='info'>No hay habitaciones disponibles.</Alert>;
    }

    return (
        <Container>
        <h2>Habitaciones del Hotel</h2>
        <Row>
            {habitaciones.map(habitacion => (
                <Col key={habitacion._id} sm={12} md={6} lg={4} xl={3} className="mb-4">
                    <Card style={{ width: '15rem' }}>
                        {habitacion.fotos.length > 1 ? (
                            <Carousel>
                                {habitacion.fotos.map((foto, index) => (
                                    <Carousel.Item key={index}>
                                        <img
                                            className="d-block w-100"
                                            src={foto}
                                            alt={`Imagen ${index + 1}`}
                                        />
                                    </Carousel.Item>
                                ))}
                            </Carousel>
                        ) : (
                            habitacion.fotos.length === 1 && (
                                <Card.Img variant="top" src={habitacion.fotos[0]} />
                            )
                        )}
                        <Card.Body>
                            <Card.Title>{habitacion.tipoHabitacion || 'Tipo de Habitación Desconocida'}</Card.Title>
                            <Card.Text>
                                Capacidad: {habitacion.capacidadPersonas || 'N/A'}
                                <br />
                                Precio por Noche: {habitacion.precioPorNoche || 'N/A'}
                            </Card.Text>
                            <Button variant="primary" className="mr-2">Update</Button>
                            <Button variant="danger">Delete</Button>
                        </Card.Body>
                    </Card>
                </Col>
            ))}
        </Row>
    </Container>
    );
};