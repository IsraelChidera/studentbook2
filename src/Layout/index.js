import React, { useState, Fragment }  from 'react';
import Box from '../components/UI/Box';
import DbSidebar from '../components/dashboard/DbSidebar';
import { Outlet } from 'react-router-dom';
import DbNav from '../components/dashboard/DbNav';

const Index = () => {
    const [click, setClick] = useState(false);
    const handleClick = () => {
      setClick(!click);
    }
  return (
    <Fragment>
        <Box>
            <DbNav handleClick={handleClick} click={click}/>
            <DbSidebar click={click} className=''/>
        </Box>
        <Box
            // className={click? 'ml-56 w-full pb-10 overflow-auto': 'lg:ml-56 w-full pb-10'}            
        >
            <Outlet click={click}/>
        </Box>
    </Fragment>
  )
}

export default Index