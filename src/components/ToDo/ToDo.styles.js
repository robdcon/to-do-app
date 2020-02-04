import styled, {keyframes} from 'styled-components';

export const StyledToDo = styled.label`

   box-sizing:border-box;
   position:relative;
   display: flex;
   justify-content:center;
   align-items:center;
   box-shadow:  1px 1px 5px rgb(163,177,198,0.6), -1px -1px 5px  rgba(255,255,255, 0.5);
   width:100%;
   min-height:50px;
   border-radius: 3px;
   text-decoration: ${props => props.done ? 'line-through' : 'none'};
 
   &.active {
      border: 1px solid #009688;
   }

`;

export const StyledCheckBox = styled.input`

   opacity:0;
   cursor:pointer;
   position:absolute;
   left:30px;
   border: ${props => props.checkBoxfocused ? '1px solid #009688' : 'none'};
 
`;

export const StyledRemoveButton = styled.button`

   position: absolute;
   display: flex;
   right: 25px;
   background-color: transparent;
   border: none;
   border-radius:3px;
   padding:0.015em;
   box-sizing:border-box;
   &:focus {
      border: 1px solid #009688;
      outline: none;
   }

`;

export const StyledEditButton = styled.button`

   position: absolute;
   display: flex;
   right: 50px;
   background-color: transparent;
   border: none;
   border-radius:3px;
   padding:0.015em;
   box-sizing:border-box;
   &:focus {
      border: 1px solid #009688;
      outline: none;
   }

`;

export const StyledEditForm = styled.form`

   display: flex;
   justify-content:center;
   align-items:center;
   width: 100%;
   padding-right: 1em;

`;

export const StyledEditInput = styled.input`

   width: 80%;
   min-width: 300px;
   padding: 0.5rem;
   border: none;
   border-radius:3px;
   &:focus {
      border: 1px solid #009688;
      outline: none;
   }

`;


