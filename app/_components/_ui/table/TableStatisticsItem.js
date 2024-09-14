import Link from "next/link"

const TableStatisticsItem = ({ id, request_name, action_name, public_id, request_date, amount, status }) => {
    return (
        <div className="bg-slate-800 rounded-xl">
            <div className="text-white overflow-hidden">
                <div className="flex justify-between p-3">
                    <div className="font-medium">{request_name}</div>
                    <div className={`${status == 'Успешно' ? 'bg-green-700' : 'bg-red-500'} bg-green-500 px-3 text-xs py-1 rounded-lg`}>{status}</div>
                </div>
            </div>
            <ul className="text-xs text-slate-300 p-3">
                <li className="bg-slate-700 px-2 py-1 rounded-md"><b>№ Акции:</b> {id}</li>
                <li className="px-2 py-1"><b>Имя акции:</b> {action_name}</li>
                <li className="bg-slate-700 px-2 py-1 rounded-md"><b>ID Публикации:</b> {public_id}</li>
                <li className="px-2 py-1"><b>Дата:</b> {request_date}</li>
                <li className="bg-slate-700 px-2 py-1 rounded-md"><b>Стоимость:</b> {amount}</li>
            </ul>
        </div>
    )
}

export default TableStatisticsItem