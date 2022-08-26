
import Box from '../components/UI/Box';
import React, { useState }  from 'react';
import Navbar from '../components/Navbar';
import Header from '../components/Header';
import Recommend from '../components/Recommend';
import Contact from '../components/Contact';
import Footer from '../components/Footer';

const Landing = () => {

    const [login, setLogin] = useState(false);
    const handleLogin = () => {
        console.log('nav login is clicked')
        setLogin(true);
    }
  

  return (
    <Box className='mt-6'>
      <Navbar handleLogin={handleLogin} />
      <Header login={login} setLogin={setLogin} />
      <Recommend />        
      <Footer />   
    </Box>
  )
}

export default Landing