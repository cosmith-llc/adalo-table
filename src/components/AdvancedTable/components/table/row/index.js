import React from "react";
import Cell from "../cell";

function Row(props) {
    const { row, columns, rowProperties } = props;

    return (
        <tr
            key={row.uiquecode}
            // onClick={() => {
            //   if (row?.onPress) row.onPress();
            // }}
        >
            {columns.map((column, index) => {
                return <Cell id={row.id} row={row} cell={row[column.key]} column={column} borderStyle = { getCellStyle(rowProperties, index, columns.length) }  />;
            })}
        </tr>
    );
}

const getStyleForBorder = (position, color, width) => {
    const borderStyle = { };

    borderStyle[`border${position}Color`] = color ? color : '#F5F5F5';
    borderStyle[`border${position}Width`] = width;
    borderStyle[`border${position}Style`] = 'solid';

    return borderStyle;
}

const getCellPadding = (rowProperties, isFirst, isLast) => {
    const { cellPadding, cellVerticalPadding, skipRightCellPadding,  skipLeftCellPadding} = rowProperties;
    return rowProperties.overridePadding ? { 
        "paddingLeft": !skipLeftCellPadding || !isFirst ? cellPadding || 0 : 0, 
        "paddingRight": !skipRightCellPadding || !isLast ? cellPadding || 0 : 0, 
        "paddingTop": cellVerticalPadding || 0,
        "paddingBottom": cellVerticalPadding || 0
    } : {};
}

const getCellStyle = (rowProperties, index, length) => {
    const isFirst = index === 0;
    const isLast = index + 1 === length;

    const { rowBorderColor: color, rowBorderWidth: width } =  rowProperties;

    const left =  isFirst ? getStyleForBorder('Left', color, width) : {};
    const right =  isLast ? getStyleForBorder('Right', color, width) : {};
    const top = getStyleForBorder('Top', color, width);
    const bottom = getStyleForBorder('Bottom', color, width);

    const cellPadding = getCellPadding(rowProperties, isFirst, isLast);

    return {  ...left,  ...top, ...bottom, ...right, ...cellPadding }; 
}

export default Row;