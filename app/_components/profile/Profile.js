import Title from "@/_components/_ui/Title"
import TableProfileStatistics from "@/_components/_ui/table/TableProfileStatistics"

const Profile = () => {
    const statistics = { // Заглушка
        сompleted: 103,
        approved: 24,
        cost: 20500
    }

    const teams = [  // Заглушка
        {
            id: 1,
            name: '4rth_team'
        },
        {
            id: 2,
            name: 'alkashnya_team'
        }
    ]

    return (
        <div>
            <Title name="Мой профиль" btn />
            <div className="grid gap-3 border-t border-b py-5 border-slate-800">
                <div className="flex justify-between items-center text-white">
                    <div className="flex justify-start items-center">
                        <div className="w-12 h-12 bg-slate-800 rounded-xl mr-3"></div>
                        <div className="flex flex-col">
                            <span className="font-medium">Александр</span>
                            <span className="text-xs text-slate-500">@alkashnya</span>
                        </div>
                    </div>
                    <span className="bg-green-700 px-4 py-2 rounded-xl font-medium text-lg">1000₽</span>
                </div>
                <div className="mt-8">
                    <h2 className="text-white uppercase font-medium text-xs mb-3">Статистика:</h2>
                    <div className="bg-slate-800 p-3 rounded-xl">
                        <TableProfileStatistics сompleted={statistics.сompleted} approved={statistics.approved} cost={statistics.cost} />
                    </div>
                </div>
                <div className="mt-4">
                    <h2 className="text-white uppercase font-medium text-xs mb-3">Команды:</h2>
                    <div className="flex flex-col gap-3 rounded-xl">
                        {teams.map(({ id, name }) => (
                            <div key={id} className="flex flex-row items-center gap-3 bg-slate-800 text-white p-3 rounded-xl">
                                <span className="bg-blue-500 px-2 py-1 rounded-lg">#{id}</span>
                                <div className="font-medium">{name}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Profile
