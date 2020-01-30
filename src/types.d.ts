type ToDo = {

    text: string,
    done: boolean,
    id: number | null,
    toggleDone: (targetToDo: ToDo) => void
}

type ToDoProps = {

    text: string,
    done: boolean,
    id: number | null,
    toggleDone: (targetToDo: ToDo) => void
}