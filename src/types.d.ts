type ToDo = {

    text: string,
    done: boolean,
    id: number | null
    
}


type ToggleToDo = (selectedToDo: ToDo) => void;

type AddToDo = (newToDo: string) => void;

type RemoveToDo = (selectedToDo: ToDo) => void;

//type EditToDo = (newToDo: ToDo) => void;

type EditToDo = (selectedToDo: ToDo) => void;

