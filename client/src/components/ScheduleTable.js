import React, { PropTypes } from "react"

import ScheduleRow from "./ScheduleRow"
import NewUser from "./NewUser"
import TableColumn from "./TableColumn"

const ScheduleTable = ({schedule, actions}) => {
  const style = {
    table: {
      border: "solid",
    },
  }

  //本当は予定入れた時にidを決定する
  const maxID = Math.max.apply(null, schedule.users.map((user) => {
    return user.id
  }))

  const scheduleRows = schedule.users.map((user) => {
    return (<ScheduleRow user-id={maxID + 1} user={user} dates={schedule.dates} actions={actions}/>);
  })

  return (
    <table style={style.table}>
			<TableColumn dates={schedule.dates} />
			{ scheduleRows }	
			<NewUser userID={schedule.users.length - 1} dates={schedule.dates} actions={actions}/>
		</table>
    );
};

ScheduleTable.PropTypes = {
  schedule: PropTypes.object.isRequired,
  actions: PropTypes.object.isRequired,
};

export default ScheduleTable
