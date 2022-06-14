import React from 'react';
import Box from '../Box';

const index = ({children, className}) => {
  return (
    <Box
        className={`mx-auto my-10 w-3/4 ${className}`}
    >
        {children}
    </Box>
  )
}

export default index