import Title from "@/_components/_ui/Title"
import Users from "@/_components/_ui/users/Users"
import Link from "next/link"

const TeamUsers = () => {
    const items = [ // Заглушка
        {
            id: 1,
            name: '4rth',
            role: 'author'
        },
        {
            id: 2,
            name: 'alkashnya',
            role: 'admin'
        },
        {
            id: 3,
            name: 'RUSO',
            role: 'manager'
        }
    ]
    
    return (
        <>
            <Title name="Список пользователей" url="/pages/team" />
            <div className="grid gap-3 border-t border-b py-5 border-slate-800">
                <Users data={items} />
                <Link href="/pages/team/users/add" className="block w-full bg-blue-500 text-blue-100 text-xs text-center rounded-2xl font-medium uppercase px-2 py-4">Добавить</Link>
            </div>
        </>
    )
}

export default TeamUsers