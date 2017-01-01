import React, { PropTypes } from "react"

const NewUser = ({userID, dates, actions}) => {
  var checkboxes = [];
  let checkboxesValues = [];
  dates.forEach((date, i) => {
    checkboxes.push(
      <td><input type="checkbox" id={i}
      ref={node => {
        checkboxesValues[i] = false
      }}
      onClick={(node) => {
        checkboxesValues[i] = checkboxesValues[i] && userID === node.id ? false : true
      }} /></td>
    );
  })

  let input;
  return (
    <tr>
			<td>
				<input type="text" ref={node => {
      input = node
    }} placeholder="name"/>
			</td>	
			{ checkboxes }
			<td><input type="button" onClick={() => actions.onNewUserClick(input.value, checkboxesValues) } value="new" /></td>
		</tr>
    );
};

NewUser.PropTypes = {
  dates: PropTypes.array.isRequired,
  userID: PropTypes.number.isRequired,
};

export default NewUser
