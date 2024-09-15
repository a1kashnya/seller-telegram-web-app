import Link from "next/link"

const TableStatisticsItem = ({ id, name, author, balance}) => {
    return (
        <div className="bg-slate-800 rounded-xl p-3 text-white">
            <div className="flex justify-between items-center mb-4">
                <div className="text-lg font-medium">{name}</div>
                <span className="bg-blue-500 text-blue-200 px-3 py-1 rounded-lg text-xs font-medium">#{id}</span>
            </div>
            <ul className="mb-4">
                <li className="bg-slate-700 px-2 py-1 rounded-lg mb-3">Создатель: {author}</li>
                <li className="bg-slate-700 px-2 py-1 rounded-lg">Баланс: {balance}₽</li>
            </ul>
            <Link className="block w-full bg-blue-500 text-blue-100 text-xs text-center rounded-2xl font-medium uppercase px-2 py-4" href="/pages/team/users">Открыть</Link>
        </div>
    )
}

export default TableStatisticsItem