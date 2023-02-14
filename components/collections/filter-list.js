import FilterWrapper from "@/components/sidebar/filter/filter-wrapper";

export default function FilterList(props) {
  const { filters } = props;

  return filters.map((filter) => (
    <FilterWrapper key={encodeURIComponent(filter)} name={filter} />
  ));
}
