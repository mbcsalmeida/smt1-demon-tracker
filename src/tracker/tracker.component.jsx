import { useState } from 'react'
import data from '../assets/demons.json'
import picture from '../assets/01-Arcade.png';
import {
    TrackerRootContainer,
    TrackerListContainer,
    TrackerFields,
    TrackerAreaBoxes,
    TrackerFieldsBox
} from './tracker.styles';

function Tracker() {
    const [clickedDemons, setClickedDemons] = useState({});

    const handleDemonClick = (demonId) => {
        setClickedDemons((prevClickedDemons) => ({
            ...prevClickedDemons,
            [demonId]: !prevClickedDemons[demonId],
        }));
    };

    const totalClicked = Object.values(clickedDemons).filter(Boolean).length;

    return (
        <TrackerRootContainer>
            <header>
                <h1>Shin Megami Tensei 1 - Demon Tracker</h1>
            </header>
            <TrackerListContainer>
                {Object.entries(data.data).map(([area, demons]) => {
                    return (<div key={area+"demons"}>
                        <h3>{area}</h3>
                        <TrackerAreaBoxes>
                            <img src={picture}></img>
                            <TrackerFieldsBox>
                                {demons.map((demon) => (
                                    <TrackerFields key={area + demon.id}>
                                        <label>
                                            <input
                                                type="checkbox"
                                                checked={clickedDemons[demon.id]}
                                                onChange={() => handleDemonClick(demon.id)}
                                            />
                                            <span className="checkmark"></span>
                                            {demon.name}
                                        </label>
                                    </TrackerFields>
                                ))}
                            </TrackerFieldsBox>
                        </TrackerAreaBoxes>
                    </div>)
                })}
        </TrackerListContainer>
    <br/>
    <footer>
        <h3>Total: {totalClicked} / {data.totalDemons}</h3>
    </footer>
</TrackerRootContainer>
)
    ;
}

export default Tracker