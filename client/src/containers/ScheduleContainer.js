import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as actions from "../actions";

import ScheduleRow from "../components/ScheduleRow"
import NewUser from "../components/NewUser"
import TableColumn from "../components/TableColumn"

const style = {
  table: {
    border: "solid",
  },
}

class ScheduleContainer extends Component {
  render() {
    const {schedule, actions} = this.props;

    //本当は予定入れた時にidを決定する
    const maxID = Math.max.apply(null, schedule.users.map((user) => {
      return user.id
    }))

    var scheduleRows = [];
    schedule.users.forEach((user) => {
      scheduleRows.push(<ScheduleRow user-id={maxID + 1} user={user} dates={schedule.dates} actions={actions}/>);
    })

    return (
      <div>
				<table style={style.table}>
					<TableColumn dates={schedule.dates} />
					{ scheduleRows }	
					<NewUser userID={schedule.users.length - 1} dates={schedule.dates} actions={actions}/>
				</table>
			</div>
      );
  }
}

const mapState = (state, ownProps) => ({
  schedule: state.schedule,
});

function mapDispatch(dispatch) {
  return {
    actions: bindActionCreators(actions, dispatch),
  }
}

export default connect(mapState, mapDispatch)(ScheduleContainer);
