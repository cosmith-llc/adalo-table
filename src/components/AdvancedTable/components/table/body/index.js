import Row from "../row";
import React from "react";
import ScrollContainer from "react-indiana-drag-scroll";

export default function TableBody({ sortedColumns, filteredRows, rowProperties, editor, fitTableToSpace, headerBorderColor, headerBorderWidth  }) {
    const style = {
        borderSpacing: `0px ${rowProperties.rowBottonMargin}px`
    };

    const style2 = {
        '--header-border-color': headerBorderColor || '#366AD0',
        '--header-border-width': `${headerBorderWidth || 1}px`
    }
    if (fitTableToSpace) {
        style["width"] = "100%";
    }

    return (
        <ScrollContainer className="scroll-container">
            {sortedColumns?.length === 0 ? (
                <div className="table-no-data">Add some data data</div>
            ) : (
                <div className= { `table-container  ${editor ? " editor": ""} ${fitTableToSpace ? 'fit-to-space':'adject-to-content' } ` } style={style2}>
                    <table className="table" style={ style }>
                        <thead>
                        <tr>
                            {sortedColumns.map((column, index) => (
                                <th
                                    key={column.key}
                                    style={{
                                        ...column.styles,
                                        width: column.expandToFillSpace ? '100%' : 'auto',
                                        textAlign: column.expandToFillSpace ? 'right' : 'left', ...getPaddingStyles(index === 0, rowProperties)}
                                    }
                                    className= { `${index === 0 ? "first" : ""} ${index === sortedColumns.length - 1 ? "last" : ""} ${rowProperties.enableBorder ? "custom-border" : "no-custom-border"}` }
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

const getPaddingStyles = (isFisrt, rowProperties) => {
    let paddingStyles = {}
    if (rowProperties.overridePadding && !isFisrt) {
        paddingStyles = { paddingLeft: rowProperties.cellPadding };
    } else if (isFisrt) {
        paddingStyles = { paddingLeft: '20px' };
    }
    return paddingStyles;
}
