import { useMemo } from "react";

function useSortedCols(records) {
    const sortedColumns = useMemo(() => {
        let columns = [];
        if (records?.length > 0) {
            Object.keys(records[0]).forEach((key) => {
                if (["id", "_meta"].includes(key)) return;
                let columnRaw = records[0][key];
                let column = {
                    title: columnRaw?.title || "---",
                    index: columnRaw?.order || Infinity,
                    key: key,
                    type: columnRaw?.type || "text",
                    styles: columnRaw?.styles?.title,
                    actionable: !!columnRaw?.actionable,
                    expandToFillSpace: columnRaw?.expandToFillSpace || false, // Додаємо поле expandToFillSpace
                };

                if (["badge", "colored-select"].includes(column.type)) {
                    const choices = (columnRaw.valuesToColors || "")
                        .split(",")
                        .filter(Boolean)
                        .map((choice) => {
                            const option = (choice || "").split(":");
                            return {
                                type: option?.[0],
                                color: option?.[1],
                            };
                        });
                    column.choices = choices;
                    column.caseSensitive = !!columnRaw?.caseSensitive;
                }
                if (columnRaw?.visible) {
                    columns.push(column);
                }
            });
        }
        return columns.sort((a, b) => a.index - b.index);
    }, [records]);
    return sortedColumns;
}

export default useSortedCols;
