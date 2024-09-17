const BalanceHistory = ({ data }) => {
    return (
        <div className="grid gap-3">
            <div className="grid grid-cols-3 gap-3 bg-[#3b82f630] rounded-xl p-3 text-white">
                <span className="font-medium px-2 border-r border-[#1c3666]">Дата:</span>
                <span className="font-medium px-2 border-r border-[#1c3666]">Сумма:</span>
                <span className="font-medium px-2 rounded-xl">Метод:</span>
            </div>
            {data.map(({ id, date, cost, method }) => (
                <div key={id} className="grid grid-cols-3 gap-3 bg-[#3b82f630] rounded-xl p-3 text-white">
                    <span className="px-2 border-r border-[#1c3666]">{date}</span>
                    <span className="px-2 border-r border-[#1c3666]">{cost}₽</span>
                    <span className="px-2">{method}</span>
                </div>
            ))}
        </div>
    )
}

export default BalanceHistory