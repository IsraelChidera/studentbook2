import React from 'react';
import Box from './UI/Box';
import {Navigate, Outlet} from 'react-router-dom';
import {auth} from '../firebase';
import NotLogged from './NotLogged';

const ProtectedRoute = () => {
    const user = auth.currentUser;
    
  return user? <Outlet/> : <NotLogged/>
}

export default ProtectedRoute