import React from 'react';
import Box from '../UI/Box';
import Text from '../UI/Text';
import { NavLink } from 'react-router-dom';
import settings from '../assets/settings.svg';
import analytics from '../assets/analytisc.svg';
import dashboard from '../assets/dashboard.svg';
import report from '../assets/report.svg';
import timetracker from '../assets/time.svg';
import todo from '../assets/todo.svg';

const DbSidebar = () => {
  return (
    <Box className='sidebar bg-white pt-6'>
            <ul className='flex flex-col justify-around pt-10'>
                <li className='mb-6 '>
                    <NavLink 
                        to="/"
                        className='flex bg-secondary text-white p-4'
                    >
                        <img 
                            src={dashboard}
                            alt='dashboard icon'
                            className='w-4 mr-2'
                        />
                        <Text>Dashboard</Text>
                    </NavLink>
                </li>

                <li className='mb-6'>
                    <a href="#" className='flex p-4'>
                        <img 
                            src={timetracker}
                            alt='time icon'
                            className='w-4 mr-2'
                        />
                        Timetable
                    </a>
                </li>

                <li className='mb-6'>
                    <a href="#" className='flex p-4'>
                        <img 
                            src={todo}
                            alt='todo icon'
                            className='w-4 mr-2'
                        />
                        <Text>Todos</Text>
                    </a>
                </li>

                <li className='mb-6'>
                    <a href="#" className='flex p-4'>
                        <img 
                            src={report}
                            alt='report icon'
                            className='w-4 mr-2'
                        />
                        <Text>
                            Report
                        </Text>
                    </a>
                </li>

                <li className='mb-6'>
                    <a href="#" className='flex p-4'>
                        <img 
                            src={analytics}
                            alt='analytics icon'
                            className='w-4 mr-2'
                        />
                        <Text>Courses</Text>
                    </a>
                </li>
            </ul>
        </Box>
  )
}

export default DbSidebar