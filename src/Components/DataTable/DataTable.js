import "./DataTable.css";
import { MdHighlightOff, MdCheckCircle } from "react-icons/md";
import React from "react";

const DataTable = (props) => {
	let columnHeader = [];
	let dataRows = [];
	Object.keys(props.data[0]).forEach((key) => {
		if (!props.hideKeys.includes(key)) {
			columnHeader.push(<th>{key}</th>);
		}
	});
	for (let i = 0; i < props.data.length; i++) {
		let rowFields = [];
		for (const key in props.data[i]) {
			if (Object.hasOwnProperty.call(props.data[i], key)) {
				if (!props.hideKeys.includes(key)) {
					if (typeof props.data[i][key] === "boolean") {
						rowFields.push(
							<td>
								{props.data[i][key] ? (
									<MdCheckCircle className="iht-icon success" />
								) : (
									<MdHighlightOff className="iht-icon fail" />
								)}
							</td>
						);
					} else {
						rowFields.push(<td>{props.data[i][key]}</td>);
					}
				}
			}
		}
		dataRows.push(<tr>{React.Children.toArray(rowFields)}</tr>);
	}
	return (
		<div className="iht-data-table">
			{props.data ? (
				<table className="iht-data-table__table">
					<tr>{React.Children.toArray(columnHeader)}</tr>
					{React.Children.toArray(dataRows)}
				</table>
			) : (
				<div>No data is loaded</div>
			)}
		</div>
	);
};

export default DataTable;
