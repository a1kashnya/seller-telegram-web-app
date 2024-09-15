import Title from "@/_components/_ui/Title"

const CreateForm = ({ handle }) => {
    return (
        <div>
            <Title name="Заполните форму" btn />
            <div className="grid gap-3 border-t border-b py-5 border-slate-800">
                <input className="bg-slate-900 border border-slate-800 rounded-2xl p-3 text-center text-slate-300" placeholder="Имя акции" />
                <input className="bg-slate-900 border border-slate-800 rounded-2xl p-3 text-center text-slate-300" placeholder="Маркетплейс" />
                <input className="bg-slate-900 border border-slate-800 rounded-2xl p-3 text-center text-slate-300" placeholder="Категория" />
                <input className="bg-slate-900 border border-slate-800 rounded-2xl p-3 text-center text-slate-300" placeholder="Имя товара" />
                <input className="bg-slate-900 border border-slate-800 rounded-2xl p-3 text-center text-slate-300" placeholder="Обычная цена товара" />
                <input className="bg-slate-900 border border-slate-800 rounded-2xl p-3 text-center text-slate-300" placeholder="Баллов в системе маркетплейса за отзыв" />
                <input className="bg-slate-900 border border-slate-800 rounded-2xl p-3 text-center text-slate-300" placeholder="% кешбека, который будет в акции" />
                <input className="bg-slate-900 border border-slate-800 rounded-2xl p-3 text-center text-slate-300" placeholder="Поисковой запрос" />
                <input className="bg-slate-900 border border-slate-800 rounded-2xl p-3 text-center text-slate-300" placeholder="Как должна получится поисковая выдача" />
                <input className="bg-slate-900 border border-slate-800 rounded-2xl p-3 text-center text-slate-300" placeholder="Фото публикации" />
                <button onClick={handle} className='className="block w-full bg-blue-500 text-blue-100 text-xs text-center rounded-2xl font-medium uppercase px-2 py-4'>Отправить</button>
            </div>
        </div>
    )
}

export default CreateForm