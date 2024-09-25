import React, { useEffect, useMemo, useState } from "react";
import Pagination from "./components/pagination";
import useSortedColumns from "./hooks/useSortedCols";
import useFilteredRows from "./hooks/useFilteredRows";
import Header from "./components/header";
import TableBody from "./components/table/body";
import "./style.css";
import "./styles/pagination.css";
import "./styles/table.css";

const AdvancedTable = (props) => {
	const { records, tableTitle, pageSize = 10 } = props;

	const allData = Array.isArray(records) ? records : [];

	const [currentSearchWords, setCurrentSearchWords] = useState("");
	const [currentPage, setCurrentPage] = useState(1);

	useEffect(() => {
		setCurrentPage(1);
	}, [currentSearchWords]);

	const sortedColumns = useSortedColumns(allData);

	const filteredRows = useFilteredRows(allData, currentSearchWords);

	const pageData = useMemo(() => {
		const indexOfLastRow = currentPage * pageSize;
		const indexOfFirstRow = indexOfLastRow - pageSize;
		return filteredRows.slice(indexOfFirstRow, indexOfLastRow);
	}, [filteredRows, currentPage, pageSize]);

	return (
		<div className="content-container">
			<Header
				tableTitle={tableTitle}
				setCurrentSearchWords={setCurrentSearchWords}
			/>
			<div className="table-responsive-container">
				<TableBody sortedColumns={sortedColumns} filteredRows={pageData} />
				<Pagination
					currentPage={currentPage}
					onChangePage={setCurrentPage}
					rowsPerPage={pageSize}
					data={filteredRows}
				/>
			</div>
		</div>
	);
};

export default AdvancedTable;