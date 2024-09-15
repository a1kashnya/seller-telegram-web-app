import Title from "@/_components/_ui/Title"
import Link from "next/link"

const Home = () => {
    return (
        <div>
            <Title name="Главное меню"/>
            <div className="grid gap-3 border-t border-b py-5 border-slate-800">
                <Link className="block w-full bg-blue-500 text-blue-100 text-xs text-center rounded-2xl font-medium uppercase px-2 py-4" href="pages/create">Создать объявление/акцию</Link>
                <Link className="block w-full bg-blue-500 text-blue-100 text-xs text-center rounded-2xl font-medium uppercase px-2 py-4" href="pages/statistics">Статистика оплат</Link>
                <Link className="block w-full bg-blue-500 text-blue-100 text-xs text-center rounded-2xl font-medium uppercase px-2 py-4" href="pages/invite">Пригласить друга</Link>
                <Link className="block w-full bg-blue-500 text-blue-100 text-xs text-center rounded-2xl font-medium uppercase px-2 py-4" href="pages/help">Нужна помощь</Link>
                <Link className="block w-full bg-blue-500 text-blue-100 text-xs text-center rounded-2xl font-medium uppercase px-2 py-4" href="pages/team">Моя команда</Link>
                <Link className="block w-full bg-blue-500 text-blue-100 text-xs text-center rounded-2xl font-medium uppercase px-2 py-4" href="pages/profile">Мой профиль</Link>
            </div>
        </div>
    )
}

export default Home