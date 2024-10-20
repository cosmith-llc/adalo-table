import Popup from "reactjs-popup";
import CellContent from "./CellContent";
import React from "react";

const Tooltip = ({ width, column, cell, cellObj, row, borderStyle}) => (
    <td
        onClick={() => {
            if (!!column.actionable && row?.onPress) {
                row.onPress();
            }
        }}
        style = { { ...borderStyle } }
    >
        <CellContent
            width={width}
            column={column}
            content={
                <div className="description">
                    <Popup
                        on={["hover", "focus"]}
                        trigger={(open) => <button>{cell}</button>}
                        position="bottom center"
                        closeOnDocumentClick
                    >
                        <span className="tooltip">{cell}</span>
                    </Popup>
                    { cellObj.showSubheading ? <div className="subheading">{cellObj.subHeading}</div> : <></> }
                </div>
            }
        />
    </td>
);

export default Tooltip;