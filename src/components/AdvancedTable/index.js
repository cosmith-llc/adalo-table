import React, { useEffect, useMemo, useState } from "react";
import Pagination from "./components/pagination";
import useSortedColumns from "./hooks/useSortedCols";
import useFilteredRows from "./hooks/useFilteredRows";
import Header from "./components/header";
import TableBody from "./components/table/body";
import Spinner from "./components/Spinner/Spinner";
import "./style.css";
import "./styles/pagination.css";
import "./styles/table.css";

const AdvancedTable = (props) => {
	const {
		records,
		tableTitle,
		pageSize = 10,
		listBackgroundColor,
		showButton,
		buttonLabel,
		buttonBackgroundColor,
		buttonTextColor,
		buttonFontSize,
		buttonFontWeight,
		buttonBorderColor,
		buttonBorderWidth,
		buttonBorderRadius,
		rowProperties,
		onButtonClick,
		fitTableToSpace,
		editor,
		headerBorderColor,
		headerBorderWidth
	} = props;

	const allData = Array.isArray(records) ? records : [];
	// New loading state
	const [loading, setLoading] = useState(true);
	const [currentSearchWords, setCurrentSearchWords] = useState("");
	const [currentPage, setCurrentPage] = useState(1);

	// Simulate loading delay for data (e.g., API call)
	useEffect(() => {
		setTimeout(() => setLoading(false), 500); // You can replace this with actual data fetching logic
	}, [records]);

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
		<div className="content-container" style={{ backgroundColor: listBackgroundColor }}>
			<Header
				tableTitle={tableTitle}
				setCurrentSearchWords={setCurrentSearchWords}
				showButton={showButton}
				buttonLabel={buttonLabel}
				buttonBackgroundColor={buttonBackgroundColor}
				buttonTextColor={buttonTextColor}
				buttonFontSize={buttonFontSize}
				buttonFontWeight={buttonFontWeight}
				buttonBorderColor={buttonBorderColor}
				buttonBorderWidth={buttonBorderWidth}
				buttonBorderRadius={buttonBorderRadius}
				onButtonClick={onButtonClick}
			/>
			<div className="table-responsive-container">
				{loading ? (
					<Spinner /> // Show spinner while loading
				) : (
					<TableBody
						sortedColumns={sortedColumns}
						filteredRows={pageData}
						rowProperties={rowProperties}
						editor={editor}
						fitTableToSpace={fitTableToSpace}
						headerBorderColor={headerBorderColor}
						headerBorderWidth={headerBorderWidth}
					/>

				)}
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
/* */
export default AdvancedTable;
