import * as actionTypes from "../utils/actionTypes";

const initialState = {
  table: {
    names: ["glacier", "hoge", "fuga"],
    dates: ["1/1", "1/2", "1/3", "1/10"],
    schedules: {
      "glacier": [true, false, true, false],
      "hoge": [false, false, true, false],
      "fuga": [true, true, true, false],
    },
  },
};

const schedule = (state = initialState, action) => {
  if (action.type === actionTypes.NEW_USER) {
    return {
      ...state,
    };
  } else {
    return state;
  }
}

export default schedule
