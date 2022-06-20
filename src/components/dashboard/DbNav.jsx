import React, {useState} from 'react';
import Box from '../UI/Box';
import Text from '../UI/Text';
import ham from '../assets/ham.svg';
import search from '../assets/search.svg';
import holder from '../assets/holder.svg';

const DbNav = ({click, handleClick}) => {
    // const [click, setClick] = useState(false);

    // const handleClick = () => {
    //     console.log("dbnav clicked");
    //     setClick(!click);
    // }
  return (
    <Box 
        // className='lg:ml-56 flex justify-between items-center py-6 bg-white px-6 text-sm'
        className={click? 'ml-56 flex justify-between items-center py-6 bg-white px-6 lg:text-sm': 
        'lg:ml-56 flex justify-between items-center py-6 bg-white px-6 lg:text-sm' }
        // className='ml-56 flex justify-between items-center py-6 bg-white px-6 text-sm'
    >
        <Box className='flex justify-between items-center'>            

            <Box className='flex justify-center items-center '>
                <Box 
                    className='mr-4 cursor-pointer '
                    
                >
                    <i className={click ? 'block lg:hidden fas fa-times text-lg': 'block lg:hidden fas fa-bars text-lg'} onClick={handleClick}/>                    
                </Box>

                <Text className='lg:text-2xl font-bold text-dark'>                   
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
            <Box className='bg-primary w-1/2 p-2 mr-2 rounded-full'>
                <i className="fa fa-user text-white" aria-hidden="true"></i>    
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