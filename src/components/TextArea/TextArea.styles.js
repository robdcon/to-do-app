import styled from 'styled-components';

export const StyledTextAreaContainer = styled.form`

    display: flex;
    justify-content:center;
    align-items:center;
    position:fixed;
    bottom: 0;
    padding:  3rem;
    width:100%;
    height:80px;
    background-color:#009688;
    box-sizing:border-box;
 

`;

export const StyledToggleButton = styled.button`

    border: none;
    background-color: transparent;
    position: absolute;
    right: 3%;
    padding:0.35em;
    &focus {
        outline: none;
        border: 1px solid #ffffff;
        border-radius: 3px;
    }

`;

export const StyledInput = styled.input`

    height: 3rem;
    width: 90%;
    max-width: 600px;
    margin: 0 auto;
    border-radius:3px;
    border:none;
    padding-left:1rem;

`;

export const StyledLabel = styled.label`

border: 0;
clip: rect(0 0 0 0);
height: 1px;
margin: -1px;
overflow: hidden;
padding: 0;
position: absolute;
width: 1px;

`;



