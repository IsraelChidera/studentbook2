import React, {useState} from 'react';
import Box from './UI/Box';
import Text from './UI/Text';
import Button from './UI/Button';
import fasticon from './assets/headerfast.svg';
import easyicon from './assets/headereasy.svg';
import mobileicon from './assets/headermobile.svg';
import headerimg from './assets/headerimg.svg';
import ModalForm from './ModalForm';
// import { Button, Modal } from 'antd';

const Header = () => {

    const [showModal, setShowModal] = useState(false);
    const handleModal = () => {
        setShowModal(!showModal)
    }

  return (
    <>
          
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

                        <Button                           
                            className='text-textgray bg-white drop-shadow-2xl'
                            type="button"
                            onClick={handleModal}
                        >
                            Get Started
                        </Button>
                    </Box>
                </Box>
            </Box>

            <Box className='flex justify-between items-center w-8/12 mx-auto mt-20'>
                <Box className='mr-6'>

                    <Box className='border-b border-b-textgray 
                        flex justify-center items-center pb-4'
                    >
                        <Box className='mr-6'>
                            <img 
                                src={fasticon}
                                alt='fast icon'
                            />
                        </Box>

                        <Box className='text-left'>
                            <Text className='font-semibold text-2xl'>
                                Fastest possible
                            </Text>
                            <Text className='text-sm'>
                                Our primary goal is to make
                                productivity an everyday desire 
                                to both students and teachers
                            </Text>
                        </Box>
                    </Box>

                    <Box className='border-b border-b-textgray 
                        flex justify-center items-center pb-4 my-6'
                    >
                        <Box className='mr-6'>
                            <img 
                                src={easyicon}
                                alt='fast icon'
                            />
                        </Box>

                        <Box className='text-left'>
                            <Text className='font-semibold text-2xl'>
                                Easy and accessible
                            </Text>
                            <Text className='text-sm'>
                                Our primary goal is to make
                                productivity an everyday desire 
                                to both students and teachers
                            </Text>
                        </Box>
                    </Box>

                    <Box className='border-b border-b-textgray 
                        flex justify-center items-center pb-4'
                    >
                        <Box className='mr-6'>
                            <img 
                                src={mobileicon}
                                alt='fast icon'
                            />
                        </Box>

                        <Box className='text-left'>
                            <Text className='font-semibold text-2xl'>
                                Mobile friendly
                            </Text>
                            <Text className='text-sm'>
                                Our primary goal is to make
                                productivity an everyday desire 
                                to both students and teachers
                            </Text>
                        </Box>
                    </Box>

                </Box>   

                <Box>
                    <img
                        src={headerimg}
                        alt="header image"
                    />    
                </Box> 
            </Box>
        </Box>

        {/* main modal */}
        {
            showModal? <ModalForm setShowModal={setShowModal}/>: ''
        }
        
       
    </>
  )
}

export default Header