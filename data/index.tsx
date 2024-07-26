import { ProjectType } from "@/types";
import { TechStack } from '../components/tech-stack';
import { AboutMe } from "@/components/about-me";
import { Language } from "@/components/language";
import { Education } from "@/components/education";
import { Contacts } from "@/components/contacts";

type NavItemType = {
  name: string;
  link: string;
};

export const navItems: NavItemType[] = [
  { name: "About", link: "#about" },
  { name: "Projects", link: "#projects" },
  { name: "Testimonials", link: "#testimonials" },
  { name: "Contact", link: "#contact" },
];

export const gridItems = [
  {
    id: 1,
    title: "About me ",
    description: "",
    className: "lg:col-span-3 md:col-span-6 md:row-span-2 lg:min-h-[60vh]",
    imgClassName: "absolute right-0 -bottom-10 md:w-96 w-60",
    titleClassName: "justify-start",
    img: "b5.svg",
    spareImg: "",
    content: <AboutMe/>
  },
  {
    id: 2,
    title: "Languages",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-start items-end",
    img: "",
    spareImg: "",
    content: <Language/>
  },
  {
    id: 3,
    title: "My tech stack",
    description: "I constantly try to improve",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-center",
    img: "",
    spareImg: "",
    content: <TechStack/>
  },
  {
    id: 4,
    title: "Education",
    description: "",
    className: "lg:col-span-3 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "/grid.svg",
    spareImg: "/b4.svg",
    content: <Education/>
  },
  {
    id: 5,
    title: "My contacts",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-center md:max-w-full max-w-60 text-center",
    img: "",
    spareImg: "",
    content: <Contacts/>
  },
];

type LanguageType= {
  language: string,
  level: string
}

export const languages: LanguageType[] = [
  {
    language: "Russian",
    level: "Native",
  },
  {
    language: "English",
    level: "B1",
  },
];

export const education = [
  {
    education: "Bachelor of Software Engineer",
    place: "Belurussian-Russian University",
    period: "2019-2023"
  }
]

export const projects: ProjectType[] = [
  {
    id: 24,
    title: "Revo",
    description:
      "Landing page layout based on Figma layout with adaptability for mobile devices",
    iconLists: ["html", "scss", "js"],
    img: "p1.svg",
    date: "2023/10/12 ",
    figmaLink:
      "https://www.figma.com/file/DC0dmWja7xLsExVR0HpxfJ/Revo-(Copy)?type=design&t=EKGEDy47C35dtA2n-6",
    githubLink: "https://github.com/VladAleinikov/Revo",
    link: "https://vladaleinikov.github.io/Revo/",
  },
  {
    id: 23,
    title: "Pine-Hills-Architect",
    description:
      "Order on the freelance exchange. Landing page layout based on Figma layout",
    iconLists: ["html", "scss", "js"],
    img: "opera_78bXa8w23a.png",
    date: "2023/11/08",
    figmaLink:
      "https://www.figma.com/file/1QRlDsy0F8h9LKYAoPqEYn/Untitled-(Copy)?type=design&t=EKGEDy47C35dtA2n-6",
    githubLink: "https://github.com/VladAleinikov/Pine-Hills-Architect",
    link: "https://vladaleinikov.github.io/Pine-Hills-Architect/",
  },
  {
    id: 22,
    title: "Aveji",
    description:
      "Landing page layout based on Figma layout with adaptability for mobile devices",
    iconLists: ["html", "scss", "js"],
    img: "f_660651c55e4e5672.jpg",
    date: "2023/10/03",
    figmaLink:
      "https://www.figma.com/file/2w4TN1cuI7w1QUxLhUIrgY/Aveji-(Copy)?type=design&node-id=0-1&mode=design&t=8yd0r2IX5z1Ew65D-0",
    githubLink: "https://github.com/VladAleinikov/Aveji",
    link: "https://vladaleinikov.github.io/Aveji/",
  },
  {
    id: 21,
    title: "DIA-cleaning",
    description:
      "Order on the freelance exchange. Layout of a multi-page website using Figma layout",
    iconLists: ["html", "scss", "js"],
    img: "opera_pAcZTMpCgG.png",
    date: "2023/11/28",
    figmaLink:
      "https://www.figma.com/file/ePs2uIoWq278CyrT3q6c57/YouTube-Createx-Marathon?type=design&node-id=0-1&mode=design&t=GRQ9VmvMh0oR6x75-0",
    githubLink: "https://github.com/VladAleinikov/DIA-cleaning",
    link: "https://vladaleinikov.github.io/DIA-cleaning/pages/",
  },
  {
    id: 20,
    title: "CreateX",
    description: "Layout of a multi-page website using Figma layout",
    iconLists: ["html", "scss", "js"],
    img: "f_3276515ebcbabeec.jpg",
    date: "2023/09/29",
    figmaLink:
      "https://www.figma.com/file/ePs2uIoWq278CyrT3q6c57/YouTube-Createx-Marathon?type=design&node-id=0-1&mode=design&t=GRQ9VmvMh0oR6x75-0",
    githubLink: "https://github.com/VladAleinikov/createx-construction",
    link: "https://vladaleinikov.github.io/createx-construction/pages/",
  },
  {
    id: 19,
    title: "GitHubAPI",
    description: "Project using github API",
    iconLists: ["typescript", "react", "redux"],
    img: "opera_ANM5BDhflP.png",
    date: "2023/11/13",
    githubLink: "https://github.com/VladAleinikov/GitHubAPI",
    link: "https://vladaleinikov.github.io/GitHubAPI/",
  },
  {
    id: 18,
    title: "Pets shelter",
    description:
      "Landing page layout based on Figma layout with adaptability for mobile devices",
    iconLists: ["html", "css", "js"],
    img: "f_90164fc55e6e2926.jpg",
    date: "2022/04/09",
    figmaLink:
      "https://www.figma.com/file/6z3i7tRr2L9WF3MuSj2iDf/shelter-dom-(Copy)?type=design&t=ZAzlXTWMKcCcEq20-6",
    githubLink: "https://github.com/VladAleinikov/pets-shelter",
    link: "https://vladaleinikov.github.io/pets-shelter/pages/main/",
  },
  {
    id: 17,
    title: "RumTibet",
    description: "Landing page layout based on Figma layout",
    iconLists: ["html", "scss", "js"],
    img: "f_19465269ebb0efb7.jpg",
    date: "2023/10/02",
    figmaLink:
      "https://www.figma.com/file/b93J9uGUhgfaGWm6QmLCG4/%D0%A0%D1%83%D0%BC%D0%A2%D0%B8%D0%B1%D0%B5%D1%82-(Copy)?type=design&node-id=0%3A1&mode=design&t=i4ty5mtVS7GkCr0z-1",
    githubLink: "https://github.com/VladAleinikov/RumTibet",
    link: "https://vladaleinikov.github.io/RumTibet/",
  },
  {
    id: 16,
    title: "Ujjo",
    description: "Layout of a one-page landing page using Figma layout",
    iconLists: ["html", "scss", "js"],
    img: "f_07364ff3b22222a2.jpg",
    date: "2023/09/11",
    figmaLink:
      "https://www.figma.com/file/FmqRYj13B2YLh9Lpe5IixA/Ujjo-(Copy)?type=design&node-id=0-1&mode=design&t=30mpzRjePuo0zjsI-0",
    githubLink: "https://github.com/VladAleinikov/Ujjo",
    link: "https://vladaleinikov.github.io/Ujjo/",
  },
  {
    id: 15,
    title: "OFFICE-COMFORT-A",
    description:
      "Order on the freelance exchange. Layout of a multi-page landing page using Figma layout",
    iconLists: ["html", "scss", "js"],
    img: "f_130653e9ea8e64d3.jpg",
    date: "2023/10/29",
    figmaLink:
      "https://www.figma.com/file/bBJZOy4zoo6TrjKoHvwRzU/%D0%9E%D1%84%D0%B8%D1%81-%D0%BA%D0%BE%D0%BC%D1%84%D0%BE%D1%80%D1%82---%D0%90-(Copy)?type=design&node-id=0%3A1&mode=design&t=c86Sy1c87ondRrbq-1",
    githubLink: "https://github.com/VladAleinikov/Ofiskomfort-a",
    link: "https://vladaleinikov.github.io/Ofiskomfort-a/",
  },
  {
    id: 14,
    title: "BalkariA-frame",
    description: "Order on the freelance exchange. Landing page layout",
    iconLists: ["html", "scss", "js"],
    img: "opera_3nSHpBKotJ.png",
    date: "2023/10/19",
    githubLink: "https://github.com/VladAleinikov/BalkariA-frame",
    link: "https://vladaleinikov.github.io/BalkariA-frame/",
  },
  {
    id: 13,
    title: "MediaPro",
    description:
      "Order on the freelance exchange. Landing page layout based on photoshop layout",
    iconLists: ["html", "scss", "js", "php"],
    img: "opera_BhYIT5LA2m.png",
    date: "2023/10/29",
    githubLink: "https://github.com/VladAleinikov/MediaPro",
    link: "https://vladaleinikov.github.io/MediaPro/",
  },
  {
    id: 12,
    title: "MediaPro Case",
    description:
      "Order on the freelance exchange. Layout of the landing page of the second page using a photoshop layout",
    iconLists: ["html", "scss", "js", "php"],
    img: "opera_BhYIT5LA2m.png",
    date: "2023/10/30",
    githubLink: "https://github.com/VladAleinikov/MediaPro-Case",
    link: "https://vladaleinikov.github.io/MediaPro-Case/",
  },
  {
    id: 11,
    title: "MediaPro Mission",
    description:
      "Order on the freelance exchange. Layout of the landing page of the third page using a photoshop layout",
    iconLists: ["html", "scss", "js", "php"],
    img: "opera_BhYIT5LA2m.png",
    date: "2023/11/02",
    githubLink: "https://github.com/VladAleinikov/MediaPro-Mission",
    link: "https://vladaleinikov.github.io/MediaPro-Mission/",
  },
  {
    id: 9,
    title: "Aim-Game",
    description:
      "Task for the fifth day of the JavaScript marathon from Result School",
    iconLists: ["html", "css", "js"],
    img: "f_003651870cc53898.jpg",
    date: "2023/09/30",
    figmaLink: "",
    githubLink: "https://github.com/VladAleinikov/aim-game",
    link: "https://vladaleinikov.github.io/aim-game/",
  },
  {
    id: 8,
    title: "Pictures slider",
    description:
      "Assignment for the first day of the JavaScript marathon from Result School",
    iconLists: ["html", "css", "js"],
    img: "f_30265168b4cd37b3.jpg",
    date: "2023/09/29",
    githubLink: "https://github.com/VladAleinikov/pictures-slider",
    link: "https://vladaleinikov.github.io/pictures-slider/",
  },
  {
    id: 7,
    title: "Hacker News API",
    description:
      "React application for displaying news using Hacker News API for practice in Modsen",
    iconLists: ["react", "redux", "scss"],
    img: "f_62964fdea82c5176.jpg",
    date: "2022/08/10",
    githubLink: "https://github.com/VladAleinikov/HackerNewsReact",
    link: "https://vladaleinikov.github.io/HackerNewsReact/",
  },
  {
    id: 6,
    title: "Google Books API",
    description:
      "React application for searching books using Google Books API for practice in Modsen",
    iconLists: ["react", "scss"],
    img: "f_25064fde3479bc17.jpg",
    date: "2022/08/19",
    githubLink: "https://github.com/VladAleinikov/BookSearchReact",
    link: "https://vladaleinikov.github.io/BookSearchReact/",
  },
  {
    id: 5,
    title: "Tags",
    description: "Project for practice at EPAM in 2021",
    iconLists: ["scss", "js"],
    img: "f_75464fc4ba15d502.jpg",
    date: "2021/07/11",
    githubLink: "https://github.com/VladAleinikov/tag",
    link: "https://vladaleinikov.github.io/tag/",
  },
  {
    id: 4,
    title: "Virtual keyboard",
    description: "Project for RS School",
    iconLists: ["html", "scss", "js"],
    img: "f_39464fcca540a507.jpg",
    date: "2022/05/04",
    githubLink: "https://github.com/VladAleinikov/VirtualKeyboard",
    link: "https://vladaleinikov.github.io/VirtualKeyboard/virtualKeyboard/pages/",
  },
  {
    id: 3,
    title: "Drag and Drop",
    description:
      "Assignment for the second day of the JavaScript marathon from Result School",
    iconLists: ["html", "scss", "js"],
    img: "f_1626516f381866a1.jpg",
    date: "2023/09/29 ",
    githubLink: "https://github.com/VladAleinikov/daragAndDrop",
    link: "https://vladaleinikov.github.io/daragAndDrop/",
  },
  {
    id: 2,
    title: "Vertical slider",
    description:
      "Assignment for the third day of the JavaScript marathon from Result School",
    iconLists: ["html", "scss", "js"],
    img: "f_68465186f028bf8d.jpg",
    date: "2023/09/30 ",
    githubLink: "https://github.com/VladAleinikov/vertical-slider",
    link: "https://vladaleinikov.github.io/vertical-slider/",
  },
  {
    id: 1,
    title: "Mini game",
    description:
      "Assignment for the fourth day of the JavaScript marathon from Result School",
    iconLists: ["html", "scss", "js"],
    img: "f_36765186ff650fa4.jpg",
    date: "2023/09/30 ",
    githubLink: "https://github.com/VladAleinikov/mini-game",
    link: "https://vladaleinikov.github.io/mini-game/",
  },
];
