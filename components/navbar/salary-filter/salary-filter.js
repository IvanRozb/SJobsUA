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
import { splitSalary } from "@/helper/filters";

export default function SalaryFilter({ filter }) {
  const [isExpanded, setExpanded] = useState(false);
  const { salary } = useRouter().query;
  const { setSalary } = useContext(NavbarContext);

  const [value, setValue] = useState([0, 100000]);

  useEffect(() => {
    const [minSalary, maxSalary] = splitSalary(salary) ?? [
      undefined,
      undefined,
    ];
    setValue([
      minSalary !== undefined ? minSalary : 0,
      maxSalary !== undefined ? maxSalary : 100000,
    ]);
  }, [salary]);

  const handleChange = (newValue) => {
    setValue(newValue);
  };

  useEffect(() => {
    setSalary(value);
  }, [setSalary, value]);

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
        min={0}
        max={100000}
        step={1000}
        range
      />
      <SalaryAmountRange min={value[0]} max={value[1]} />
    </Dropdown>
  );
}
