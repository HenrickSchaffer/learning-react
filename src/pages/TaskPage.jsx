import { useNavigate, useSearchParams } from "react-router-dom";
import { ChevronLeftIcon } from "lucide-react";
import Title from "../components/Title";

function TaskPage() {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const title = searchParams.get("title");
  const description = searchParams.get("description");

  return (
    <div className="w-screen h-screen flex justify-center items-center flex-col gap-5 p-6">
      <button
        onClick={() => navigate(-1)}
        className="absolute right-457 top-0 bottom-233 text-slate-100"
      >
        <ChevronLeftIcon />
      </button>
      <div className="w-[500px] space-y-4">
        <div className="flex justify-center relative mb-6">
          <Title>Gerenciador de Tarefas</Title>
        </div>
      </div>
      <div className="space-y-4 p-6 bg-slate-200 rounded-md shadow flex flex-col">
        <h2 className="text-gray-500 text-xl font-bold text-center">{title}</h2>
        <p className="text-gray-500">{description}</p>
      </div>
    </div>
  );
}

export default TaskPage;
