const BalanceHistory = ({ data }) => {
    return (
        <div className="grid gap-3">
            <div className="grid grid-cols-3 gap-3 bg-slate-800 rounded-xl p-3 text-white">
                <span className="font-medium px-2 border-r border-slate-700">Дата:</span>
                <span className="font-medium px-2 border-r border-slate-700">Сумма:</span>
                <span className="font-medium px-2 rounded-xl">Метод:</span>
            </div>
            {data.map(({ id, date, cost, method }) => (
                <div key={id} className="grid grid-cols-3 gap-3 bg-slate-800 rounded-xl p-3 text-white">
                    <span className="px-2 border-r border-slate-700">{date}</span>
                    <span className="px-2 border-r border-slate-700">{cost}₽</span>
                    <span className="px-2">{method}</span>
                </div>
            ))}
        </div>
    )
}

export default BalanceHistory