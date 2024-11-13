import React, { useState } from 'react';
import { Box, TextField, Typography, Button } from '@mui/material';
import { useNavigate, useParams } from 'react-router-dom';

const Booking = () => {
  const { trainId } = useParams();
  const [date, setDate] = useState('');
  const [passengerName, setPassengerName] = useState('');
  const [passengerCount, setPassengerCount] = useState(1);
  const navigate = useNavigate();

  const handleBooking = () => {
    const bookingDetails = {
      trainId,
      date,
      passengerName,
      passengerCount,
    };
    localStorage.setItem('bookingConfirmation', JSON.stringify(bookingDetails));
    navigate('/Home');
  };

  return (
    <Box
      sx={{
        width: 400,
        margin: 'auto',
        marginTop: 5,
        padding: 3,
        boxShadow: '0px 0px 10px rgba(0,0,0,0.3)',
        borderRadius: '10px',
      }}
    >
      <Typography variant="h5" align="center" mb={2}>Book Your Ticket</Typography>
      <TextField
        fullWidth
        label="Passenger Name"
        variant="outlined"
        margin="normal"
        value={passengerName}
        onChange={(e) => setPassengerName(e.target.value)}
      />
      <TextField
        fullWidth
        label="Select Date"
        type="date"
        variant="outlined"
        margin="normal"
        value={date}
        onChange={(e) => setDate(e.target.value)}
        InputLabelProps={{ shrink: true }}
      />
      <TextField
        fullWidth
        label="Passenger Count"
        type="number"
        variant="outlined"
        margin="normal"
        value={passengerCount}
        onChange={(e) => setPassengerCount(e.target.value)}
      />
      <Button
        variant="contained"
        color="primary"
        fullWidth
        onClick={handleBooking}
      >
        Confirm Booking
      </Button>
    </Box>
  );
};

export default Booking;
