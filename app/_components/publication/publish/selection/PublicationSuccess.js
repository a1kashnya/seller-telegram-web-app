import Title from "@/_components/_ui/Title"
import '@/_components/_ui/calendar/Calendar.css'
import Link from "next/link"

const PublicationSuccess = ({ date, places, time, formatDate }) => {
    return (
        <div>
            <Title name="Оплата" btn />
            <div className="grid gap-3 border-t border-b py-5 border-slate-800">
                <span className="flex flex-col border-l-[6px] border-blue-500 bg-[#3b82f630] p-3 pl-4 rounded-lg text-white mb-2">
                    <span className="mb-2">Отлично! Ваша акция на товар /имя товара/ в дату {formatDate(date)} время {time} почти готова. Осталось её оплатить.</span>
                    <span><b>Количество мест в акции:</b> {places}</span>
                    <span className="mb-2"><b>Итоговая стоимость:</b> 1000</span>
                    <span>В неё входит:</span>
                    <span><b>Публикация</b> - 1000</span>
                    <span><b>Места</b> - 1000</span>
                    <Link className="block w-full bg-blue-500 text-blue-100 text-xs text-center rounded-2xl font-medium uppercase px-2 py-4 mt-4">Оплатить</Link>
                </span>
            </div>
        </div>
    )
}

export default PublicationSuccess