
interface ISelectProps {
  title: string;
  options: string[];
  selectedOptions: "Всё" | string[];
  selectEvent(options: string): void;
}

const SelectAny = ({
  title,
  options,
  selectedOptions,
  selectEvent,
}: ISelectProps) => {
  return (
    <div className="filter__select">
      <button className="select__title">{title}</button>
      <div className="select__selected-options">
        {typeof selectedOptions !== "string"
          ? selectedOptions.map((option, id) => (
              <div className="selected-options__selected-option" key={id}>
                <p>{option}</p>
                <button
                  className="selected-option__remove"
                  onClick={() => selectEvent(option)}
                >
                  x
                </button>
              </div>
            ))
          : ""}
      </div>
      <div className="select__options">
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
