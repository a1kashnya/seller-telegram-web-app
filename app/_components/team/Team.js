import Title from "@/_components/_ui/Title"
import TableTeam from "@/_components/_ui/table/TableTeam"

const Team = () => {
    const items = [ // Заглушка
        {
            id: 1,
            name: '4rth_team',
            author: '4rth',
            balance: '1000'
        }
    ]
    
    return (
        <>
            <Title name="Моя команда" btn />
            <div className="grid gap-3 border-t border-b py-5 border-slate-800">
                <TableTeam data={items} />
            </div>
        </>
    )
}

export default Team