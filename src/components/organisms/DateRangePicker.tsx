import { useState } from "react";
import { DateRange } from "react-date-range";
import "react-date-range/dist/styles.css"; // base CSS (keep this)
import "react-date-range/dist/theme/default.css"; // default theme CSS (keep this)

const DateRangePickerComponent = () => {
  const [state, setState] = useState([
    {
      startDate: new Date(),
      endDate: new Date(),
      key: "selection",
    },
  ]);

  return (
    <div>
      <DateRange
        editableDateInputs={true}
        onChange={(item) => setState([item.selection])}
        moveRangeOnFirstSelection={false}
        ranges={state}
        months={2}
        direction="horizontal"
        showDateDisplay={false}
      />
    </div>
  );
};

export default DateRangePickerComponent;
