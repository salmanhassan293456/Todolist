import logo from "./logo.svg";
import "./App.css";
import TaskForm from "./components/TaskForm";
import TaskList from "./components/TaskList";
import { useState, useEffect } from "react";

function App() {
  const [tasks, setTasks] = useState([]);
  const [filter, setFilter] = useState("All");
  const [completedTasks, setCompletedTasks] = useState(0);
  const [activeTasks, setActiveTasks] = useState(0);

  useEffect(() => {
    const storedTasks = JSON.parse(localStorage.getItem("tasks"));

    if (storedTasks !== null) {
      setTasks(storedTasks);
      updateTaskCounts(storedTasks);
    }
  }, []);

  useEffect(() => {
    if (tasks.length > 0) {
      localStorage.setItem("tasks", JSON.stringify(tasks));
      updateTaskCounts(tasks);
    }
  }, [tasks]);

  function addTask(name) {
    setTasks((prev) => [...prev, { name, done: false }]);
    setActiveTasks((prev) => prev + 1); // New task is active
  }

  function updateTaskDone(taskIndex, newDone) {
    setTasks((prev) => {
      const newTasks = [...prev];
      newTasks[taskIndex].done = newDone;
      return newTasks;
    });

    if (newDone) {
      setCompletedTasks((prev) => prev + 1);
      setActiveTasks((prev) => prev - 1);
    } else {
      setCompletedTasks((prev) => prev - 1);
      setActiveTasks((prev) => prev + 1);
    }
  }

  function clearCompleted() {
    const updatedTasks = tasks.filter((task) => !task.done);
    setTasks(updatedTasks);
    localStorage.setItem("tasks", JSON.stringify(updatedTasks));
  }

  const totalTasks = tasks.length;
  const numberLeft = activeTasks;

  const updateTaskCounts = (tasks) => {
    const completedCount = tasks.filter((task) => task.done).length;
    const activeCount = tasks.length - completedCount;
    setCompletedTasks(completedCount);
    setActiveTasks(activeCount);
  };

  function onDelete(index) {
    const updatedTasks = tasks.filter((task, i) => i !== index);
    setTasks(updatedTasks);
    localStorage.setItem("tasks", JSON.stringify(updatedTasks));
    updateTaskCounts(updatedTasks);
  }

  return (
    <div className="app-container">
      <div className="background-image">
        <div className="main-container">
          <div className="centered-container">
            <div className="heading-text">TODO</div>
            <TaskForm className="task-form" onAdd={addTask} />
            <TaskList
              tasks={tasks}
              onToggle={updateTaskDone}
              numberLeft={numberLeft}
              filter={filter}
              completedTasks={completedTasks}
              activeTasks={activeTasks}
              setFilter={setFilter}
              clearCompleted={clearCompleted}
              onDelete={onDelete}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
