import Link from "next/link"

const CreateSuccess = () => {
    return (
        <div>
            <div className="grid gap-3 border-t border-b py-5 border-slate-800">
                <span className="border-l-[6px] border-blue-500 bg-[#3b82f630] p-3 pl-4 rounded-lg text-white mb-2">
                    <h2 className="text-white text-center text-2xl mb-2">Ваша акция <b>имя акции</b> создана успешно!</h2>
                    <div className="text-white text-center mb-5">Теперь нужно дождаться модерации. Все публикации мы тщательно проверяем, но обычно это занимает не больше часа. Ожидайте.</div>
                    <Link className="block w-full bg-blue-500 text-blue-100 text-xs text-center rounded-2xl font-medium uppercase px-2 py-4" href="/">Вернуться</Link>
                </span>
            </div>
        </div>
    )
}

export default CreateSuccess