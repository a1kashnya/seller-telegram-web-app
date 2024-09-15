import TablePublishItem from "@/_components/_ui/table/TablePublishItem"

const TablePublish = ({ data }) => {
    return (
        <div className="flex flex-col gap-4">
            {data.map(({ id, publish_name, status, product_name, market_name, cashback, team_name, request }) => (
                <TablePublishItem key={id} id={id} publish_name={publish_name} status={status} product_name={product_name} market_name={market_name} cashback={cashback} team_name={team_name} request={request}/>
            ))}
        </div>
    )
}

export default TablePublish