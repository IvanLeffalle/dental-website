import { AiOutlineExport } from "react-icons/ai";

type CardProps = {
  bgColor: string;
  Title: string;
  Desc: string;
};

export default function Cards({ bgColor, Title, Desc }: CardProps) {
  return (
    <div
      className={`flex flex-col justify-between w-full h-[500px] sm:w-[200px] p-4 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 ${bgColor}`}
    >
      <div className="font-bold text-lg mb-2">{Title}</div>
      <div className="text-sm text-gray-700 mb-4">{Desc}</div>
      <button
        className="mt-auto w-10 h-10 flex items-center justify-center bg-gray-700 text-white rounded-xl hover:bg-gray-800 transition-colors duration-300"
        aria-label="Export"
      >
        <AiOutlineExport className="w-5 h-5" />
      </button>
    </div>
  );
}
