import React, { useState } from 'react';
import { Formulario } from './Formulario';
import { Tarea } from './Tarea';
import '../todo/styles.css';

const TodoList = () => {

  const [tarea, setTarea] = useState('')
  const [listadoTareas, setListadoTareas] = useState([])

    function handleSubmit(e) {
      e.preventDefault()

      if(tarea === '') {
        alert ('"Debes ingresar una Tarea"')
        return
      }

      const nuevaTarea = {
        id: Date.now(),
        tarea: tarea,
        completado: false
      }

      const temp = [nuevaTarea, ...listadoTareas]
      setListadoTareas(temp)

      setTarea('')
    }

    function handleChange(e) {
      setTarea(e.target.value)
    }

    function onActualizarTarea(objEditarTarea) {
      const {id, tarea} = objEditarTarea

      const temp = [...listadoTareas]
      const elemento = temp.find(item => item.id === id)
      elemento.tarea = tarea

      setListadoTareas(temp)
    }

    function onBorrarTarea(id) {
      const temp = listadoTareas.filter(item => item.id !== id)
      setListadoTareas(temp)
    }

  return (
    <>
      <div className='contenedorPrincipal'>
        <h1 className='text-black'>To-Do-List</h1>

        <div className='contenedorFormulario'>
          <Formulario 
            tarea={tarea}
            handleSubmit={handleSubmit}
            handleChange={handleChange} />
        </div>

        <div className='contenedorTareas'>
          <h2>Lista de Tareas</h2>
          <div className='contenedorInfoTareas'>
            {
              listadoTareas.map(tarea => (
                <Tarea
                  key={tarea.id}
                  id={tarea.id}
                  tarea={tarea} 
                  onActualizarTarea={onActualizarTarea}
                  onBorrarTarea={onBorrarTarea} />
              ))
            }
          </div>
        </div>
      </div>
    </>
  );
}

export default TodoList;