import Link from "next/link"

import Title from "@/_components/_ui/Title"

const TeamUsersAdd = () => {
    return (
        <>
            <Title name="Список пользователей" btn />
            <div className="grid gap-3 border-t border-b py-5 border-slate-800">
                <input className="bg-slate-900 border border-slate-800 rounded-2xl p-3 text-center text-slate-300" placeholder="Ник в Telegram"></input>
                <select className="rounded-lg p-3 bg-slate-800 text-slate-400">
                    <option value="">Выбрать роль</option>
                    <option value="dog">Администратор</option>
                    <option value="dog">Менеджер</option>
                </select>
                <Link href="/pages/team/users" className="block w-full bg-blue-500 text-blue-100 text-xs text-center rounded-2xl font-medium uppercase px-2 py-4">Добавить</Link>
            </div>
        </>
    )
}

export default TeamUsersAdd