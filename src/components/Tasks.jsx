import { ChevronRightIcon, TrashIcon, CheckIcon } from "lucide-react";
import { useNavigate } from "react-router-dom";
import Button from "./Button";

function Tasks({ tasks, onTaskClick, onDeleteTaksClick }) {
  const navigate = useNavigate();

  function navigateToTaskPage(task) {
    const query = new URLSearchParams();
    query.set("title", task.title);
    query.set("description", task.description);
    navigate(`/task?${query.toString()}`);
  }

  return (
    <ul className="space-y-4 p-6 bg-slate-200 rounded-md shadow">
      {tasks.map((task) => (
        <li key={task.id} className="flex gap-2">
          <button
            onClick={() => onTaskClick(task.id)}
            className={`bg-slate-400 text-left w-full flex items-center gap-2 text-white p-2 rounded-md ${
              task.IsCompleted && "line-through"
            }`}
          >
            {task.IsCompleted && <CheckIcon />}
            {task.title}
          </button>
          <Button onClick={() => navigateToTaskPage(task)}>
            <ChevronRightIcon />
          </Button>
          <Button onClick={() => onDeleteTaksClick(task.id)}>
            <TrashIcon />
          </Button>
        </li>
      ))}
    </ul>
  );
}

export default Tasks;
