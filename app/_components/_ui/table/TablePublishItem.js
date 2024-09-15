import Link from "next/link"

const TablePublish = ({ id, publish_name, status, product_name, market_name, cashback, team_name, request }) => {
    return (
        <div className="border-l-[6px] border-blue-500 bg-[#3b82f630] rounded-lg text-white">
            <div className="text-white overflow-hidden">
                <div className="flex justify-between p-3 mb-3">
                    <div className="text-xl font-medium">{publish_name}</div>
                    <div className={`${status == 'Разрешена' ? 'bg-green-800' : 'bg-red-800'} bg-green-500 px-3 text-xs py-1 rounded-lg`}>{status}</div>
                </div>
            </div>
            <ul className="text-xs text-slate-300 px-3">
                <li className="bg-[#ffffff0d] px-2 py-1 rounded-md"><b>№ Акции:</b> {id}</li>
                <li className="px-2 py-1"><b>Имя акции:</b> {publish_name}</li>
                <li className="bg-[#ffffff0d] px-2 py-1 rounded-md"><b>Имя продукта:</b> {product_name}</li>
                <li className="px-2 py-1"><b>Маркетплейс:</b> {market_name}</li>
                <li className="bg-[#ffffff0d] px-2 py-1 rounded-md"><b>Кешбэк:</b> {cashback}%</li>
                <li className="px-2 py-1"><b>Команда:</b> {team_name}</li>
                <li className="bg-[#ffffff0d] px-2 py-1 rounded-md"><b>Запрос:</b> {request }</li>
            </ul>
            <div className="flex flex-row justify-between gap-2 p-3">
                {status == 'Разрешена' ? (
                    <Link href={`/pages/publication/publish/selection/${id}`} className="text-center text-xs text-white font-medium rounded-lg uppercase bg-blue-500 p-2 w-1/2">Свободные даты</Link>
                ) : null}
                <Link href={`/pages/publication/publish/edit/${id}`} className={`text-center text-xs font-medium rounded-lg uppercase bg-yellow-500 text-black p-2 ${status !== 'Разрешена' ? 'w-full' : 'w-1/2'}`}>Редактировать</Link>
            </div>
        </div>
    )
}

export default TablePublish