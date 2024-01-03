
interface ISelectProps {
  name: string,
  title: string,
  options: string[],
  currentVal: string,
  selectEvent(option: any): void
}

const SelectOne = ({ name, title, options, currentVal, selectEvent }: ISelectProps) => {
  return (
    <div className="filter__select">
      <h4>{title}</h4>
      <button className="select__selected-value" popovertarget={name + "__options"}>
        {currentVal}
      </button>
      <div className="select__options" id={name + "__options"} popover="auto">
        {options.map((option, id) => (
          <button
            key={id}
            className={
              "options__option " + (option == currentVal ? "active" : "")
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

export default SelectOne;
