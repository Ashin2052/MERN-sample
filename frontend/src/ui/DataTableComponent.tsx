import DataTable from 'react-data-table-component';


const DataTableComponent =(props: any) => {
console.log(props.columns)
    return( <DataTable
        columns={props.columns}
        data={props.data}
    />)

}

export default DataTableComponent;