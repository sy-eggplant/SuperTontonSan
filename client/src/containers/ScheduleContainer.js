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
    return (
      <div>
				<table style={style.table}>
					<TableColumn dates={schedule.table.dates} />
					{schedule.table.names.map((e) => {
        return <ScheduleRow name={e} schedules={schedule.table.schedules[e]}/>
      })}
					<NewUser onClick={() => actions.onNewUserClick }/>
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
