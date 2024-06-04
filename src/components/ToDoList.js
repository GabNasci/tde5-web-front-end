import { useState } from 'react'
import './ToDoList.css'

const ListItem = ({ toDoItem, deleteTask, setClicado, clicado}) => {
    return (
        <li className='itemLista' style={toDoItem.done ? { backgroundColor: "blue" } : null}>
            <p>{toDoItem.name}</p>
            <div>
                <button onClick={()=> deleteTask(toDoItem.id)} className={'deleteBtn'}>Excluir</button>
                <button onClick={() => setClicado(!clicado)} className={'completeBtn'}>Concluir</button>
            </div>
        </li>
    );
}

const ToDoList = ({ pageTitle }) => {

    const [toDoList, setToDoList] = useState([])
    const [inputValue, setInputValue] = useState()
    const [clicado, setClicado] = useState(false)

    const deleteTask = (id) => {
        const newArr = toDoList.filter(item => item.id !== id)
        setToDoList(newArr)

    }

    const onInputChange = (e) => {
        setInputValue(e.target.value)
    }

    const onClickAddTask = () => {
        if (!inputValue) return
        setToDoList([...toDoList, {id: toDoList.length + 1, name: inputValue, done: false }])
        setInputValue('')
    }


    return (
        <div>
            <div className="header">
                <h1>{pageTitle}</h1>
            </div>
            <div className='input_container'>
                <label for='taskText' className='inputLabel'> Digite seu Lal:</label>
                <input
                    id='taskText'
                    name='taskText'
                    type="text"
                    className='input'
                    onChange={onInputChange}
                    value={inputValue}
                />
                <button onClick={onClickAddTask}>Adicionar</button>
            </div>
            <div className='todo_container'>
                <ol>
                    {toDoList.map((toDoItem) => (
                        <ListItem setClicado={setClicado} clicado={clicado} toDoItem={toDoItem} deleteTask={deleteTask}/>
                    ))}
                </ol>

            </div>

        </div>
    )
}

export default ToDoList