import Popup from "reactjs-popup";
import CellContent from "./CellContent";
import React from "react";

const Tooltip = ({ width, column, cell, cellObj, row, borderStyle }) => (
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
                <div className="description tooltip-image">
                    <img  className="cell-img" src={ cellObj.headerImage ? cellObj.headerImage.uri : 'https://via.placeholder.com/48'} ></img>
                    <span className="cell-image-content">
                        <Popup
                            on={["hover", "focus"]}
                            trigger={(open) => <button>{cell}</button>}
                            position="bottom center"
                            closeOnDocumentClick
                        >
                            <span className="tooltip">{cell}</span>
                        </Popup>
                        { cellObj.showSubheading ? <div className="subheading">{cellObj.subHeading}</div> : <></> }
                    </span>
                </div>
            }
        />
    </td>
);

export default Tooltip;