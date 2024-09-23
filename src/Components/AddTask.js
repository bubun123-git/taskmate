import React from "react";

const AddTask = ({ taskList, setTaskList, task, setTask }) => {
  const handleSubmit = (e) => {
    e.preventDefault();

    if (task.id) {
      const date = new Date();
      const updatedTaskList = taskList.map((todo) => 
        todo.id === task.id
          ? { 
              id: task.id, 
              name: e.target.task.value, 
              time: `${date.toLocaleTimeString()} ${date.toLocaleDateString()}` 
            }
          : todo
      );
    
      setTaskList(updatedTaskList);
      setTask({})
    } else {
      const date = new Date();
      const taskName = e.target.task.value.trim(); // Get the input value

      if (!taskName) return; // Prevent adding empty tasks

      const newTask = {
        id: date.getTime(),
        name: taskName, // Assign the task name
        time: `${date.toLocaleTimeString()} ${date.toLocaleDateString()}`,
      };

      setTaskList([...taskList, newTask]); // Add the new task to the task list
      setTask({})
    }
  };

  return (
    <section className="addTask">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="task"
          autoComplete="off"
          placeholder="Add Task"
          maxLength="25"
          value={task.name || ''}
          onChange={e=> setTask({...task, name: e.target.value})}
        />
        <button type="submit">Add</button>
      </form>
    </section>
  );
};

export default AddTask;
