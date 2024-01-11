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
  optionsVals: string[];
  currentVal: string;
  selectEvent(option: any): void;
}

const SelectOne = ({
  name,
  title,
  options,
  optionsVals,
  currentVal,
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
  }, [popover, invoker, title]);
  return (
    <div className="filter__select">
      <h4>{title}</h4>
      <button
        className="select__selected-value"
        popovertarget={name + "__options"}
        ref={invoker}
      >
        {options[optionsVals.indexOf(currentVal)]}
      </button>
      <div
        className="select__options"
        id={name + "__options"}
        popover="auto"
        ref={popover}
      >
        {optionsVals.map((option, id) => (
          <button
            key={id}
            className={
              "options__option " + (option == currentVal ? "active" : "")
            }
            onClick={() => selectEvent(option)}
          >
            {options[id]}
          </button>
        ))}
      </div>
    </div>
  );
};

export default SelectOne;
