import { format} from 'date-fns';



export const COLUMNS = [
    {
        Header: "id",
        Footer: "id",
        accessor: "id"
    },
    {
        Header: "Firstname",
        Footer: "Firstname",
        accessor: "first_name"
    },
    {
        Header: "Lastname",
        Footer: "Lastname",
        accessor: "last_name"
    },
    {
        Header: "Email",
        Footer: "Email",
        accessor: "email"
    },
    {
        Header: "Birthday",
        Footer: "Birthday",
        accessor: "date_of_birth",
        Cell: ({value})=> {
            return "date"
        }
    },
    {
        Header: "Age",
        Footer: "Age",
        accessor: "age"
    },
    {
        Header: "Country",
        Footer: "Country",
        accessor: "country"
    },
    {
        Header: "Phone",
        Footer: "Phone",
        accessor: "phone",
       
    },
    
]


export const GROUPED_COLUMN = [
        {
            Header: "Id",
            Footer: "Id",
            accessor: "id",
        },
        {
            Header: "Name",
            Footer: "Name",
            columns:[
                {
                    Header: "Firstname",
                    Footer: "Firstname",
                    accessor: "first_name"
                },
                {
                    Header: "Lastname",
                    Footer: "Lastname",
                    accessor: "last_name"
                },
            ]
        },
        {
            Header: "Info",
            Footer: "Info",
            columns: [
                {
                    Header: "Birthday",
                    Footer: "Birthday",
                    accessor: "date_of_birth",
                    Cell: ({value})=> {
                    
                        return format(new Date(value),"dd-MM-yyyy")
                    }
                },
                {
                    Header: "Age",
                    Footer: "Age",
                    accessor: "age"
                },
                {
                    Header: "Country",
                    Footer: "Country",
                    accessor: "country"
                },
            ]
        }
    
]