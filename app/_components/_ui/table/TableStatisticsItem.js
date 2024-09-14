import Link from "next/link"

const TableStatisticsItem = ({ id, name, status, product_name, market, cashback, team, request }) => {
    return (
        <div className="bg-slate-800 rounded-xl">
            <div className="text-white overflow-hidden">
                <div className="flex justify-between p-3">
                    <div className="font-medium">{name}</div>
                    <div className={`${status == 'true' ? 'bg-green-500' : 'bg-red-500'} bg-green-500 px-3 text-xs py-1 rounded-2xl`}>{status}</div>
                </div>
            </div>
            <ul className="text-xs text-slate-300 p-3">
                <li className="bg-slate-700 px-2 py-1 rounded-md"><b>№ Акции:</b> {id}</li>
                <li className="px-2 py-1"><b>Имя товара:</b> {product_name}</li>
                <li className="bg-slate-700 px-2 py-1 rounded-md"><b>Маркетплейс:</b> {market}</li>
                <li className="px-2 py-1"><b>% Кешбека:</b> {cashback}</li>
                <li className="bg-slate-700 px-2 py-1 rounded-md"><b>Команда:</b> {team}</li>
                <li className="px-2 py-1"><b>Поисковой запрос:</b> {request}</li>
            </ul>
        </div>
    )
}

export default TableStatisticsItem