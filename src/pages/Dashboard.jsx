import React from 'react';
import DbContent from '../components/dashboard/DbContent';
import DbNav from '../components/dashboard/DbNav';
import Box from '../components/UI/Box';

const Dashboard = () => {
  return (
    <Box>
        <DbNav className=''/>
        <DbContent/>
        Dashboard view
    </Box>
  )
}

export default Dashboard