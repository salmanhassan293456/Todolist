import React, { useState } from "react";

function TaskForm({ onAdd }) {
  const [taskName, setTaskName] = useState("");
  function handleSubmit(ev) {
    ev.preventDefault();
    onAdd(taskName);
    setTaskName("");
  }
  return (
    <form onSubmit={handleSubmit}>
      <div className="task-form">
        <input
          className="form-input"
          type="text"
          value={taskName}
          onChange={(ev) => setTaskName(ev.target.value)}
          placeholder="Create a new todo…"
        />
      </div>
    </form>
  );
}

export default TaskForm;
