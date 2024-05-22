import { useReactTable, getCoreRowModel, flexRender } from "@tanstack/react-table";
import { getUser } from "../../services/api";



export const TablePendientes = async () => {


    const columns = [
        {
            header: "ID",
            accessorKey: "_id"
        },

        {
            header: "Nombre",
            accessorKey: "nombre"
        },
        {
            header: "Apellido",
            accessorKey: "apellido"
        },

        {
            header: "Email",
            accessorKey: "email"
        }

    ]
    const table = useReactTable({ getUser, columns, getCoreRowModel: getCoreRowModel(), })


    return (
        <div>
            <table>
                <thead>
                    {
                        table.getHeaderGroups().map(getHeaderGroups => (
                            <tr key={getHeaderGroups.id}>
                                {
                                    getHeaderGroups.headers.map(header => (
                                        <th key={header.id}>
                                            {header.column.columnDef.header}
                                        </th>
                                    ))
                                }
                            </tr>
                        ))
                    }
                </thead>
                <tbody>
                    {table.getRowModel().rows.map((row) =>(
                        <tr key={row.id}>
                            {row.getVisibleCells().map((cell) =>(
                                <td>
                                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                                </td>
                            ))}
                        </tr>

                    ))}
                </tbody>
                <tfoot>
                    <tr>
                        <h1>Id</h1>
                    </tr>
                </tfoot>
            </table>
        </div>
    );
};
