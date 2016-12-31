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
  input: {
    name: "",
    schedule: [],
  },
};

const schedule = (state = initialState, action) => {
  if (action.type === actionTypes.NEW_USER) {
    console.log(state)
    console.log(action.name)
    console.log(action.schedule)
    state.table.schedules[action.name] = action.schedule
    return {
      ...state,
      table: {
        names: state.table.names.push(action.name),
      }
    };
  } else {
    return state;
  }
}

export default schedule
