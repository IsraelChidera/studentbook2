import Container from '../components/UI/Container';
import Box from '../components/UI/Box';
import React from 'react'
import Navbar from '../components/Navbar';
import Header from '../components/Header';

const Landing = () => {
  return (
    <Box className='mt-6'>
        <Navbar/>
        <Header/>
        <Container>
            Landing
        </Container>
    </Box>
  )
}

export default Landing