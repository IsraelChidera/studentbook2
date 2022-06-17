import React from 'react';
import Box from '../UI/Box';
import Text from '../UI/Text';
import Button from '../UI/Button';
import '../../App.css';
import DbSidebar from './DbSidebar';
import timetracker from '../assets/timetracker.svg';
import activity from '../assets/activity.svg';
import worktime from '../assets/worktime.svg';
import projects from '../assets/projects.svg';

const DbContent = () => {
  return (
    <Box className='dbgrid bg-gray pt-10 ' >
        <Box className='fixed w-52 z-0 h-screen top-20 left-0 bg-white'>
            <DbSidebar/>
        </Box>

        <Box 
            className='content ml-56 w-full'
        >

            <Box className='flex justify-between items-center w-full p-8'>
                <Box>
                    <Text className='text-4xl font-bold'>
                        Today
                    </Text>
                    <Text className='text-sm font-semibold'>
                        Mon 22, 2021 | 10:00 AM
                    </Text>
                </Box>

                <Box>
                    <Box
                        // title="Start Time Tracker"                       
                        style={{
                            width: 300,
                        }}
                        className='bg-white rounded-3xl flex justify-center items-center p-2'
                    >
                        <Text className='font-semibold'>
                            Start Time Tracker
                        </Text>

                        <Box>
                            <img
                                src={timetracker}
                                alt="timetracker icon"
                                className='ml-6 w-16'
                            /> 
                        </Box>   
                    </Box>
                </Box>
            </Box>

            <Box className='p-8 flex justify-between'>

                <Box className='bg-white p-4 rounded-3xl h-full w-full m-2'>
                    <Box className='flex flex-col justify-between'>
                        <Text className='text-lg font-semibold mb-10'>
                            Weekly Activity
                        </Text>

                        <Box className='flex justify-between items-center'>
                            <Text className='mr-20 text-4xl font-bold'>
                                0%
                            </Text>

                            <Box>
                                <img 
                                    src={activity}
                                    alt='activity icon'
                                    className='w-14'
                                />    
                            </Box>
                        </Box>
                    </Box>
                </Box>

                <Box className='bg-white p-4 m-2 rounded-3xl h-full w-full'>
                    <Box className='flex flex-col justify-between'>
                        <Text className='text-lg font-semibold mb-10'>
                            Worked this week
                        </Text>

                        <Box className='flex justify-between items-center'>
                            <Text className='mr-20 text-4xl font-bold'>
                                00:00:00
                            </Text>

                            <Box>
                                <img 
                                    src={worktime}
                                    alt='activity icon'
                                    className='w-14'
                                />    
                            </Box>
                        </Box>
                    </Box>
                </Box>

                <Box className='bg-white p-4 m-2 rounded-3xl h-full w-full'>
                    <Box className='flex flex-col justify-between'>
                        <Text className='text-lg font-semibold mb-10'>
                            Todos 
                        </Text>

                        <Box className='flex justify-between items-center'>
                            <Text className='mr-20 text-4xl font-bold'>
                                0
                            </Text>

                            <Box>
                                <img 
                                    src={projects}
                                    alt='activity icon'
                                    className='w-14'
                                />    
                            </Box>
                        </Box>
                    </Box>
                </Box>

            </Box>

            <Box className='p-8 flex justify-between'>
                <Box className='p-4 m-4 rounded-3xl bg-white w-full'>
                    <Box className='flex justify-between items-center'>
                        <Text className='text-lg font-semibold'>
                            Recent activity
                        </Text>
                        <Button
                            className='bg-primary'
                        >
                            view all
                        </Button>
                    </Box>

                    <Box className='mt-6'>
                        <Text>
                            Nothing added yet...
                        </Text>
                    </Box>
                </Box>

                <Box className='p-4 m-4 rounded-3xl bg-white w-full'>
                    <Text className='text-lg font-semibold '>
                        Todos
                    </Text>

                    <Box className='border-2 border-gray rounded-3xl p-2 mt-6'>
                        <Box className='flex justify-between items-center'>
                            <Text>
                                Project one
                            </Text>

                            <Text 
                                className='p-2 bg-primary 
                                opacity-60 rounded-3xl text-sm'
                            >
                                00:40:00
                            </Text>
                        </Box>
                    </Box>

                    <Box className='border-2 border-gray rounded-3xl p-2 mt-6'>
                        <Box className='flex justify-between items-center'>
                            <Text>
                                Project two
                            </Text>

                            <Text 
                                className='p-2 bg-primary 
                                opacity-60 rounded-3xl text-sm'
                            >
                                00:34:00
                            </Text>
                        </Box>
                    </Box>
                    

                    <Box className='mt-6'>
                        <Button className='bg-secondary'>
                            Add todos
                        </Button>
                    </Box>
                </Box>
            </Box>

        </Box>
    </Box>
  )
}

export default DbContent