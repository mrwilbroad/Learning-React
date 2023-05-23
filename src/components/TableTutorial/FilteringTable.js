import React, { useMemo} from 'react'
import { Container, Table } from 'react-bootstrap'
import { useTable , useSortBy, useGlobalFilter} from 'react-table';
import { GROUPED_COLUMN} from './Columns';
import MOCK_DATA from './MOCK_DATA.json'
import NagivaTable from './NagivaTable';
import GlobalFiltering from './GlobalFiltering';



const FilteringTable = () => {

    const columns = useMemo(()=> GROUPED_COLUMN,[]);
    const data = useMemo(()=> MOCK_DATA,[]);

    // to reduce rerendering of data everytime 
    const TableInstance = useTable({
        columns: columns,
        data: data
    },useGlobalFilter)

    const { 
        getTableProps,
        getTableBodyProps,
        headerGroups,
        footerGroups,
        rows,
        setGlobalFilter,
        state,
        prepareRow
    } = TableInstance;

    const { gLobalFilter}  = state;

    
  return (
    <Container className='mt-3'>
        <NagivaTable/>
        <h5>React table Filtering(Global Filtering) Mechanism</h5>

           {/* Apply the Table props */}
           <GlobalFiltering filter ={gLobalFilter} setFilter={setGlobalFilter}/>
        <Table striped bordered responsive hover {...getTableProps()}>
            <thead className='table-dark text-center'>
                {
                // Loop over header row props
                headerGroups.map(headergroup=> (
                    
                    // apply the header row props
                    <tr {...headergroup.getHeaderGroupProps()}>
                    {
                        headergroup.headers.map(column=> (
                            <th {...column.getHeaderProps()}>
                                {
                                    column.render("Header")
                                }
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

export default FilteringTable