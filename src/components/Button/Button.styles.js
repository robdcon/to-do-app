import styled from 'styled-components';

export const StyledButton = styled.button`
    
    cursor:pointer;
    text-decoration:none;
    background-color:transparent;
    border:none;
    padding: 0.25rem;
    box-sizing:border-box;
    &:focus {
        border: 1px solid #009688;
        outline: none;
     }
`;
