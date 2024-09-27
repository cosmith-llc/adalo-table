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
		onButtonClick
	} = props;

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
		<div className="content-container" style={{ backgroundColor: listBackgroundColor }}>
			<Header
				tableTitle={tableTitle}
				setCurrentSearchWords={setCurrentSearchWords}
				showButton={showButton} // Передаємо пропс для відображення кнопки
				buttonLabel={buttonLabel} // Передаємо текст кнопки
				buttonBackgroundColor={buttonBackgroundColor} // Передаємо колір фону кнопки
				buttonTextColor={buttonTextColor} // Передаємо колір тексту кнопки
				buttonFontSize={buttonFontSize}
				buttonFontWeight={buttonFontWeight}
				buttonBorderColor={buttonBorderColor}   // Передаємо колір рамки
				buttonBorderWidth={buttonBorderWidth}   // Передаємо ширину рамки
				buttonBorderRadius={buttonBorderRadius}// Передаємо розмір шрифту кнопки
				onButtonClick={onButtonClick}  // Передаємо дію для кнопки
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