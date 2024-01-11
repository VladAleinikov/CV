import { useAppSelector } from "../../../hooks/redux";
import SelectOne from "./SelectOne";
import { useActions } from "../../../hooks/actions";
import { ProjectTypesType, SortType } from "../../../models";
import SelectAny from "./SelectAny";
import { technologies } from "../../../static/technologies";
import { useWords } from "../../../hooks/words";

const Filter = () => {
  const words = useWords(
    [
      "Сортировка:",
      "По умолчанию",
      "Сначала новые",
      "Сначала старые",
      "Фильтр:",
      "Всё",
      "Вёрстка",
      "Веб-приложение",
      "Pet-проект",
      "Технологии",
      "Сбросить",
    ],
    [
      "Sort:",
      "Default",
      "New first",
      "Old first",
      "Filter:",
      "All",
      "Website layout",
      "Web-application",
      "Pet-project",
      "Technologies",
      "Reset",
    ]
  );
  const { filter } = useAppSelector((state) => state.projects);
  const { sortProjects, filterByType, toggleTechnologies, resetFilter } =
    useActions();

  return (
    <div className="projects__filter">
      <SelectOne
        name="sort"
        title={words.next().value}
        options={[words.next().value, words.next().value, words.next().value]}
        optionsVals={["По умолчанию", "Сначала новые", "Сначала старые"]}
        currentVal={filter.sort}
        selectEvent={(option: SortType) => {
          sortProjects(option);
        }}
      />
      <SelectOne
        name="type"
        title={words.next().value}
        options={[
          words.next().value,
          words.next().value,
          words.next().value,
          words.next().value,
        ]}
        optionsVals={["Всё", "Вёрстка", "Веб-приложение", "Pet-проект"]}
        currentVal={filter.type}
        selectEvent={(option: ProjectTypesType) => {
          filterByType(option);
        }}
      />
      <SelectAny
        name="technologies"
        title={words.next().value}
        options={technologies}
        selectedOptions={filter.technologies}
        selectEvent={(option) => {
          toggleTechnologies(option);
        }}
      />
      <button className="filter__reset-filter" onClick={() => resetFilter()}>
        {words.next().value}
      </button>
    </div>
  );
};

export default Filter;
