import Row from "../row";
import React from "react";
import ScrollContainer from "react-indiana-drag-scroll";

export default function TableBody({ sortedColumns, filteredRows, rowProperties, editor, fitTableToSpace }) {
    const style = { borderSpacing:`0px ${rowProperties.rowBottonMargin}px` };
    if (fitTableToSpace) {
        style["width"] = "100%";
    }

    return (
        <ScrollContainer className="scroll-container">
            {sortedColumns?.length === 0 ? (
                <div className="table-no-data">Add some data data</div>
            ) : (
                <div className= { `table-container  ${editor ? " editor": ""} ${fitTableToSpace ? 'fit-to-space':'adject-to-content' } ` }>
                    <table className="table" style={ style }>
                        <thead>
                        <tr>
                            {sortedColumns.map((column, index) => (
                                <th
                                    key={column.key}
                                    style={{
                                        ...column.styles,
                                        width: column.expandToFillSpace ? '100%' : 'auto',
                                        textAlign: column.expandToFillSpace ? 'right' : 'left',
                                        paddingLeft: rowProperties.cellPadding
                                    }}
                                    className= { `${index === 0 ? "first" : ""}   ${index === sortedColumns.length - 1 ? "last" : ""}` }
                                >
                                    {column.title}
                                </th>
                            ))}
                        </tr>
                        </thead>
                        <tbody  style={{ "backgroundColor": `${rowProperties.rowBackgroundColor}` }}>
                        {filteredRows.map((row, index) => (
                            <Row key={index} row={row} columns={sortedColumns} rowProperties={rowProperties} />
                        ))}
                        </tbody>
                    </table>
                </div>
            )}
        </ScrollContainer>
    );
}

