import React from 'react';
import { useTable } from 'react-table';
import 'bootstrap/dist/css/bootstrap.min.css';

const HomePage = () => {
  const storedEntries = JSON.parse(sessionStorage.getItem('entries') || '[]');
  const data = React.useMemo(() => storedEntries, [storedEntries]);

  const columns = React.useMemo(
    () => [
      {
        Header: 'Date',
        accessor: 'date',
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
    ],
    []
  );

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
  } = useTable({ columns, data });

  return (
    <table {...getTableProps()} className="table table-striped">
      <thead className="thead-dark">
        {headerGroups.map((headerGroup) => (
          <tr {...headerGroup.getHeaderGroupProps()}>
            {headerGroup.headers.map((column) => (
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
              {row.cells.map((cell) => {
                return <td {...cell.getCellProps()}>{cell.render('Cell')}</td>;
              })}
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default HomePage;
