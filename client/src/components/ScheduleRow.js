import React, { PropTypes } from "react"

const ScheduleRow = ({name, schedules}) => (
  <tr>
		<td>{ name }</td>
		{ schedules.map((e) => {
    return <td>{e ? "o" : "x"}</td>
  })}
	</tr>
);

ScheduleRow.PropTypes = {
  name: PropTypes.string.isRequired,
  schedules: PropTypes.array.isRequired,
};

export default ScheduleRow
