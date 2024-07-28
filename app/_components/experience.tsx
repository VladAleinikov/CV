import { experience } from "@/data";

export const Experience = () => {
  return (
    <section id="experience" className="pt-20">
      <h1 className="heading">
        My commercial <span className="text-purple">experience</span>
      </h1>
      <div className="mt-10">
        {experience.map((experience) => (
          <div
            key={experience.company}
            className="mb-8 flex flex-wrap lg:justify-center"
          >
            <div className="w-full lg:w-2/4">
              <p className="mb-2 text-sm">{experience.date}</p>
            </div>
            <div className="w-full max-w-lg lg:w-2/4">
              <h6 className="mb-2 text-lg font-semibold">
                {experience.role} -{" "}
                <span className="text-lg text-purple">
                  {experience.company}
                </span>
              </h6>
              <div className="mb-4 text-neutral-400">
                {experience.description}
              </div>
              <div className="flex flex-wrap gap-x-2">
              {experience.technologies.map((tech) => (
                <div
                  key={tech}
                  className="mt-4 rounded bg-[#161a31] px-2 py-1 text-sm font-medium "
                >
                  {tech}
                </div>
              ))}</div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
