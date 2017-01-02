import React, { PropTypes } from "react"

const TableColumn = ({dates}) => {
  const datesColumn = dates.map((date) => {
    return <th>{date}</th>;
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
