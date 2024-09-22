import { useState } from "react";
import "./App.css";
import AddTask from "./Components/AddTask";
import Header from "./Components/Header";
import ShowTask from "./Components/ShowTask";

function App() {
  const [taskList, setTaskList] = useState([]);

  return (
    <div className="App">
      <Header />
      <AddTask taskList={taskList} setTaskList={setTaskList} />
      <ShowTask taskList={taskList} setTaskList={setTaskList} />
    </div>
  );
}

export default App;
