import TableStatisticsItem from "@/_components/_ui/table/TableStatisticsItem"

const TableStatistics = ({ data }) => {
    return (
        <div className="flex flex-col gap-4">
            {data.map(({ id, request_name, action_name, public_id, request_date, amount, status}) => (
                <TableStatisticsItem key={id} id={id} request_name={request_name} action_name={action_name} public_id={public_id} request_date={request_date} amount={amount} status={status} />
            ))}
        </div>
    )
}

export default TableStatistics