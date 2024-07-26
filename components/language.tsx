import { languages } from "@/data";

export const Language = () => {
  return (
    <div className="w-full flex flex-col items-center gap-y-5 mt-5">
      {languages.map(({ language, level }) => (
        <div className="w-[80%] flex justify-center items-center">
          <div className="w-full py-2 lg:py-4 lg:px-3 px-3 text-xs lg:text-base opacity-50 lg:opacity-100 rounded-lg text-center bg-[#10132E]">
            {language}
          </div>
          <div className="w-full h-1 opacity-50 lg:opacity-100 bg-[#10132E]" />
          <div className="w-full py-2 lg:py-4 lg:px-3 px-3 text-xs lg:text-base opacity-50 lg:opacity-100 rounded-lg text-center bg-[#10132E]">
            {level}
          </div>
        </div>
      ))}
    </div>
  );
}
