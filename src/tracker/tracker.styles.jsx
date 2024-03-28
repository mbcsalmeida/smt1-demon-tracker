import '../App.css'
import styled from 'styled-components';

export const TrackerRootContainer = styled.div`
    width: 100%;
    height: 100%;

    h3{
        text-align: center;
    }

    legend{
        margin-left: auto;
        margin-right: auto;
 
        &.active + .tracker-fields{
            display: block !important;
        }

    }

    fieldset{
        background-color: #000210;
        border-color: black;
    }

    footer{
        position: fixed;
        height: max-content;
        padding-top: 5px;
        padding-bottom: 5px;
        bottom: 0;
        width: inherit;
        background-color: #1f1f1f;
    }
`

export const TrackerListContainer = styled.div`
    max-height: 550px;
    overflow-y: scroll;
`

export const TrackerFields = styled.div`
    display: none;

    &:active{
        display: block;
    }
`

