import React, { useState } from 'react';
import Box from './UI/Box';
import Button from './UI/Button'; 
import ham from './assets/ham.svg';

const Navbar = ({handleLogin}) => {
    const [click, setClick] = useState(false)

    const handleClick = () => {
        console.log('hamburger icon')
    }    

  return (
    <Box className='flex justify-around items-center'>
        <Box className='font-bold text-lg'>
            <a href="#">
                STUDENT<span className='text-primary'>BOOK</span>
            </a>
        </Box>

        <Box className='flex justify-between items-center'>            

            <Box className='ml-6'>
                <Button 
                    className='bg-primary block'
                    onClick={handleLogin}
                >
                    Login
                </Button>
            </Box>
        </Box>
                    
    </Box>
  )
}

export default Navbar