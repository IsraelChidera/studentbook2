import React from 'react';
import Box from '../UI/Box';
import Text from '../UI/Text';
import ham from '../assets/ham.svg';
import search from '../assets/search.svg';
import holder from '../assets/holder.svg';

const DbNav = () => {

    const handleClick = () => {
        console.log("dbnav clicked")
    }
  return (
    <Box className='md:ml-56 flex justify-between items-center py-6 bg-white px-6 text-sm'>
        <Box className='flex justify-between items-center'>            

            <Box className='flex justify-center items-center '>
                <Box 
                    className='mr-10 cursor-pointer'
                    
                >
                    <img 
                        src={ham} 
                        alt="ham icon"
                        className='w-4'
                        onClick={handleClick}
                    /> 
                </Box>

                <Text>                   
                    Dashboard
                </Text>
            </Box>
            
        </Box>

        <Box className='flex justify-between items-center'>
        <Box className='relative '>
            <form>
                <input 
                    type="text" 
                    placeholder='Search Tasks'
                    className="bg-gray-50 border border-primary text-secondary 
                                text-sm rounded-full focus:ring-blue-500 focus:border-primary 
                                block w-full p-1.5 dark:bg-white dark:border-primary 
                                dark:placeholder-dark dark:text-secondary"
                />
            </form>
            <Box className='absolute top-2 right-2 '>
                <img 
                    src={search}
                    alt='search icon'
                />        
            </Box>
        </Box>

        <Box className='md:flex hidden justify-center items-center ml-20'>
            <Box className='mr-4 w-8'>
                <img
                    src={holder}
                    alt='placeholder icon'
                />    
            </Box>
            <Text>
                Username
            </Text>            
        </Box>   
        </Box> 

    </Box>
  )
}

export default DbNav