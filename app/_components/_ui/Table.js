import Block from "@/_components/_ui/Block"

const Table = ({ columns, data }) => {
    return (
        <div className="flex flex-col gap-3">
            {data.map((row, rowIndex) => (
                <Block key={row.id}>
                    <div className="text-white overflow-hidden">
                        <div className="flex justify-between">
                            <div className="text-xl font-medium">{row.publish_name}</div>
                            <div className={`${row.status === 'Разрешена' ? 'bg-green-600' : 'bg-red-500' } px-3 text-xs py-1 rounded-xl`}>
                                {row.status}
                            </div>
                        </div>
                    </div>

                    <ul className="text-xs text-slate-300">
                        {columns.map(({ Header, accessor }, idx) => (
                            <li key={idx} className={`px-2 py-1 rounded-md ${idx % 2 === 0 ? 'bg-[#ffffff0d]' : 'bg-[#3333330d]' }`}>
                                <b>{Header}:</b> {row[accessor] ?? 'Нет данных'}
                            </li>
                        ))}
                    </ul>
                </Block>
            ))}
        </div>
    )
}

export default Table