const Statistics = ({complited, clients, cost }) => {
    return (
        <div className="grid grid-cols-3 gap-3">
            <div className="flex flex-col items-center text-white border-b-[5px] border-blue-500 bg-[#3b82f630] p-3 rounded-xl">
                <span className="text-xs">Выполнено:</span>
                <span className="text-2xl font-medium">{complited}</span>
            </div>
            <div className="flex flex-col items-center text-white border-b-[5px] border-blue-500 bg-[#3b82f630] p-3 rounded-xl">
                <span className="text-xs">Клиентов:</span>
                <span className="text-2xl font-medium">{clients}</span>
            </div>
            <div className="flex flex-col items-center text-white border-b-[5px] border-blue-500 bg-[#3b82f630] p-3 rounded-xl">
                <span className="text-xs">Потрачено:</span>
                <span className="text-2xl font-medium">{cost}₽</span>
            </div>
        </div>
    )
}

export default Statistics
