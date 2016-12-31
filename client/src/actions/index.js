import * as actionTypes from "../utils/actionTypes";

export const onNewUserClick = (name, schedule) => ({
  type: actionTypes.NEW_USER,
  name,
  schedule
})
