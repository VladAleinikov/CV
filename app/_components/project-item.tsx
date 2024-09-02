import { CardBody, CardContainer, CardItem } from "@/components/ui/3d-card";
import { ProjectType } from "@/types";
import Image from "next/image";
import { FaLocationArrow } from "react-icons/fa6";

export const ProjectItem = ({
  title,
  description,
  img,
  iconLists,
  date,
  link,
  figmaLink,
  githubLink,
}: ProjectType) => {
  const links = [];

  if (link) links.push({ title: "Preview", href: link });
  if (githubLink) links.push({ title: "Github", href: githubLink });
  if (figmaLink) links.push({ title: "Figma", href: figmaLink });

  return (
    <CardContainer className="inter-var">
      <CardBody className="relative group/card  dark:hover:shadow-2xl dark:hover:shadow-purple/[0.1]  dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border  ">
        <CardItem translateZ="50" className="w-full flex justify-between">
          <div className="flex flex-col gap-y-1">
            <h2 className="text-xl font-bold text-neutral-600 dark:text-white">
              {title}
            </h2>
            <p className="text-neutral-700 text-xs max-w-sm mt-2 dark:text-neutral-500">
              {date}
            </p>
          </div>
          <div className="min-w-[25%] flex justify-end gap-x-2">
            {githubLink && (
              <a
                href={githubLink}
                target="blank"
                className="border border-purple rounded-full  lg:w-10 lg:h-10 w-8 h-8 flex items-center justify-center"
              >
                <img src={"/icons/git.svg"} alt="git" className="p-2" />
              </a>
            )}
            {figmaLink && (
              <a
                href={figmaLink}
                target="blank"
                className="border border-purple rounded-full  lg:w-10 lg:h-10 w-8 h-8 flex items-center justify-center"
              >
                <img src={"/icons/figma.svg"} alt="git" className="p-2" />
              </a>
            )}
          </div>
        </CardItem>

        <CardItem
          as="p"
          translateZ="60"
          className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
        >
          {description}
        </CardItem>
        <CardItem translateZ="100" className="w-full mt-4  w-[27rem] h-[15.2rem]">
          <Image
            fill
            src={"/previews/" + img}
            alt={title}
            className="object-cover rounded-xl"
          />
        </CardItem>
        <div className="flex justify-between items-center mt-20">
          <CardItem translateZ={50} className="flex items-center">
            {iconLists.map((icon, index) => (
              <div
                key={icon}
                className="border border-white/[0.2] rounded-full bg-black lg:w-10 lg:h-10 w-8 h-8 flex items-center justify-center"
                style={{ transform: `translateX(-${5 * index * 2}px)` }}
              >
                <img
                  src={"/icons/" + icon + ".svg"}
                  alt={icon}
                  className="p-2"
                />
              </div>
            ))}
          </CardItem>
          {link && (
            <CardItem
              translateZ={20}
              as="a"
              target="blank"
              href={link}
              className="flex justify-center items-center border-b border-purple"
            >
              <p className="flex lg:text-xl md:text-xs text-sm text-purple">
                Check Live Site
              </p>
              <FaLocationArrow className="ms-3" color="#CBACF9" />
            </CardItem>
          )}
        </div>
      </CardBody>
    </CardContainer>
  );
};
