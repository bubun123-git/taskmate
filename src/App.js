import { useEffect, useState } from "react";
import "./App.css";
import AddTask from "./Components/AddTask";
import Header from "./Components/Header";
import ShowTask from "./Components/ShowTask";

function App() {
  // Initialize taskList state and handle corrupted localStorage data
  const [taskList, setTaskList] = useState(() => {
    const storedTasks = localStorage.getItem("tasklist");
    try {
      return storedTasks ? JSON.parse(storedTasks) : [];
    } catch (error) {
      console.error("Error parsing localStorage data:", error);
      return [];
    }
  });

  const [task, setTask] = useState({});

  // Sync taskList to localStorage whenever taskList changes
  useEffect(() => {
    localStorage.setItem("tasklist", JSON.stringify(taskList));
  }, [taskList]);

  return (
    <div className="App">
      <Header />
      <AddTask
        taskList={taskList}
        setTaskList={setTaskList}
        task={task}
        setTask={setTask}
      />
      <ShowTask
        taskList={taskList}
        setTaskList={setTaskList}
        task={task}
        setTask={setTask}
      />
    </div>
  );
}

export default App;