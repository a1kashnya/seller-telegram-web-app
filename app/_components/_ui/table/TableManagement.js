import TableManagementItem from "@/_components/_ui/table/TableManagementItem"
import FilterManagement from "@/_components/_ui/filters/FilterManagement"

const TableManagement = ({ data }) => {
    return (
        <div className="flex flex-col gap-4">
            <FilterManagement />
            {data.map(({ id, publish_id, status, product_name, cashback }) => (
                <TableManagementItem key={id} id={id} publish_id={publish_id} status={status} product_name={product_name} cashback={cashback}/>
            ))}
        </div>
    )
}

export default TableManagement