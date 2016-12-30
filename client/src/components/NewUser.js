import React, { PropTypes } from "react"

const NewUser = (onClick) => (
  <tr>
		<td><input type="text" /></td>	
		<td><input type="checkbox" /></td>
		<td><input type="checkbox" /></td>
		<td><input type="checkbox" /></td>
		<td><input type="checkbox" /></td>
		<td><input type="button" onClick={onClick} value="new" /></td>
	</tr>
);

NewUser.PropTypes = {
  name: PropTypes.func.isRequired,
};

export default NewUser
