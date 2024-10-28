import React, {useState} from 'react';
import { Autocomplete, Box, Button, TextField } from '@mui/material';

const FruitSurvey = () => {
    const [name, setName] = useState('');
  const [fruit, setFruit] = useState('');
  const [message, setMessage] = useState('');

  const fruits = ['Apple', 'Banana', 'Cherry', 'Durian', 'Elderberry'];

  const handleSubmit = (event) => {
    event.preventDefault();
    setMessage(`Hello, ${name}! Your favorite fruit is ${fruit}`);
  };

  return (
    <Box component="form" onSubmit={handleSubmit} sx={{ display: 'flex', flexDirection: 'column', gap: 2, width: 300 }}>
        <TextField label="Name" 
        data-testid="name" 
        value={name} 
        onChange={(e) => setName(e.target.value)} 
        required 
/>
        <Autocomplete options={fruits}
        renderInput={(params) => <TextField {...params} label="Choose a fruit" />}
        data-testid="autocomplete"
        onChange={(event, newValue) => setFruit(newValue)}
/>
        <Button variant="contained" 
        type="submit" 
        data-testid="button"
>
            Submit
        </Button>
        {
            message && <p>{message}</p>
        }
    </Box>
  );
};

export default FruitSurvey;
