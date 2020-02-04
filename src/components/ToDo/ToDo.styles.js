import styled, {keyframes} from 'styled-components';
import greenTick from '../../assets/green-tick-circle.png';
import redClose from '../../assets/red-x-circle.png';

export const StyledToDo = styled.label`

 box-sizing:border-box;
 position:relative;
 display: flex;
 justify-content:center;
 align-items:center;
 box-shadow:  1px 1px 5px rgb(163,177,198,0.6), -1px -1px 5px  rgba(255,255,255, 0.5);
 width:100%;
 max-width:800px;
 min-width:300px;
 min-height:50px;
 
 &.active{
   border: 1px solid blue;
 }
   
}

 text-decoration: ${props => props.done ? 'line-through' : 'none'};

`;

export const StyledCheckBox = styled.input`

 opacity:0;
 cursor:pointer;
 position:absolute;
 left:30px;
 border: ${props => props.checkBoxfocused ? '1px solid blue' : 'none'};
 
`;

export const StyledRemoveButton = styled.button`

   position:absolute;
   right:25px;
   border-radius:100px;
   background-color: transparent;
   border:none;

`;

export const StyledEditButton = styled.button`

   position:absolute;
   right:50px;
   background-color: transparent;
   border:none;

`;

export const StyledEditForm = styled.form`

display: flex;
justify-content:center;
align-items:center;
input{
   heigth:100%;
}

`


