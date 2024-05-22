import React from 'react';
import { Spinner } from 'react-bootstrap';

const Loader = () => {
    return (
        <div style={loaderStyle}>
            <Spinner animation="border" role="status">
            <img src="../image/loading img.gif" alt="" />
            </Spinner>
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

