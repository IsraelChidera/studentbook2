import React from 'react';
import Box from './UI/Box';
import Text from './UI/Text';
import Button from './UI/Button';
import { useNavigate } from 'react-router-dom';
import notlogged from './assets/notlogged.svg';
const NotLogged = () => {
    const navigate = useNavigate();
    const handleNotLoggedIn = () => {
        navigate('/')
    }

  return (
    <Box className='lg:mx-auto text-center lg:w-9/12 w-full'>
        <Box className='h-screen flex items-center justify-center'>
            <Box>
                <Box className='flex justify-center items-center'>
                    <img 
                        src={notlogged}
                        className='h-72 md:p-6 p-10'
                        alt='man with long letter'
                    />      
                </Box>  
                <Text className='text-4xl font-semibold md:px-6 px-10'>
                    Ouch . . .
                </Text>
                <Text className='text-sm md:px-6 px-10'>
                    You are not logged in. Make sure you are logged in.
                </Text>
                <Button 
                    className='mt-6 bg-primary text-white'
                    onClick={handleNotLoggedIn}    
                >
                    Return to home
                </Button>
            </Box>
        </Box>
    </Box>
  )
}

export default NotLogged