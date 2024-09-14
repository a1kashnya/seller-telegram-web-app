import TableStatisticsItem from "@/_components/_ui/table/TableStatisticsItem"

const TableStatistics = ({ data }) => {
    return (
        <div className="flex flex-col gap-4">
            {data.map(({ id, name, status, product_name, market, cashback, team, request }) => (
                <TableStatisticsItem key={id} id={id} name={name} status={status} product_name={product_name} market={market} cashback={cashback} team={team} request={request} />
            ))}
        </div>
    )
}

export default TableStatistics