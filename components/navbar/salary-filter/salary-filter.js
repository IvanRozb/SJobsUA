import { useContext, useEffect, useState } from "react";
import { useRouter } from "next/router";
import Dropdown from "@/components/navbar/ui/dropdown/dropdown";
import line from "@/components/navbar/ui/dropdown/dropdown-content/content.module.css";
import classes from "./salary-filter.module.css";
import sliderClasses from "./salary-slider.module.css";
import SalaryAmountRange from "@/components/navbar/salary-filter/salary-amount-range";
import Slider from "rc-slider";
import "rc-slider/assets/index.css";
import { NavbarContext } from "@/components/navbar/navbar";

export default function SalaryFilter({ filter }) {
  const [isExpanded, setExpanded] = useState(false);
  const { salary } = useRouter().query;

  const minValue = 0,
    maxValue = 100000;
  const [value, setValue] = useState([minValue, maxValue]);
  const { setSalary } = useContext(NavbarContext);

  useEffect(() => {
    setSalary(value);
  }, [value, setSalary]);

  const handleChange = (newValue) => {
    setValue(newValue);
  };

  return (
    <Dropdown
      filter={filter}
      setExpanded={setExpanded}
      isExpanded={isExpanded}
      currentItem={salary}
      defaultTitle={"Salary"}
      parameters={["salary"]}
    >
      <hr className={line.dropdown_line} />
      <h5 className={classes.title}>Salary expectations?</h5>
      <Slider
        className={sliderClasses.slider}
        value={value}
        onChange={handleChange}
        min={minValue}
        max={maxValue}
        step={1000}
        range
      />
      <SalaryAmountRange min={value[0]} max={value[1]} />
    </Dropdown>
  );
}
