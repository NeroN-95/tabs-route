import styles from './tab.module.css';
import {useLocation, useNavigate} from "react-router-dom";
import {TabProps} from "../../types/data";

function Tab({order, setActiveLink, activeLink, path,title}: TabProps) {
    const location = useLocation();
    const navigate = useNavigate();
    const link = `#${location.pathname}${path}`;


    const isActive = link === activeLink;


    const handleNavigate = (event: React.MouseEvent<HTMLElement> ) => {
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
