import Link from "next/link"

import Title from "@/_components/_ui/Title"

const TeamUsersAdd = () => {
    return (
        <>
            <Title name="Список пользователей" btn />
            <div className="grid gap-3 border-t border-b py-5 border-slate-800">
                <div className="flex flex-col border-l-[6px] border-blue-500 bg-[#3b82f630] p-3 pl-4 rounded-lg text-white mb-2">
                    <span className="mb-2">Укажите ник пользователя в ТГ и проставьте ему права.</span>
                    <span className="mb-2 font-medium">Что имеют права:</span>
                    <span className="font-medium">Администратор.</span>
                    <span className="mb-2">Может всё тоже, что и создатель. Не может пополнить баланс команды. НЕ МОЖЕТ ИСКЛЮЧИТЬ СОЗДАТЕЛЯ.</span>
                    <span className="font-medium">Менеджер.</span>
                    <span className="mb-2">Может создавать акции, публикации. Работать с такими типами запросов от клиентов, как Создание заказа, Забор товара с ПВЗ/курьера, Отзыв на проверку, Скриншот опубликованного отзыва. Менеджер видит только те акции, публикации, что создал он сам от имени вашей команды. Запросы клиентов он видит так же только по тем акциям, публикациям которые он создавал.</span>
                    <span className="font-medium">Если менеджер исключен из команды - доступ к информации он теряет.</span>
                </div>
                <input className="bg-slate-900 border border-slate-800 rounded-lg p-3 text-center text-slate-300" placeholder="Ник в Telegram"></input>
                <select className="rounded-lg p-3 bg-slate-800 text-slate-400 mb-5">
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