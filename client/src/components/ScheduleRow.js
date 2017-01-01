import React, { PropTypes } from "react"

const ScheduleRow = ({user, dates}) => {
  var schedule = [];
  user.schedule.forEach((e) => {
    schedule.push(<td>{e ? "o" : "x"}</td>);
  })

  return (
    <tr>
			<td>{ user.name }</td>
			{ schedule }
		</tr>
    );
};

ScheduleRow.PropTypes = {
  user: PropTypes.object.isRequired,
  dates: PropTypes.array.isRequired,
};

export default ScheduleRow
