import React, { PropTypes } from "react"

const DeleteBtn = ({id, actions}) => {
  return (
    <input type="button" onClick={() => actions.onDeleteUserClick(id)} value="delete"/>
    );
};

DeleteBtn.PropTypes = {
  id: PropTypes.number.isRequired,
};

export default DeleteBtn
