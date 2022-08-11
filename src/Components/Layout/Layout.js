import React from 'react';
import {Link, Outlet} from "react-router-dom";
import Header from "../Header/Header";
import './Layout.css'

function Layout(props) {
    return (
        <div className='layout'>
            <Header/>
            <Outlet/>
        </div>
    );
}

export default Layout;
