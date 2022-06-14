import React from 'react';
import Box from './UI/Box';
import Button from './UI/Button';
const Navbar = () => {
  return (
    <Box className='flex justify-around items-center'>
        <Box className='font-bold text-lg'>
            <a href="#">
                STUDENT<span className='text-primary'>BOOK</span>
            </a>
        </Box>

        <Box>
            <ul className='flex justify-between text-sm font-bold text-textgray'>
                <li className='mr-6'>
                    <a href="#">
                        Contact
                    </a>
                </li>

                <li>
                    <a href="#">
                        About
                    </a>
                </li>
            </ul>
        </Box>

        <Box>
            <Button className='bg-primary'>
                Sign Up
            </Button>
        </Box>
    </Box>
  )
}

export default Navbar