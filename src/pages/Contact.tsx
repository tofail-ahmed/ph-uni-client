import React from 'react'
import { Outlet } from 'react-router-dom';

const Contact = () => {
  return (
    <div>
      <h3>Contact</h3>
      <Outlet/>
    </div>
  );
}

export default Contact