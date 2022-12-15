
export const Table = ({ data, columns }) => {

   return (
      <table>
         <thead>
            <TableHeader columns={columns} />
         </thead>
         <tbody>
            {data.map(item =>
               <TableRow key={item.id} item={item} columns={columns} />)
            }
         </tbody>
      </table>
   );
};

const TableHeader = ({ columns }) =>
   <tr>
      {columns.map((columnItem, index) =>
         <th key={index}>{columnItem.heading}</th>
      )}
   </tr>

const TableRow = ({ item, columns }) => (
   <tr>
      {columns.map((columnItem, index) => {
         return <td key={index}>{item[`${columnItem.value}`]}</td>
      })}
   </tr>
)

