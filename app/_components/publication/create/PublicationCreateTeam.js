import Title from "@/_components/_ui/Title"

const CreateTeam = ({handle}) => {
    const teams = [ // Заглушка комманд
        {
            id: 1,
            name: 'Команда 1'
        },
        {
            id: 2,
            name: 'Команда 2'
        }
    ]

    return (
        <div>
            <Title name="Создание акции/объявления" btn />
            <div className="grid gap-3 border-t border-b py-5 border-slate-800">
                <span className="border-l-[6px] border-blue-500 bg-[#3b82f630] p-3 pl-4 rounded-lg text-white mb-2">Выберет команду, которой будет принадлежать объявление.</span>
                { teams.map(({id, name}) => (
                    <button key={id} className='className="block w-full bg-blue-500 text-blue-100 text-xs text-center rounded-2xl font-medium uppercase px-2 py-4' onClick={handle}>{name}</button>
                ))}
            </div>
        </div>
    )
}

export default CreateTeam