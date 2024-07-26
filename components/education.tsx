import { education } from "@/data";
import { FaCircle } from "react-icons/fa";

export const Education = () => {
  return (
    <div className="mt-5">
      {education.map(({ education, place, period }) => (
        <div className="flex flex-col gap-y-1" key={education}>
          <div className="flex items-center">
            <FaCircle className="w-2 h-2 mr-2 fill-purple" />
            <p className="text-lg font-bold">{education}</p>
          </div>
          <p className="">{place}</p>
          <p className="text-xs font-light">{period}</p>
        </div>
      ))}
    </div>
  );
};
