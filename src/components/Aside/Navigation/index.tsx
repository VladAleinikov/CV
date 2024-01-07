import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";

const Navigation = () => {
  const links = [React.useRef<HTMLInputElement>(null), React.useRef<HTMLInputElement>(null), React.useRef<HTMLInputElement>(null), React.useRef<HTMLInputElement>(null)];
  const line = React.useRef<HTMLInputElement>(null);
  const navLeaveHandler = (e: React.MouseEvent<HTMLElement>) => {
    links.map((link, i) => {
      link.current.style.transform = "translateX(0px)";
      if (link.current.classList.contains("active")) {
        link.current.style.transform = "translateX(10px)";
        line.current.style.top = i * 38 + 14 + "px";
      }
    });
  };
  const linkHoverHandler = (e: React.MouseEvent<HTMLLIElement>) => {
    links.map((link) => (link.current.style.transform = "translateX(0px)"));
    e.currentTarget.style.transform = "translateX(10px)";
    line.current.style.top = e.currentTarget.dataset.indexnum * 38 + 14 + "px";
  };
  useEffect(() => {
    links.map((link, i) => {
      if (link.current.classList.contains("active")) {
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
          ref={links[0]}
          className="links__link"
          onMouseEnter={linkHoverHandler}
        >
          <Link to="/about">Обо мне</Link>
        </li>
        <li
          data-indexnum="1"
          ref={links[1]}
          className="links__link"
          onMouseEnter={linkHoverHandler}
        >
          <Link to="/education">Образование</Link>
        </li>
        <li
          data-indexnum="2"
          ref={links[2]}
          className="links__link"
          onMouseEnter={linkHoverHandler}
        >
          <Link to="/skills">Навыки</Link>
        </li>
        <li
          data-indexnum="3"
          ref={links[3]}
          className="links__link active"
          onMouseEnter={linkHoverHandler}
        >
          <Link to="/projects">Проекты</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
