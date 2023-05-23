import React, { useMemo} from 'react'
import { Container, Table } from 'react-bootstrap'
import { useTable , useSortBy} from 'react-table';
import { GROUPED_COLUMN} from './Columns';
import MOCK_DATA from './MOCK_DATA.json'
import NagivaTable from './NagivaTable';



const SortingTable = () => {

    const columns = useMemo(()=> GROUPED_COLUMN,[]);
    const data = useMemo(()=> MOCK_DATA,[]);

    // to reduce rerendering of data everytime 
    const TableInstance = useTable({
        columns: columns,
        data: data
    }, useSortBy)

    const { 
        getTableProps,
        getTableBodyProps,
        headerGroups,
        footerGroups,
        rows,
        prepareRow
    } = TableInstance;
  return (
    <Container className='mt-3'>
        <NagivaTable/>
        <h5>React table Sorting Mechanism</h5>

           {/* Apply the Table props */}
        <Table striped bordered responsive hover {...getTableProps()}>
            <thead className='table-dark text-center'>
                {
                // Loop over header row props
                headerGroups.map(headergroup=> (
                    
                    // apply the header row props
                    <tr {...headergroup.getHeaderGroupProps()}>
                    {
                        headergroup.headers.map(column=> (
                            <th {...column.getHeaderProps(column.getSortByToggleProps())}>
                                {
                                    column.render("Header")
                                }
                                <span>
                                    {
                                        column.isSorted? (column.isSortedDesc?  "": ""):""
                                    }
                                </span>
                            </th>
                        ))
                    }
                </tr>
                ))
                }
               
            </thead>
            <tbody {...getTableBodyProps()}>
                {
                    rows.map(row=> {
                        prepareRow(row)
                        return (
                            <tr {...row.getRowProps()}>
                                {
                                row.cells.map(cell=> {
                                    return (
                                        <td {...cell.getCellProps()}>
                                            {
                                                cell.render("Cell")
                                            }
                                        </td>
                                    )
                                })
                                }
                            </tr>
                        )
                    })
                }
            </tbody>
            <tfoot className='table-dark text-center'>
                {
                    footerGroups.map(footerGroup=> {
                        return (
                            <tr {...footerGroup.getFooterGroupProps()}>
                                {
                                    footerGroup.headers.map(column=> (
                                        <td {...column.getFooterProps()}>
                                            {
                                                column.render("Footer")
                                            }
                                        </td>
                                    ))
                                }
                            </tr>
                        )
                    })
                }
            </tfoot>
           
        </Table>
    </Container>
  )
}

export default SortingTable