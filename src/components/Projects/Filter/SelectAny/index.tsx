import { computePosition } from "@floating-ui/dom";
import { useEffect, useRef } from "react";

declare module "react" {
  interface HTMLProps<T> {
    ref?: string;
  }
}
interface ISelectProps {
  name: string;
  title: string;
  options: string[];
  selectedOptions: "Всё" | string[];
  selectEvent(options: string): void;
}

const SelectAny = ({
  name,
  title,
  options,
  selectedOptions,
  selectEvent,
}: ISelectProps) => {
  const popover = useRef<HTMLDivElement>(null);
  const invoker = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    computePosition(
      invoker.current as HTMLElement,
      popover.current as HTMLElement
    ).then(({ x, y }) => {
      Object.assign(popover.current?.style as object, {
        left: `${x - 50}px`,
        top: `${y - 30}px`,
      });
    });
  }, []);
  return (
    <div className="filter__select-any">
      <button
        className="select-any__title"
        popovertarget={name + "__options"}
        ref={invoker}
      >
        {title}
      </button>
      <div className="select-any__selected-options">
        {typeof selectedOptions !== "string"
          ? selectedOptions.map((option, id) => (
              <div
                className="selected-options__selected-option"
                key={id}
                onClick={() => selectEvent(option)}
              >
                {option}
              </div>
            ))
          : ""}
      </div>
      <div
        className="select-any__options"
        id={name + "__options"}
        popover="auto"
        ref={popover}
      >
        {options.map((option, id) => (
          <button
            key={id}
            className={
              "options__option " +
              (selectedOptions.includes(option) ? "active" : "")
            }
            onClick={() => selectEvent(option)}
          >
            {option}
          </button>
        ))}
      </div>
    </div>
  );
};

export default SelectAny;
