import React, {useState} from 'react'

const ToDo = () => {
  const [tasksList, setTaskList] = useState([])
  const [task, setTask] = useState("")
  const handlerTask = (event) => {
    setTask(event.target.value)
  }
  const handlerKeyPress = (event) => {
    // event.preventDefault();

    if (event.key=='Enter'){
      if (task!=''){
        setTaskList([...tasksList,task]);
        setTask('');

      }
    }
  }

  const handlerButtomDelete = (indexid) => setTaskList(tasksList.filter((tarea, index)=> (indexid != index)))


  return (
    <div className="row mt-5">
      <div className="col-3"></div>
      <div className="col-6">
        <div className="Card" id="card">
          <div className="form-floating mb-3">
            <input onChange={handlerTask} value={task} onKeyDown={handlerKeyPress} type="text" className='form-control' id="floatingInput" placeholder='Tarea por hacer' />
            <label for="floatingInput">Tarea por hacer</label>
            
              {
                tasksList.map((tarea,i)=>{
                  return( 
                    <div className="Card card m-1" key={i}>
                      <div className="modal-header d-flex justify-content-between">
                        <h4 className="modal-title">{tarea}
                        </h4>
                          <button type='button' className='btn-close btn-danger' onClick={(event) => handlerButtomDelete(i)}></button>
                      </div>
                    </div>
                  )
                })
              }
            <div className='card m-1'>{tasksList.length} tareas pendientes</div>    
          </div>
        </div>
      
      </div>
    </div>
  )
}

export default ToDo