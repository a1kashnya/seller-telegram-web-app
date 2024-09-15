const TableProfileStatistics = ({сompleted, approved, cost}) => {
    return (
        <div className="grid grid-cols-3">
            <div className="flex flex-col items-center border-r border-slate-700 text-white">
                <span className="text-xs">Выполнено:</span>
                <span className="text-2xl font-medium">{сompleted}</span>
            </div>
            <div className="flex flex-col items-center border-r border-slate-700 text-white">
                <span className="text-xs">Клиентов:</span>
                <span className="text-2xl font-medium">{approved}</span>
            </div>
            <div className="flex flex-col items-center text-white">
                <span className="text-xs">Потрачено:</span>
                <span className="text-2xl font-medium">{cost}₽</span>
            </div>
        </div>
    )
}

export default TableProfileStatistics