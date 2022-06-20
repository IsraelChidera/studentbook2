import React, {useState} from 'react';
import DbContent from '../components/dashboard/DbContent';
import DbNav from '../components/dashboard/DbNav';
import Box from '../components/UI/Box';

const Dashboard = () => {
  const [click, setClick] = useState(false);
  const handleClick = () => {
    setClick(!click);
  }
  return (
    <Box>
        <DbNav handleClick={handleClick} click={click} />
        <DbContent click={click}  />        
    </Box>
  )
}

export default Dashboard