import { useState } from "react";
import { ListaTareas } from "./ListaTareas";

export const ToDoApp = () => {
  const [nuevaTarea, setNuevaTarea] = useState<string>("");
  const [listaTareas, setListaTareas] = useState<string[]>([]);

  const handleAddTask = () => {
    if (nuevaTarea.trim() === "") return;
    setListaTareas((tareasAnteriores) => [...tareasAnteriores, nuevaTarea]);
    setNuevaTarea("");
  };

  const handleDeleteTask = (index: number) => {
    setListaTareas((tareas) => tareas.filter((_, i) => i !== index));
  };

  return (
    <>
      <h1>Lista de Tareas</h1>
      <input
        type="text"
        value={nuevaTarea}
        onChange={(e) => setNuevaTarea(e.target.value)}
        placeholder="Nueva Tarea"
      />
      <button onClick={handleAddTask}>Agregar Tarea</button>
      <ListaTareas listaTareas={listaTareas} borrarTarea={handleDeleteTask} />
    </>
  );
};

export default ToDoApp;
