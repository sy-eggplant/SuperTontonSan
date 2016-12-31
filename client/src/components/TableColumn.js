import React, { PropTypes } from "react"

const TableColumn = ({dates}) => {
  var datesColumn = [];
  dates.forEach((date) => {
    datesColumn.push(<th>{date}</th>);
  })

  return (
    <tr>
			<th>Name</th>
			{ datesColumn }
		</tr>
    );
};

TableColumn.PropTypes = {
  dates: PropTypes.array.isRequired,
};

export default TableColumn
