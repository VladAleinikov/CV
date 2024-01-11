import React, { LegacyRef, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { useWords } from "../../../hooks/words";
declare module "react" {
  interface HTMLProps<T> {
    ref?: string;
  }
}

const Navigation = () => {
  const words = useWords(
    ["Обо мне", "Образование", "Навыки", "Проекты"],
    ["About me", "Education", "Skills", "Projects"]
  );
  const links = [
    useRef<HTMLElement>(null),
    useRef<HTMLElement>(null),
    useRef<HTMLElement>(null),
    useRef<HTMLElement>(null),
  ];
  const line = useRef<HTMLElement>(null);
  const navLeaveHandler = () => {
    links.map((link, i) => {
      if (link.current && line.current) {
        link.current.style.transform = "translateX(0px)";
        if (link.current.classList.contains("active")) {
          link.current.style.transform = "translateX(10px)";
          line.current.style.top = i * 38 + 14 + "px";
        }
      }
    });
  };
  const linkHoverHandler = (e: React.MouseEvent<HTMLLIElement>) => {
    links.map((link) => {
      if (link.current) {
        return (link.current.style.transform = "translateX(0px)");
      }
    });
    e.currentTarget.style.transform = "translateX(10px)";
    if (line.current && typeof e.currentTarget.dataset.indexnum === "number") {
      line.current.style.top =
        e.currentTarget.dataset.indexnum * 38 + 14 + "px";
    }
  };
  useEffect(() => {
    links.map((link, i) => {
      if (
        link.current &&
        line.current &&
        link.current.classList.contains("active")
      ) {
        line.current.style.top = i * 38 + 14 + "px";
      }
    });
  }, [links, line]);

  return (
    <nav className="aside__navigation" onMouseLeave={navLeaveHandler}>
      <span className="navigation__line" ref={line}></span>
      <ul className="navigation__links">
        <li
          data-indexnum="0"
          ref={links[0] as LegacyRef<HTMLLIElement>}
          className="links__link"
          onMouseEnter={linkHoverHandler}
        >
          <Link to="/cv/about">{words.next().value}</Link>
        </li>
        <li
          data-indexnum="1"
          ref={links[1] as LegacyRef<HTMLLIElement>}
          className="links__link"
          onMouseEnter={linkHoverHandler}
        >
          <Link to="/cv/education">{words.next().value}</Link>
        </li>
        <li
          data-indexnum="2"
          ref={links[2] as LegacyRef<HTMLLIElement>}
          className="links__link"
          onMouseEnter={linkHoverHandler}
        >
          <Link to="/cv/skills">{words.next().value}</Link>
        </li>
        <li
          data-indexnum="3"
          ref={links[3] as LegacyRef<HTMLLIElement>}
          className="links__link active"
          onMouseEnter={linkHoverHandler}
        >
          <Link to="/cv/projects">{words.next().value}</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
