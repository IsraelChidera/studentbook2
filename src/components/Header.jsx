import React from 'react';
import Box from './UI/Box';
import Text from './UI/Text';
import Button from './UI/Button';
const Header = () => {
  return (
    <Box className='relative mt-24 text-6xl text-center'>
        <Box className='w-131 mx-auto'>
            <Box>
                <Text>
                    Sorting Algorithms in Javascript
                </Text>

                <Box>
                    <Button className='bg-primary uppercase mr-6'>
                        Explore
                    </Button>

                    <Button className='text-textgray bg-white drop-shadow-2xl'>
                        Get Started
                    </Button>
                </Box>
            </Box>
        </Box>

        <Box>
            
        </Box>
    </Box>
  )
}

export default Header