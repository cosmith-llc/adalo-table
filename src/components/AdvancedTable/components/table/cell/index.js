import React from "react";
import { useWindowSize } from "@uidotdev/usehooks";
import Badge from "./components/Badge";
import Select from "./components/Select";
import Tooltip from "./components/Tooltip";

function Cell(props) {
    const { width } = useWindowSize();
    const { column, cell: cellObj, id: rowId, row } = props;
    const cell = cellObj.value;
    // console.log(cellObj);
    let mainColor;
    switch (column.type) {
        case "description":
        case "text":
            return <Tooltip row={row} cell={cell} column={column} width={width} />;
        case "colored-select":
            mainColor = getColor(cellObj, cell);
            return (
                <Select
                    row={row}
                    rowId={rowId}
                    value={cell}
                    onChange={cellObj?.onChange}
                    mainColor={mainColor}
                    column={column}
                    width={width}
                    choices={column["choices"]}
                />
            );
        case "badge":
            mainColor = getColor(cellObj, cell);
            return (
                <Badge
                    row={row}
                    cell={cell}
                    mainColor={mainColor}
                    width={width}
                    column={column}
                />
            );
    }
}

export default Cell;

function getColor(cellObj, cell) {
    const colors = cellObj?.valuesToColors.split(",");
    for (let color of colors) {
        const [label, hexColor] = color.split(":");
        if (label.toLowerCase() === cell.toLowerCase()) {
            return hexColor;
        }
    }
}