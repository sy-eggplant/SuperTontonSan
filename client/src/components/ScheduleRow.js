import React, { PropTypes } from "react"

const ScheduleRow = ({name, schedules}) => {
  var schedule = [];
  schedules.forEach((e) => {
    schedule.push(<td>{e ? "o" : "x"}</td>);
  })

  return (
    <tr>
			<td>{ name }</td>
			{ schedule }
		</tr>
    );
};

ScheduleRow.PropTypes = {
  name: PropTypes.string.isRequired,
  schedules: PropTypes.array.isRequired,
};

export default ScheduleRow
