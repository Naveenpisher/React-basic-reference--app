import React, { useState } from 'react'

function AddTodo(props) {
    const [task, setTask, addNewTask, showButton, clearTodo, editTask] =
        [props.task, props.setTask, props.addNewTask, props.showBtn,
        props.clearTodo, props.editTask];

    const newTask = (event) => {
        addNewTask();
        setTask({ id: '', taskName: '' });
    }

    const showButtonElements = () => {
        if (showButton) {
            return (<React.Fragment>
                <button className="btn btn-info mr-2" type="button" onClick={() => { editTask() }}>Update</button>
                <button className="btn btn-danger" type="button" onClick={() => { clearTodo() }}>Clear</button>
            </React.Fragment>)
        } else {
            return (<React.Fragment></React.Fragment>)
        }
    }

    return (
        <div className="mt-2 mb-2">
            <h3 className="h3 text-center">Add New TODO</h3>
            <form action="" noValidate onSubmit={(event) => { event.preventDefault() }}>
                <div className="input-group">
                    <input
                        type="text"
                        className="form-control"
                        value={task.taskName}
                        onChange={(event) => { setTask({ ...task, taskName: event.target.value }) }}
                        onKeyDown={(event) => {
                            if (event.key == 'Enter') {
                                newTask(task)
                            }
                        }}
                        placeholder="" aria-label="" aria-describedby="basic-addon1" />
                    <div className="input-group-append">
                        <button className="btn btn-success mr-2 ml-2" type="button" onClick={() => { newTask(task) }}>Add Task</button>
                        {
                            showButtonElements()
                        }
                    </div>
                </div>
            </form>

        </div>
    )
}

export default AddTodo
