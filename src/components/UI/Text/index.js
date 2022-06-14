import React from 'react';
import Box from '../Box';

const index = ({className, children}) => {
  return (
    <Box
        className={`${className}`}
    >
        {children}
    </Box>
  )
}

export default index