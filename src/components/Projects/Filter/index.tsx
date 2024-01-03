import { useAppSelector } from "../../../hooks/redux";
import SelectOne from "./SelectOne";
import { useActions } from "../../../hooks/actions";
import { ProjectTypesType, SortType } from "../../../models";
import SelectAny from "./SelectAny";
import { technologies } from "../../../static/technologies";

const Filter = () => {
  const { filter } = useAppSelector((state) => state.projects);
  const { sortProjects, filterByType, toggleTechnologies, resetFilter } =
    useActions();

  return (
    <div className="projects__filter">
      <SelectOne
      name="sort"
        title="Сортировка:"
        options={["По умолчанию", "Сначала новые", "Сначала старые"]}
        currentVal={filter.sort}
        selectEvent={(option: SortType) => {
          sortProjects(option);
        }}
      />
      <SelectOne
      name="type"
        title="Фильтр:"
        options={["Всё", "Вёрстка", "Веб-приложение", "Pet-проект"]}
        currentVal={filter.type}
        selectEvent={(option: ProjectTypesType) => {
          filterByType(option);
        }}
      />
      <SelectAny
        name="technologies"
        title="Технологии"
        options={technologies}
        selectedOptions={filter.technologies}
        selectEvent={(option) => {
          toggleTechnologies(option);
        }}
      />
      <button className="filter__reset-filter" onClick={() => resetFilter()}>
        Сбросить
      </button>
    </div>
  );
};

export default Filter;
