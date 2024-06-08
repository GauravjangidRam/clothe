
import React from 'react';
import { useEffect, useState } from 'react'; 
import { spiral } from 'ldrs';
spiral.register(); 

const Loader = () => {
    const [isLoading, setIsLoading] = useState(true); 

    useEffect(() => {
       
    }, []);

    return (
        <div style={loaderStyle}>
            {isLoading && <l-spiral size="40" speed="0.9" color="black"></l-spiral>}
        </div>
    );
};

const loaderStyle = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
    backgroundColor: '#f3f3f3',
    position: 'fixed',

    
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    zIndex: 9999,
};

export default Loader;