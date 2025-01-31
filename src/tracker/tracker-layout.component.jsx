import { useState } from 'react'
import Tracker from "./tracker.component.jsx";
import {TrackerLayoutStyles} from "./tracker-layout.styles.jsx";

export const TrackerLayout = () => {

    
    const [isLightMode, setIsLightMode] = useState(false);
    const toggleLightMode = () => {
        setIsLightMode((prev) => !prev);
    };


    return <TrackerLayoutStyles className={isLightMode ? 'light' : 'dark'}>
        <Tracker changeLightMode={toggleLightMode}/>
    </TrackerLayoutStyles>
}