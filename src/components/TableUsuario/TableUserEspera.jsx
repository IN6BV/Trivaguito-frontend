
import {useTableData} from "../../shared/hooks";

export const TablePendientes = () => {
    const { table, flexRender } = useTableData();

    return (
        <div className="table-container">
        <table className="styled-table">
            <thead>
                {table.getHeaderGroups().map((headerGroup) => (
                    <tr key={headerGroup.id}>
                        {headerGroup.headers.map((header) => (
                            <th key={header.id}>
                                {header.column.columnDef.header}
                            </th>
                        ))}
                    </tr>
                ))}
            </thead>
            <tbody>
                {table.getRowModel().rows.map((row) => (
                    <tr key={row.id}>
                        {row.getVisibleCells().map((cell) => (
                            <td key={cell.id}>
                                {flexRender(cell.column.columnDef.cell, cell.getContext())}
                            </td>
                        ))}
                    </tr>
                ))}
            </tbody>
            <tfoot>
                <tr>
                    <td colSpan={table.getHeaderGroups()[0].headers.length}>
                        <h1>Id</h1>
                    </td>
                </tr>
            </tfoot>
        </table>
    </div>
    );
};
