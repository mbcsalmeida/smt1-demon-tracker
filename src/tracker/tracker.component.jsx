import data from "../demons.json"

import { useState, useEffect } from 'react'
import {
    TrackerRootContainer,
    TrackerListContainer,
    TrackerContent,
    TrackerAreaBoxes,
} from './tracker.styles';
import ResetButton from './reset-button.component'

function Tracker() {
    const [clickedDemons, setClickedDemons] = useState(() => {
        // Load clicked demons from local storage or default to an empty object
        const storedClickedDemons = localStorage.getItem('smt1Demons');
        return storedClickedDemons ? JSON.parse(storedClickedDemons) : {};
    });

    useEffect(() => {
        const saveToLocalStorage = () => {
            localStorage.setItem('clickedDemons', JSON.stringify(clickedDemons));
        };

        window.addEventListener('beforeunload', saveToLocalStorage);

        return () => {
            window.removeEventListener('beforeunload', saveToLocalStorage);
        };
    }, [clickedDemons]);

    const handleDemonClick = (demonId) => {
        setClickedDemons((prevClickedDemons) => ({
            ...prevClickedDemons,
            [demonId]: !prevClickedDemons[demonId],
        }));
        console.log(clickedDemons)
    };

    const totalClicked = Object.values(clickedDemons).filter(Boolean).length;

    return (
        <TrackerRootContainer>
            <header>
                <h1>Shin Megami Tensei 1 - Demon Tracker</h1>
            </header>
            <TrackerContent>
            <h3>199X</h3>
            <TrackerListContainer>
                {Object.values(data["199X"]).map((demon) => {
                    return (<div key={demon.id} onClick={() => handleDemonClick(demon.id)} >
                        
                        <TrackerAreaBoxes className={clickedDemons[demon.id] ? "clicked" : ""}>
                            <img src={demon.url} alt={demon.name}></img>
                            <h4>{demon.name}</h4>
                        </TrackerAreaBoxes>
                        
                    </div>)
                })}
            </TrackerListContainer>

            <h3>Pre-Flood Tokyo</h3>
            <TrackerListContainer>
                {Object.values(data["Pre-Flood Tokyo"]).map((demon) => {
                    return (<div key={demon.id}>
                        
                        <TrackerAreaBoxes onClick={handleDemonClick}>
                            <img src={demon.url}></img>
                            <h4>{demon.name}</h4>
                        </TrackerAreaBoxes>
                    </div>)
                })}
            </TrackerListContainer>

            <h3>Flooded Tokyo</h3>
            <TrackerListContainer>
                {Object.values(data["Flooded Tokyo"]).map((demon) => {
                    return (<div key={demon.id}>
                        
                        <TrackerAreaBoxes onClick={handleDemonClick}>
                            <img src={demon.url}></img>
                            <h4>{demon.name}</h4>
                        </TrackerAreaBoxes>
                    </div>)
                })}
            </TrackerListContainer>
            </TrackerContent>
    <br/>
    <footer>
        <h3>Total: {totalClicked} / {data["totalDemons"]}</h3>
        <ResetButton resetCallback={() => setClickedDemons({})} />
    </footer>
</TrackerRootContainer>
)
    ;
}

export default Tracker