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
    }
`

export const TrackerListContainer = styled.div`
    overflow-y: scroll;
    display: grid;
    gap: 1rem;
    padding: 1rem;
    margin-bottom: calc(var(--footer-height, 60px) + 20px);

    @media (min-width: 600px) {
        grid-template-columns: repeat(2, 1fr); 
    }

    @media (min-width: 900px) {
        grid-template-columns: repeat(3, 1fr);
    }

    @media (min-width: 1200px) {
        grid-template-columns: repeat(4, 1fr);
    }
`

export const TrackerAreaBoxes = styled.div`
    display: grid;
    justify-items: start;
    align-items: start;
    background-color: black;
    border: thick solid white;
    box-shadow: 0 0 10px #000;
    
    & > *{
        grid-column-start: 1;
        grid-row-start: 1;
    }

    img {
        opacity: 0.4;
        object-fit: fill;
        width: 100%;
        height: 100%;
    }

    &:hover > img{
        opacity: 0.7;
    }
`

export const TrackerFieldsBox = styled.div`
    padding: 1rem;
    z-index: 1;
`

export const TrackerFields = styled.div`
    display: block;
    position: relative;
    padding-left: 35px;
    margin-bottom: 12px;
    cursor: pointer;
    font-size: 22px;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    
    input {
        position: absolute;
        opacity: 0;
        cursor: pointer;
        height: 0;
        width: 0;
    }

    .checkmark {
        position: absolute;
        top: 0;
        left: 0;
        height: 25px;
        width: 25px;
        background-color: #eee;
    }

    &:hover input ~ .checkmark {
        background-color: #ccc;
    }

    input:checked ~ .checkmark {
        background-color: #2196F3;
    }

    .checkmark:after {
        content: "";
        position: absolute;
        display: none;
    }

    input:checked ~ .checkmark:after {
        display: block;
    }

    .checkmark:after {
        left: 9px;
        top: 5px;
        width: 5px;
        height: 10px;
        border: solid white;
        border-width: 0 3px 3px 0;
        -webkit-transform: rotate(45deg);
        -ms-transform: rotate(45deg);
        transform: rotate(45deg);
    }
    
`

