import styled from 'styled-components';

export const StyledToDo = styled.div`

 display: flex;
 justify-content:center;
 align-items:center;
 box-shadow: 9px 9px 16px rgb(163,177,198,0.6), -9px -9px 16px  rgba(255,255,255, 0.5);
 min-width:300px;
 min-height:100px;
 transition: all 1s;
 &:hover {
    box-shadow: inset 9px 9px 10px rgb(163,177,198,0.6), inset -9px -9px 10px  rgba(255,255,255, 0.5);
 }

`;
