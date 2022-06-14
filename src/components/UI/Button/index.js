import React from 'react';

const index = ({children, className, onClick, ...rest}) => {
  return (
    <button
        className={`px-6 py-2 text-white font-bold text-sm rounded-full ${className}`}
        onClick={onClick}
        {...rest}
    >
        {children}
    </button>
  )
}

export default index