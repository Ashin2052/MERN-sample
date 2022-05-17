import DataTableComponent from "../ui/DataTableComponent";
import Table from "../ui/DataTableComponent";

function  MovieData()
{

return(

<>
<h1>Movie List</h1>

<DataTableComponent 
 columns={columns}
 data={data}>


</DataTableComponent>
</>


)
}

export default MovieData;

const columns = [
    {
        name: 'Title',
        selector: (row: { title: any; }) => row.title,
    },
    {
        name: 'Year',
        selector: (row: { year: any; }) => row.year,
    },
];

const data = [
    {
        id: 1,
        title: 'Beetlejuice',
        year: '1988',
    },
    {
        id: 2,
        title: 'Ghostbusters',
        year: '1984',
    },
]
