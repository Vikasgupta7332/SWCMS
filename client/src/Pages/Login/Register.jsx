import React, { useState, useEffect } from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { Container, Typography, Grid } from '@mui/material';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from "../../Components/Firebase/Firebase"
import { useNavigate } from "react-router-dom";

const Register = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const navigate = useNavigate();

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
    
        console.log('User is logged in:', user);
      } else {
        console.log('No user is logged in');
      }
    });
    return () => unsubscribe();
  }, []);

  const handleSubmit = async(e) => {
    e.preventDefault();
    console.log(formData);

    e.preventDefault();
    if (formData.email && formData.password) {
      try {
        await createUserWithEmailAndPassword(auth, formData.email, formData.password);
          setFormData('');
          navigate("/");
        console.log('Successful Register');
      } catch (error) {
        console.error('Error:', error.message);
        alert('invalid user');
      }
    } else {
      alert('Fill in all data');
    }
  };

  const handleClick = () =>{
    navigate("/login");
  }

  return (
    <Container maxWidth="sm" style={{display:"flex",justifyContent:"center",alignIterm:'center',flexDirection:"column",height:"100vh"}}>
      <Typography variant="h4" align="center" gutterBottom>
        Register
      </Typography>
      <form onSubmit={handleSubmit}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <TextField
              name="email"
              label="Email"
              type="email"
              variant="outlined"
              fullWidth
              value={formData.email}
              onChange={handleChange}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              name="password"
              label="Password"
              type="password"
              variant="outlined"
              fullWidth
              value={formData.password}
              onChange={handleChange}
            />
          </Grid>
        </Grid>
        <Button
          type="submit"
          variant="contained"
          color="primary"
          fullWidth
          style={{ marginTop: '1rem' }}
        >
          Register
        </Button>
      </form>
      <Button
          type="submit"
          variant="contained"
          color="primary"
          fullWidth
          style={{ marginTop: '1rem' }}
          onClick={handleClick}
        >
          Login
        </Button>
    </Container>
  );
};

export default Register;
