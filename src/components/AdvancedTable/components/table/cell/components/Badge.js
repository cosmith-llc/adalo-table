import CellContent from "./CellContent";
import React from "react";

const Badge = ({ mainColor, cell, width, column, row, borderStyle }) => (
    <td
        onClick={() => {
            if (!!column?.actionable && row?.onPress) {
                row.onPress();
            }
        }}
        style ={ { ...borderStyle } }
    >
        <CellContent
            width={width}
            column={column}
            content={
                <div
                    className={`badge`}
                    style={{
                        color: mainColor,
                        backgroundColor: `${mainColor}20`,
                    }}
                >
                    {cell}
                </div>
            }
        />
    </td>
);

export default Badge;