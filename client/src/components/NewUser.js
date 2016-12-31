import React, { PropTypes } from "react"

const NewUser = ({dates, actions}) => {
  var checkboxes = [];
  let checkboxesValues = [];
  dates.forEach((date, i) => {
    checkboxes.push(
      <td><input type="checkbox" id={i} ref={node => {
        checkboxesValues[i] = node.checked
      }}
      onClick={() => {
        checkboxesValues[i] = checkboxesValues[i] ? false : true
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
};

export default NewUser
