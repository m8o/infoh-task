import "./DataTable.css";
import {
	MdHighlightOff,
	MdCheckCircle,
	MdDelete,
	MdEdit,
} from "react-icons/md";
import React from "react";

const DataTable = (props) => {
	let columnHeader = [];
	let dataRows = [];
	if (props.data.length > 0) {
		Object.keys(props.data[0]).forEach((key) => {
			if (!props.idName.includes(key)) {
				columnHeader.push(<th>{key}</th>);
			}
			if (props.idName[0] === key) {
				columnHeader.unshift(<th>Delete</th>, <th>Edit</th>);
			}
		});
		for (let i = 0; i < props.data.length; i++) {
			let rowFields = [];
			for (const key in props.data[i]) {
				if (Object.hasOwnProperty.call(props.data[i], key)) {
					if (!props.idName.includes(key)) {
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
					if (props.idName[0] === key) {
						rowFields.unshift(
							<td>
								<MdDelete
									onClick={() => {
										props.onDelete(props.data[i][props.idName[0]]);
									}}
									className="iht-icon clickable fail"
								/>
							</td>,
							<td>
								<MdEdit
									onClick={() => {
										props.onEdit(props.data[i][props.idName[0]]);
									}}
									className="iht-icon clickable success"
								/>
							</td>
						);
					}
				}
			}
			dataRows.push(<tr>{React.Children.toArray(rowFields)}</tr>);
		}
	} else {
		columnHeader = [<th>No data</th>];
		dataRows = [
			<tr>
				<td>No data</td>
			</tr>,
		];
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
