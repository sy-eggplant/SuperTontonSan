import React, { PropTypes } from "react"
import DeleteBtn from "./DeleteBtn"

const ScheduleRow = ({user, dates, actions}) => {
  var schedule = [];
  user.schedule.forEach((e) => {
    schedule.push(<td>{e ? "o" : "x"}</td>);
  })

  return (
    <tr>
			<td id={user.id} >{ user.name }</td>
			{ schedule }
			<td><DeleteBtn id={user.id} actions={actions}/></td>
		</tr>
    );
};

ScheduleRow.PropTypes = {
  user: PropTypes.object.isRequired,
  dates: PropTypes.array.isRequired,
};

export default ScheduleRow
