import React, { useState } from "react";
import CheckBox from "./CheckBox";

function TaskList({
  tasks,
  onToggle,
  numberLeft,
  filter,
  completedTasks,
  activeTasks,
  setFilter,
  clearCompleted,
  onDelete,
}) {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const taskArray = tasks || [];

  const filteredTasks = (() => {
    switch (filter) {
      case "All":
        return taskArray;
      case "Active":
        return taskArray.filter((task) => !task.done);
      case "Completed":
        return taskArray.filter((task) => task.done);
      default:
        return taskArray;
    }
  })();

  return (
    <div className="background-container">
      <div className="content-container">
        <div className="checkbox-container">
          {filteredTasks.length > 0 ? (
            filteredTasks.map((task, index) => (
              <div
                className="checkbox-item"
                key={index}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                <CheckBox
                  className="checkbox"
                  checked={task.done}
                  onClick={() => onToggle(index, !task.done)}
                />
                <div
                  className="list-item"
                  style={{
                    color: task.done ? "#D1D2DA" : "inherit",

                    textDecorationLine: task.done ? "line-through" : "none",
                    transition: "opacity 0.3s linear",
                    opacity: 1,
                  }}
                >
                  {task.name}
                </div>
                {hoveredIndex === index && (
                  <div className="delete-icon" onClick={() => onDelete(index)}>
                    {/* Replace the following SVG with your actual SVG */}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="18"
                      height="18"
                      viewBox="0 0 18 18"
                      fill="none"
                    >
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M17.6777 0.707107L16.9706 0L8.83883 8.13173L0.707107 0L0 0.707107L8.13173 8.83883L0 16.9706L0.707106 17.6777L8.83883 9.54594L16.9706 17.6777L17.6777 16.9706L9.54594 8.83883L17.6777 0.707107Z"
                        fill="#494C6B"
                      />
                    </svg>
                  </div>
                )}
              </div>
            ))
          ) : (
            <div className="no-tasks-message">No tasks added</div>
          )}
        </div>
      </div>

      <div className="fixed-footer">
        <div className="footer-item footer-text">{numberLeft} items left</div>
        <div
          className="footer-item larger-space"
          style={{
            display: "inline-flex",
            justifyContent: "center",
            alignItems: "flex-start",
            gap: "9px",
          }}
        >
          <div
            className={`footer-text ${filter === "All" ? "active-filter" : ""}`}
            onClick={() => setFilter("All")}
          >
            All
          </div>
          <div
            className={`footer-text ${
              filter === "Active" ? "active-filter" : ""
            }`}
            onClick={() => setFilter("Active")}
          >
            Active
          </div>
          <div
            className={`footer-text ${
              filter === "Completed" ? "active-filter" : ""
            }`}
            onClick={() => setFilter("Completed")}
          >
            Completed
          </div>
        </div>
        <div className="footer-item footer-text" onClick={clearCompleted}>
          Clear Completed
        </div>
      </div>
    </div>
  );
}

export default TaskList;
