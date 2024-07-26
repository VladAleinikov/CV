import { cn } from "@/utils/cn";
import { BackgroundGradientAnimation } from "./background-gradient-animation";


export const BentoGrid = ({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "grid md:auto-rows-[18rem] grid-cols-1 md:grid-cols-5 gap-4 max-w-7xl mx-auto ",
        className
      )}
    >
      {children}
    </div>
  );
};

export const BentoGridItem = ({
  id,
  className,
  title,
  titleClassName,
  description,
  img,
  imgClassName,
  spareImg,
  content,
}: {
  id?: number;
  className?: string;
  title?: string | React.ReactNode;
  titleClassName?: string;
  description?: string | React.ReactNode;
  img?: string;
  imgClassName?: string;
  spareImg?: string;
  content?: JSX.Element
}) => {

  return (
    <div
      className={cn(
        "row-span-1 relative overflow-hidden rounded-3xl group/bento hover:shadow-xl transition duration-200 shadow-input dark:shadow-none justify-between flex flex-col space-y-4 border border-white/[0.1]",
        className
      )}
      style={{
        background: "rgb(4,7,29)",
        backgroundColor:
          "linear-gradient(90deg, rgba(4,7,29,1) 0%, rgba(12,14,35,1) 100%)",
      }}
    >
      <div className={`${id === 6 && "flex justify-center"} h-full`}>
        <div className="w-full h-full absolute">
          {img && (
            <img
              src={img}
              alt={img}
              className={cn(imgClassName, "object-cover object-center")}
            />
          )}
        </div>
        <div
          className={`absolute right-0 -bottom-5 ${
            id === 5 && "w-full opacity-80"
          }`}
        >
          {spareImg && (
            <img
              src={spareImg}
              alt={spareImg}
              className={"w-full h-full object-cover object-center"}
            />
          )}
        </div>
        {id === 5 && (
          <BackgroundGradientAnimation>
            <div className="absolute z-50 flex items-center justify-center text-white font-bold" />
          </BackgroundGradientAnimation>
        )}
        <div
          className={cn(
            titleClassName,
            "group-hover/bento:translate-x-2 transition duration-200 relative md:h-full min-h-40 flex flex-col px-5 p-5 lg:p-10"
          )}
        >
          <div className="font-sans font-extralight text-[#c1c2d3] text-sm md:text-xs lg:text-base z-10">
            {description}
          </div>
          <div className="font-sans font-bold text-lg lg:text-3xl max-w-96 z-10">
            {title}
          </div>
          {content}


          {id === 6 && (
            <div className="flex flex-col mt-2">
              <div className="relative flex flex-col gap-y-1 pl-6 pb-6">
                <div className="absolute left-0 top-1 h-full flex flex-col items-center">
                  <div className="p-1.5 rounded-full bg-purple" />
                  <div className="w-1 h-full bg-purple" />
                </div>
                <p className="text-sm font-light">Feb 2023 - now</p>
                <h3 className="text-lg font-bold">Mogilev News</h3>
                <h3 className="text-lg font-bold">Software Engeneer</h3>
                <div>
                  <p>
                    Work in team with 4 people. Development of commercial and
                    internal full-stack applications, such as:
                  </p>
                  <ul>
                    <li>
                      - Web application of the information department
                      MV-Develop;
                    </li>
                    <li>
                      - Theme on CMS Wordpress for the websites of editorial
                      offices of the Mogilev region;
                    </li>
                    <li>
                      - Design and development for the MogilevNews website
                    </li>
                    <li>
                      - And also some internal projects and education of new
                      technologies
                    </li>
                  </ul>
                  <br />
                  <p>
                    Tech stack is: React, TypeScript, Scss, Nest, PHP,
                    Wordpress, MySQL, PostgreSQL, Git.
                  </p>
                </div>
              </div>
            </div>
          )}

        </div>
      </div>
    </div>
  );
};
