import React from "react";
import Cell from "../cell";

function Row(props) {
    const { row, columns, rowProperties } = props;
    console.log('Row', row);
    console.log('props', rowProperties, props)
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

    borderStyle[`border${position}Color`] = color;
    borderStyle[`border${position}Width`] = width;
    borderStyle[`border${position}Style`] = 'solid';

    return borderStyle;
}

const getCellPadding = (rowProperties) => {
    return rowProperties.overridePadding ? { "padding": rowProperties.cellPadding } : {};
}

const getCellStyle = (rowProperties, index, length) => {
    
    const isFirst = index === 0;
    const isLast = index + 1 === length;

    const { rowBorderColor: color, rowBorderWidth: width } =  rowProperties;

    const left =  isFirst ? getStyleForBorder('Left', color, width) : {};
    const right =  isLast ? getStyleForBorder('Right', color, width) : {};
    const top = getStyleForBorder('Top', color, width);
    const bottom = getStyleForBorder('Bottom', color, width);

    const cellPadding = getCellPadding(rowProperties);

    return {  ...left,  ...top, ...bottom, ...right, ...cellPadding }; 
}

export default Row;