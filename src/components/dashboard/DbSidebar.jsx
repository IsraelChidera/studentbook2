import React from 'react';
import Box from '../UI/Box';
import Text from '../UI/Text';
import { NavLink, Navigate, useNavigate } from 'react-router-dom';
import analytics from '../assets/analytisc.svg';
import dashboard from '../assets/dashboard.svg';
import report from '../assets/report.svg';
import todo from '../assets/todo.svg';
import { getAuth, signOut } from "firebase/auth";

const DbSidebar = ({click}) => {
    const auth = getAuth();
    const navigate = useNavigate();
    const handleLogout = () => {
        signOut(auth).then(() => {
            // Sign-out successful.
            console.log('Sign-out successful.')
            navigate('/')
          }).catch((error) => {
            // An error happened.
          });
    }

  return ( 
    <Box 
    // className='' 
    className={
        click? 
    'fixed block w-52 h-screen pt-16 top-0 left-0 bg-white overflow-auto'
    : 
    "lg:fixed lg:block hidden lg:w-52 lg:h-screen pt-16 overflow-auto lg:top-0 lg:left-0 bg-white" }
    >
            <ul className='flex flex-col justify-around pt-10 overflow-y-auto'>
                <li className='mb-6 '>
                    <NavLink 
                        to="/dashboard"
                        className={ ({isActive}) => 
                            (isActive? 'flex bg-secondary text-white p-4':'text-secondary p-4 flex')}
                        // className='flex bg-secondary text-white p-4'
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
                    <NavLink 
                        to="/profile" 
                        className={ ({isActive}) => 
                            (isActive? 'flex bg-secondary text-white p-4':'text-secondary p-4 flex')}
                    >
                        <i 
                            // className={ ({isActive}) => 
                            // (isActive? 'fa fa-user text-white mr-2 flex items-center':'fa fa-user text-dark mr-2 flex items-cente')}
                            className="fa fa-user text-grey-600 mr-2 flex items-center" 
                        aria-hidden="true"
                        ></i>   
                        Profile
                    </NavLink>
                </li>

                <li className='mb-6'>
                    <NavLink 
                        to="/todo" 
                        className={ ({isActive}) => 
                            (isActive? 'flex bg-secondary text-white p-4':'text-secondary p-4 flex')}
                    >
                        <img 
                            src={todo}
                            alt='todo icon'
                            className='w-4 mr-2'
                        />
                        <Text>Todos</Text>
                    </NavLink>
                </li>

                <li className='mb-6'>
                    <NavLink 
                        to="/report" 
                        className={ ({isActive}) => 
                                (isActive? 'flex bg-secondary text-white p-4':'text-secondary p-4 flex')}
                    >
                        <img 
                            src={report}
                            alt='report icon'
                            className='w-4 mr-2'
                            
                        />
                        <Text>
                            Report
                        </Text>
                    </NavLink>
                </li>

                <li className='mb-6'>
                    <NavLink 
                        to="/course" 
                        className={ ({isActive}) => 
                            (isActive? 'flex bg-secondary text-white p-4':'text-secondary p-4 flex')}
                    >
                        <img 
                            src={analytics}
                            alt='analytics icon'
                            className='w-4 mr-2'
                        />
                        <Text>Courses</Text>
                    </NavLink>
                </li>

                <li className='mb-6'>
                    <a className='flex p-4 cursor-pointer' onClick={handleLogout}>
                        <i className="fa fa-sign-out text-dark mr-2 flex items-center" aria-hidden="true"></i> 
                        Logout
                    </a>
                </li>
            </ul>
        </Box>
  )
}

export default DbSidebar