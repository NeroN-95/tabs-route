import React, {lazy, Suspense, useEffect, useState} from 'react';
import tabsData from "../Data/DB.json";
import Tab from "../Components/Tab/Tab";
import styles from "./navigation.module.css";
import {useLocation, useNavigate} from "react-router-dom";
import {OrdersTab} from "./constans";

// Method for testing react lazy
function delayForDemo(promise) {
  return new Promise(resolve => {
    setTimeout(resolve, 2000);
  }).then(() => promise);
}

const DummyTable = lazy(() => delayForDemo(import('../Components/DummyTable')));

const Navigation = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const firstLink = `#/${tabsData.find((item) => item.order === OrdersTab.FirstTab).path}`;

  const [activeLink, setActiveLink] = useState(location.hash ?? firstLink);

  useEffect(() => {
    if (location.hash) {
      setActiveLink(location.hash)
      navigate(location.hash)
    } else {
      setActiveLink(firstLink)
      navigate(firstLink)
    }
  }, [firstLink, location.hash, navigate]);


  const rendersComponents = () => {
    if (activeLink === location.hash) {
      return (
        <DummyTable id={activeLink} />
      )
    }
  }

  const sortedTabsOrder = [...tabsData.sort((a, b) => a.order - b.order)]



  return (
    <div className={styles.WrapperNavigation}>
      <div className={styles.WrapperNavigationTabs}>
        {sortedTabsOrder.map((tab) => (
          <Tab
            key={tab.id}
            path={tab.path}
            title={tab.title}
            order={tab.order}
            setActiveLink={setActiveLink}
            activeLink={activeLink}
          >
            {tab.title}
          </Tab>
        ))}
      </div>
      <div className={styles.ContainerTabs}>
        <Suspense fallback={<div>...Loading</div>}>
          {rendersComponents()}
        </Suspense>
      </div>
    </div>
  );
}

export default Navigation;
