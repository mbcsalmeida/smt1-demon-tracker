import data from "../demons.json"

import { useState, useEffect } from 'react'
import {
    TrackerRootContainer,
    TrackerListContainer,
    TrackerContent,
    TrackerAreaBoxes,
    FooterContainer,
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
                <h4>Made by <a href="https://sioneus.me">sioneus</a>. Thank you to <a href="https://www.megatenwiki.com">Megaten Wiki</a> for the demon sprites.</h4>
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
                    return (<div key={demon.id} onClick={() => handleDemonClick(demon.id)} >
                        
                    <TrackerAreaBoxes className={clickedDemons[demon.id] ? "clicked" : ""}>
                        <img src={demon.url} alt={demon.name}></img>
                        <h4>{demon.name}</h4>
                    </TrackerAreaBoxes>
                    
                </div>)
                })}
            </TrackerListContainer>

            <h3>Flooded Tokyo</h3>
            <TrackerListContainer>
                {Object.values(data["Flooded Tokyo"]).map((demon) => {
                        return (<div key={demon.id} onClick={() => handleDemonClick(demon.id)} >
                            
                            <TrackerAreaBoxes className={clickedDemons[demon.id] ? "clicked" : ""}>
                                <img src={demon.url} alt={demon.name}></img>
                                <h4>{demon.name}</h4>
                            </TrackerAreaBoxes>
                            
                        </div>)
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