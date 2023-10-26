import React from 'react';
import styles from './tab.module.css';
import {useLocation, useNavigate} from "react-router-dom";

function Tab({title, path, setActiveLink, order, activeLink}) {
    const location = useLocation();
    const navigate = useNavigate();
    const link = `#${location.pathname}${path}`;


    const isActive = link === activeLink;


    const handleNavigate = (event) => {
        event.preventDefault();
        navigate(link)
        setActiveLink(link)
    }

    return (
        <div className={isActive ? styles.ActiveTab : styles.Tab} onClick={handleNavigate}>

            <h2>{title} #{order} </h2>
        </div>
    );
}

export default Tab;
