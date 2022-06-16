import React from 'react';
import Box from './UI/Box';
import Text from './UI/Text';
import author from './assets/author.svg';
import quotes from './assets/quotes.svg';

const Recommend = () => {
  return (
    <Box className='mt-28 bg-secondary text-white'>
        <Box className='w-8/12 mx-auto py-10 md:flex justify-around items-center'>
            <Box className='relative'>
                <Box className='absolute top-0 left-0 z-10'>
                    <img
                        src={quotes}
                        alt="quote mark"
                        className='z-10 opacity-30 w-8'
                    />     
                </Box>   
                <Box className='z-50 md:w-96 w-full'>
                    <Text className='text-2xl'>
                        “I have learnt so much using this website! 
                        I recommend it to everyone that starts their 
                        journey with algorithms and web development!”
                    </Text>

                    <Text className='font-semibold pt-4'>
                        Taylor Keith
                    </Text>
                </Box>
            </Box>

            <Box className='md:mt-0 mt-10'>
                <img
                    src={author}
                    alt='author pics'
                />        
            </Box>
        </Box>
    </Box>
  )
}

export default Recommend