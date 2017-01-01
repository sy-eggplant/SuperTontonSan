import * as actionTypes from "../utils/actionTypes";

const initialState = {
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
  switch (action.type) {
    case actionTypes.NEW_USER:
      state.users.push({
        name: action.name,
        schedule: action.schedule,
      })
      return {
        ...state,
      };
    case actionTypes.DELETE_USER:
      const newUsers = state.users.filter((user) => {
        return (user.id !== action.id)
      })
      return {
        ...state,
        users: newUsers,
      };
    default:
      return state;
  }
}

export default schedule
