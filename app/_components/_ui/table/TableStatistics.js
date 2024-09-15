import TableStatisticsItem from "@/_components/_ui/table/TableStatisticsItem"

const TableStatistics = ({ data }) => {
    return (
        <div className="flex flex-col gap-4">
            <select className="rounded-lg p-3 bg-slate-800 text-slate-400">
                <option value="">Фильтры</option>
                <option value="dog">№ Запроса</option>
                <option value="dog">Имя запроса</option>
                <option value="dog">Имя акции</option>
                <option value="dog">Дата запроса</option>
                <option value="dog">Сумма</option>
                <option value="dog">Статус оплаты</option>
            </select>
            {data.map(({ id, request_name, action_name, public_id, request_date, amount, status }) => (
                <TableStatisticsItem key={id} id={id} request_name={request_name} action_name={action_name} public_id={public_id} request_date={request_date} amount={amount} status={status} />
            ))}
        </div>
    )
}

export default TableStatistics