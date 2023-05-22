import React, { useMemo} from 'react'
import { Container, Table } from 'react-bootstrap'
import { useTable} from 'react-table';
import { COLUMNS } from './Columns';
import MOCK_DATA from './MOCK_DATA.json'

const ReacttableIntroduction = () => {

    const columns = useMemo(()=> COLUMNS,[]);
    const data = useMemo(()=> MOCK_DATA,[]);

    // to reduce rerendering of data everytime 
    const TableInstance = useTable({
        columns: columns,
        data: data
    })

    const { 
        getTableProps,
        getTableBodyProps,
        headerGroups,
        rows,
        prepareRow
    } = TableInstance
  return (
    <Container>
        <h5>React table Tutorial</h5>

        <Table striped bordered responsive hover {...getTableProps()}>
            <thead >
                {
                    headerGroups.map(header=> (
                        <tr {...header.getHeaderGroupProps()}>
                            {
                                header.headers.map(column=> (
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
           
        </Table>
    </Container>
  )
}

export default ReacttableIntroduction