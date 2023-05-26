import React from 'react';
import { useTable } from 'react-table'

const HomePage = ({ entries }) => {
    const data = React.useMemo(() => entries || [], [entries])

    const columns = React.useMemo(() => [
        {
            Header: 'Date',
            accessor: 'date', // accessor is the "key" in the data
        },
        {
            Header: 'Duration',
            accessor: 'duration',
        },
        {
            Header: 'Category',
            accessor: 'category',
        },
        {
            Header: 'Notes',
            accessor: 'notes',
        },
    ], [])

    const {
        getTableProps,
        getTableBodyProps,
        headerGroups,
        rows,
        prepareRow,
    } = useTable({ columns, data })

    return (
        <table {...getTableProps()} style={{ border: 'solid 1px blue' }}>
            <thead>
            {headerGroups.map(headerGroup => (
                <tr {...headerGroup.getHeaderGroupProps()}>
                {headerGroup.headers.map(column => (
                    <th {...column.getHeaderProps()}>{column.render('Header')}</th>
                ))}
                </tr>
            ))}
            </thead>
            <tbody {...getTableBodyProps()}>
            {rows.map((row, i) => {
                prepareRow(row);
                return (
                <tr {...row.getRowProps()}>
                    {row.cells.map(cell => {
                    return <td {...cell.getCellProps()}>{cell.render('Cell')}</td>
                    })}
                </tr>
                )}
            )}
            </tbody>
        </table>
    )
}

export default HomePage;
