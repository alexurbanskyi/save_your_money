import React from 'react';
import {Link} from "react-router-dom";
import './Header.css'

function Header(props) {
    return (
        <header className='header'>
            <Link className='header-link' to='/'>Budget</Link>
            <Link to='/income'>Income</Link>
            <Link to='/coasts'>Costs</Link>
        </header>
    );
}

export default Header;
