import React from 'react';
import { Outlet } from 'react-router-dom';

const AdminLayout = () => {
    return (
        <div>
           <h1>this is navbar</h1> 
           <Outlet></Outlet>
        </div>
    );
};

export default AdminLayout;