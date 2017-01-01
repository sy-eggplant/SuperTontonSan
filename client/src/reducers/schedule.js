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
  dates: ["1/1", "1/2", "1/3", "1/10"],
  users: [
    {
      id: 0,
      name: "glacier",
      schedule: [true, false, false, true],
    },
    {
      id: 1,
      name: "hyoga",
      schedule: [true, true, false, true],
    },
  ],
};

const schedule = (state = initialState, action) => {
  if (action.type === actionTypes.NEW_USER) {
    state.users.push({
      name: action.name,
      schedule: action.schedule,
    })
    return {
      ...state,
    };
  } else {
    return state;
  }
}

export default schedule
