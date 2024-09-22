import React from "react";

const AddTask = ({ taskList, setTaskList }) => {
  const handleSubmit = (e) => {
    e.preventDefault();

    const date = new Date();
    const taskName = e.target.task.value.trim(); // Get the input value

    if (!taskName) return; // Prevent adding empty tasks

    const newTask = {
      id: date.getTime(),
      name: taskName, // Assign the task name
      time: `${date.toLocaleTimeString()} ${date.toLocaleDateString()}`,
    };

    setTaskList([...taskList, newTask]); // Add the new task to the task list
    e.target.task.value = ''; // Clear the input field after submission
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
        />
        <button type="submit">Add</button>
      </form>
    </section>
  );
};

export default AddTask;