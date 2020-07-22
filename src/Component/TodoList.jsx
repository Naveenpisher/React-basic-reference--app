import React from 'react'

function TodoList(props) {
    const [todoList, editPatch, deleteTask] = [props.todo, 
        props.editPatch, props.deleteToTask]
    return (
        <div>
            <h2 className="h2 mt-3">
                List of TODO Task
            </h2>
            <ul className="list-group">
                {
                    todoList.map(t => {
                        return (
                            <li key={t.id} className="list-group-item d-flex justify-content-between align-items-center">
                                {t.taskName} <span>
                                    <span className="badge badge-primary mr-2 p-2" role="button" onClick={() => { editPatch(t) }}>Edit</span>
                                    <span className="badge badge-danger p-2" role="button" onClick={() => { deleteTask(t) }}>Delete</span>
                                </span>
                            </li>
                        )
                    })
                }
            </ul>

        </div>
    )
}

export default TodoList
