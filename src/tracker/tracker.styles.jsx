import '../App.css'
import styled from 'styled-components';

export const TrackerRootContainer = styled.div`
    width: 100%;
    min-height: 100vh;
    display: flex;
    flex-direction: column;

    h1, h3, h4, a{
        text-align: center;
        text-decoration: none;
    }
    header{
        padding: 1rem;
    }

    footer{
        position: fixed;
        height: max-content;
        padding: 5px;
        bottom: 0;
        width: 100%;
        text-align: center;
        background-color: #1f1f1f;
        border-top: thick solid white;
        box-shadow: 0 0 10px #000;
        z-index: 2;
        --footer-height: 60px;
        display: ruby;
    }
`

export const TrackerContent = styled.div`
    padding-bottom: 80px; /* Ensures content doesn't get hidden behind the footer */
   
`

export const TrackerListContainer = styled.div`
    display: grid;
    grid-template-columns: ${({ size }) =>
        size === "small" ? "repeat(auto-fit, minmax(100px, 1fr))"
        : size === "large" ? "repeat(auto-fit, minmax(150px, 1fr))"
        : "repeat(auto-fit, minmax(150px, 1fr))"};
    gap: 15px;
    margin: 20px;


`

export const TrackerBoxesDiv = styled.div`
    position: relative;

    .location-tooltip {
        transform: translateX(-50%);
        background: rgba(255, 255, 255, 0.9);
        color: black;
        padding: 5px;
        border-radius: 5px;
        font-size: 0.8rem;
        white-space: nowrap;
        opacity: 0;
        text-overflow: wrap;
        transition: opacity 0.2s ease-in-out;
        pointer-events: none; /* Prevents interaction */
        position: absolute;
        bottom: 0;
        left: 50%;
    }

    
    &:hover .location-tooltip {
        opacity: 1;
    }

    .extra-icon {
        position: absolute;
        top: 5px;
        right: 5px;
        font-size: 1.2rem;
        color: gold;
        cursor: pointer;
    }

    .extra-icon:hover::after {
        content: attr(data-tooltip);
        position: absolute;
        top: 0; 
        left: -150%;
        transform: translateX(-50%);
        background: rgba(255, 255, 255, 0.9);
        color: black;
        padding: 5px;
        border-radius: 5px;
        font-size: 0.8rem;
        white-space: nowrap;
        z-index: 100; 
        box-shadow: 0 0 5px rgba(0, 0, 0, 0.3);
    }
`

export const TrackerAreaBoxes = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    position: relative;
    box-shadow: 0 0 10px #000;
    padding: 10px;
    overflow: hidden;

    img {
        filter: grayscale(0.8);
        width: 100%;
        height: 100%;
        object-fit: contain;
        aspect-ratio: 1 / 1;
    }

    h4 {
    position: absolute;
    bottom: 5px;
    left: 50%;
    transform: translateX(-50%);
    text-align: center;
    background: rgba(0, 0, 0, 0.7);
    color: white;
    padding: 3px 5px;
    font-size: 0.9rem;
    width: 100%;
    max-width: 90%;
}



    &:hover {
        box-shadow: 0 0 2px #9a9595;
    }

    &.clicked {
        box-shadow: 0 0 10px #9a9595;
    }

    &.clicked > img {
        filter: grayscale(0);
    }

    &:hover > img {
        filter: grayscale(0.2);
    }
`;


export const FooterContainer = styled.footer`
    position: fixed;
    bottom: 0;
    width: 100%;
    background-color: #1f1f1f;
    border-top: thick solid white;
    box-shadow: 0 0 10px #000;
    display: flex;
    justify-content: space-between;  /* Ensures spacing between elements */
    align-items: center;
    padding: 10px 20px;
    font-size: 1rem;
    color: white;

    .footer-content {
        display: flex;
        align-items: center;
        gap: 15px;
        flex-grow: 1;
        justify-content: center;
    }

    .footer-button {
        position: relative;
        background: none;
        border: none;
        cursor: pointer;
        color: white;
        font-size: 1.2rem;
        display: flex;
        align-items: center;
        justify-content: center;
        width: 40px;
        height: 40px;
    }

    .footer-button:hover::after {
        content: attr(data-tooltip);
        position: absolute;
        bottom: 100%;
        left: 50%;
        transform: translateX(-50%);
        background: rgba(255, 255, 255, 0.9);
        color: black;
        padding: 5px;
        border-radius: 5px;
        font-size: 0.8rem;
        white-space: nowrap;
    }

    input[type="file"] {
        display: none;
    }
`
export const ButtonContainer = styled.div`
    display: flex;
    justify-content: center;
    gap: 15px;
    margin-bottom: 10px;

    .tracker-button {
        background: none;
        border: none;
        font-size: 1.5rem;
        cursor: pointer;
        color: white;
        transition: 0.2s;

        &:hover {
            color: #ffcc00;
        }
    }

    .tracker-button:hover::after {
        content: attr(data-tooltip);
        position: relative;
        transform: translateX(-50%);
        background: rgba(255, 255, 255, 0.9);
        color: black;
        padding: 5px;
        border-radius: 5px;
        font-size: 0.8rem;
        white-space: nowrap;
    }
`;

