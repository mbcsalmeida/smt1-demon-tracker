import '../App.css'
import styled from 'styled-components';

export const TrackerRootContainer = styled.div`
    width: 100%;
    height: 100%;

    h1, h3{
        text-align: center;
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
    max-width: 90%;
`

export const TrackerListContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
    gap: 15px;
`

export const TrackerAreaBoxes = styled.div`
    display: grid;
    justify-items: start;
    align-items: start;
    box-shadow: 0 0 10px #000;
    padding: 10px;
    
    & > *{
        grid-column-start: 1;
        grid-row-start: 1;
    }

    img {
        filter: grayscale(0.8);
        width: 100%;
        height: 100%;
        object-fit: contain;
        aspect-ratio: 1 / 1;
    }

    &:hover{
        box-shadow: 0 0 2px #9a9595;
    }

    &.clicked{
        box-shadow: 0 0 10px #9a9595;
    }

    &.clicked > img{
        filter: grayscale(0);
    }

    &:hover > img{
        filter: grayscale(0.2);
    }
`

