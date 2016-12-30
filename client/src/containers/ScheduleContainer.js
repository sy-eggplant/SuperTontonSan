import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as actions from "../actions";

import ScheduleRow from "../components/ScheduleRow"
import NewUser from "../components/NewUser"

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
					<tr>
						<th>NAME</th>
						<th>1/1</th>
						<th>1/2</th>
						<th>1/3</th>
						<th>1/4</th>
					</tr>
					<ScheduleRow name={ "glacier" } schedules={[true, false, false, true]}/>	
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
