import Title from "@/_components/_ui/Title"
import TableBalanceHistory from "@/_components/_ui/table/TableBalanceHistory"

const BalanceHistory = () => {
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
            <Title name="История пополнений" btn />
            <div className="grid gap-3 border-t border-b py-5 border-slate-800">
                <TableBalanceHistory data={history} />
            </div>
        </div>
    )
}

export default BalanceHistory