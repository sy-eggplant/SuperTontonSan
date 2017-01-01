import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as actions from "../actions";

import ScheduleTable from "../components/ScheduleTable"

class ScheduleContainer extends Component {
  render() {
    const {schedule, actions} = this.props;

    return (
      <div>
				<ScheduleTable schedule={schedule} actions={actions} />
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
