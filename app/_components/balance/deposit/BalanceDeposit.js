import Title from "@/_components/_ui/Title"
import Link from "next/link"

const BalanceDeposit = () => {
    const history = [
        {
            id: 1,
            date: '01.01.1994',
            cost: '2000',
            method: 'Наличными'
        },
        {
            id: 2,
            date: '01.01.1994',
            cost: '2000',
            method: 'Наличными'
        }
    ]
    return (
        <div>
            <Title name="Пополнить баланс" btn />
            <div className="grid gap-3 border-t border-b py-5 border-slate-800">
                <div className="border-l-[6px] border-blue-500 bg-[#3b82f630] p-3 pl-4 rounded-lg text-white mb-2">Чтобы пополнить баланс нажмите на одну из кнопок ниже.</div>
                <Link className="block w-full bg-blue-500 text-blue-100 text-xs text-center rounded-2xl font-medium uppercase px-2 py-4" href="/pages/balance/deposit/200">Пополнить на 200₽</Link>
                <Link className="block w-full bg-blue-500 text-blue-100 text-xs text-center rounded-2xl font-medium uppercase px-2 py-4" href="/pages/balance/deposit/500">Пополнить на 500₽</Link>
                <Link className="block w-full bg-blue-500 text-blue-100 text-xs text-center rounded-2xl font-medium uppercase px-2 py-4" href="/pages/balance/deposit/other">Другая сумма</Link>
            </div>
        </div>
    )
}

export default BalanceDeposit