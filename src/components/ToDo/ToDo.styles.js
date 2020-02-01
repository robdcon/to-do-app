import styled, {keyframes} from 'styled-components';
import greenTick from '../../assets/green-tick-circle.png';
import redClose from '../../assets/red-x-circle.png';

const boxShadowIn = keyframes`
   0%{
      box-shadow: 9px 9px 16px rgb(163,177,198,0.6), -9px -9px 16px  rgba(255,255,255, 0.5);
   }
   100% {
      box-shadow: inset 15px 15px 20px rgb(163,177,198, 0.6), inset -15px -15px 20px  rgba(255,255,255, 0.5);
   }

`

const boxShadowOut = keyframes`
   0%{
      box-shadow: inset 15px 15px 20px rgb(163,177,198, 0.6), inset -15px -15px 20px  rgba(255,255,255, 0.6);
   }
   100% {
      
      box-shadow: 9px 9px 16px rgb(163,177,198,0.6), -9px -9px 16px  rgba(255,255,255, 0.5);
   }

`
export const StyledToDo = styled.label`

 position:relative;
 display: flex;
 justify-content:center;
 align-items:center;
 box-shadow:  9px 9px 16px rgb(163,177,198,0.6), -9px -9px 16px  rgba(255,255,255, 0.5);
 min-width:300px;
 min-height:50px;
 transition: all 1s;
 
 &.active{
    animation: ${boxShadowIn} 0.3s ease-in-out 0s forwards;
 }
 &.inactive{
   animation: ${boxShadowOut} 0.3s ease-in-out 0s forwards;
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
   background-color: transparent;
   background-image: url(${redClose});
   background-position: center;
   background-size:cover;
   border:none;

`


