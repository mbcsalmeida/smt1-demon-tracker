import data from "../demons.json"

import { useState, useEffect } from 'react'
import {
    TrackerRootContainer,
    TrackerListContainer,
    TrackerContent,
    TrackerAreaBoxes,
    FooterContainer,
    ButtonContainer,
    TrackerBoxesDiv
} from './tracker.styles';
import ResetButton from './reset-button.component'

function Tracker({changeLightMode}) {
    const [clickedDemons, setClickedDemons] = useState(() => {
        // Load clicked demons from local storage or default to an empty object
        const storedClickedDemons = localStorage.getItem('smt1Demons');
        return storedClickedDemons ? JSON.parse(storedClickedDemons) : {};
    });
    const [gridSize, setGridSize] = useState("medium");
    const [showText, setShowText] = useState(true);



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

    const saveProgress = () => {
        localStorage.setItem('smt1Demons', JSON.stringify(clickedDemons));
        alert("Progress saved!");
    };
    
    const uploadProgress = () => {
        const savedData = localStorage.getItem('smt1Demons');
        if (savedData) {
            setClickedDemons(JSON.parse(savedData));
            alert("Progress loaded!");
        } else {
            alert("No saved progress found.");
        }
    };

    const downloadProgress = () => {
        const dataStr = JSON.stringify(clickedDemons, null, 2);
        const blob = new Blob([dataStr], { type: "application/json" });
        const url = URL.createObjectURL(blob);
        
        const a = document.createElement("a");
        a.href = url;
        a.download = "progress.json";
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
    };

    const handleFileUpload = (event) => {
        const file = event.target.files[0];
        if (!file) return;
    
        const reader = new FileReader();
        reader.onload = (e) => {
            try {
                const jsonData = JSON.parse(e.target.result);
                setClickedDemons(jsonData);
                alert("Progress successfully loaded!");
            } catch (error) {
                alert("Invalid file format. Please upload a valid JSON file.");
            }
        };
        reader.readAsText(file);
    };

    
    

    return (
        <TrackerRootContainer>
            <header>
                <h1>Shin Megami Tensei 1 - Demon Tracker</h1>
                <h3>Made by <a href="https://sioneus.me">sioneus</a>. Thank you to <a href="https://www.megatenwiki.com">Megaten Wiki</a> for the demon sprites.</h3>
            </header>
            <ButtonContainer>
                <h4>Hover over the demons to see a location where they spawn. </h4>
                <h4>Settings buttons:</h4>
                <button className="tracker-button" data-tooltip="Smaller Grid" onClick={() => setGridSize("small")}>🔽</button>
                <button className="tracker-button" data-tooltip="Bigger Grid" onClick={() => setGridSize("large")}>🔼</button>
            </ButtonContainer>

            <TrackerContent>
            <h3>199X</h3>
            <TrackerListContainer key={"TrackerListContainer"+"199X"} size={gridSize}>
                {Object.values(data["199X"]).map((demon) => {
                    return (
                        <TrackerBoxesDiv key={demon.id} onClick={() => handleDemonClick(demon.id)}>
                            <TrackerAreaBoxes key={"TrackerAreaBox"+demon.id} className={clickedDemons[demon.id] ? "clicked" : ""}>
                                <img key={"img"+demon.id}src={demon.url} alt={demon.name} />
                                <h4 key={"name"+demon.id}>{demon.name}</h4>
                            </TrackerAreaBoxes>
                            {demon.extra && <span key={"extra"+demon.id} className="extra-icon" data-tooltip={demon.extra}>⭐</span>}
                                
                            <span key={"location"+demon.id} className="location-tooltip">{demon.location}</span>
                        </TrackerBoxesDiv>
                    );
                })}
            </TrackerListContainer>

            <h3>Pre-Flood Tokyo</h3>
            <TrackerListContainer key={"TrackerListContainer"+"Pre-Flood Tokyo"} size={gridSize}>
                {Object.values(data["Pre-Flood Tokyo"]).map((demon) => {
                    return (
                        <TrackerBoxesDiv key={demon.id} onClick={() => handleDemonClick(demon.id)}>
                            <TrackerAreaBoxes key={"TrackerAreaBox"+demon.id} className={clickedDemons[demon.id] ? "clicked" : ""}>
                                <img key={"img"+demon.id}src={demon.url} alt={demon.name} />
                                <h4 key={"name"+demon.id}>{demon.name}</h4>
                            </TrackerAreaBoxes>
                            {demon.extra && <span key={"extra"+demon.id} className="extra-icon" data-tooltip={demon.extra}>⭐</span>}
                                
                            <span key={"location"+demon.id} className="location-tooltip">{demon.location}</span>
                        </TrackerBoxesDiv>
                    );
                })}
            </TrackerListContainer>

            <h3>Flooded Tokyo</h3>
            <TrackerListContainer  key={"TrackerListContainer"+"Flooded Tokyo"} size={gridSize}>
                {Object.values(data["Flooded Tokyo"]).map((demon) => {
                        return (
                            <TrackerBoxesDiv key={demon.id} onClick={() => handleDemonClick(demon.id)}>
                                <TrackerAreaBoxes key={"TrackerAreaBox"+demon.id} className={clickedDemons[demon.id] ? "clicked" : ""}>
                                    <img key={"img"+demon.id}src={demon.url} alt={demon.name} />
                                    <h4 key={"name"+demon.id}>{demon.name}</h4>
                                </TrackerAreaBoxes>
                                {demon.extra && <span key={"extra"+demon.id} className="extra-icon" data-tooltip={demon.extra}>⭐</span>}
                                    
                                <span key={"location"+demon.id} className="location-tooltip">{demon.location}</span>
                            </TrackerBoxesDiv>
                        );
                    })}
            </TrackerListContainer>
            </TrackerContent>
    <br/>
    <FooterContainer>
    <h3>Total: {totalClicked} / {data["totalDemons"]}</h3>
    <div style={{display: "flex"}}>
        <button className="footer-button" data-tooltip="Save your progress" onClick={saveProgress}>
            💾
        </button>
        <button className="footer-button" data-tooltip="Upload your progress" onClick={uploadProgress}>
            📂
        </button>
        <button className="footer-button" data-tooltip="Download progress file" onClick={downloadProgress}>
            📥
        </button>
        <label className="footer-button" data-tooltip="Upload progress file">
            📤
            <input type="file" accept=".json" onChange={handleFileUpload} />
        </label>
        <button className="footer-button" data-tooltip="Reset your progress" onClick={() => setClickedDemons({})}>
            🔄
        </button>
    </div>
</FooterContainer>
</TrackerRootContainer>
)
    ;
}

export default Tracker