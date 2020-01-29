import styled from 'styled-components';

export const StyledTextAreaContainer = styled.div`

 display: flex;
 position:absolute;
 overflow:hidden;
 bottom:0;
 margin-bottom:${(props) => props.active ? '0' : '-50px'};
 width:100%;
 width:100vw;
 height:2rem;
 background-color:#eeeeee;

`;

export const StyledToggleButton = styled.button`

 position:absolute;
 right:0;
 bottom:${(props) => props.active ? '0' : '50px'};

`;
