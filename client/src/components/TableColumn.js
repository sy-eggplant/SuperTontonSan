import React, { PropTypes } from "react"

const TableColumn = ({dates}) => (
  <tr>
		<th>Name</th>
		{ dates.map((date) => {
    return <th>{date}</th>
  })}
	</tr>
);

TableColumn.PropTypes = {
  dates: PropTypes.array.isRequired,
};

export default TableColumn
