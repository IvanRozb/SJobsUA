import classes from "./salary-amount-range.module.css";

export default function SalaryAmountRange({ min, max }) {
  return (
    <div className={classes.range}>
      <div className={classes.range_item}>Min: {min} UAH</div>
      <div className={classes.dash} />
      <div className={classes.range_item}>Max: {max} UAH</div>
    </div>
  );
}
