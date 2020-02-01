import styled from 'styled-components';
import greenTick from '../../assets/green-tick-circle.png'
import redClose from '../../assets/red-x-circle.png'

export const StyledToDo = styled.label`
 position:relative;
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

 &:before{
   content:"";
   position:absolute;
   left:25px;
   width:20px;
   height:20px;
   border-radius:100px;
   background-color: #aaaaaa;
   background-image: ${(props) => {return props.done ? `url(${greenTick})` : 'none'}};
   background-position: center;
   
}

 text-decoration: ${props => props.done ? 'line-through' : 'none'}

`;

export const StyledCheckBox = styled.input`

 opacity:0;
 cursor:pointer;
 position:absolute;
 

`

export const StyledRemoveButton = styled.button`

   position:absolute;
   right:25px;
   width:20px;
   height:20px;
   border-radius:100px;
   background-color: #aaaaaa;
   background-image: url(${redClose});
   background-position: center;
   backgroud-size:100%;
   border:none;

`


