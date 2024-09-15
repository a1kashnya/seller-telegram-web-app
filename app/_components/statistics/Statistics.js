import Title from "@/_components/_ui/Title"
import TableStatistics from "@/_components/_ui/table/TableStatistics"

const Statistics = () => {
    const items = [ // Заглушка
        {
            id: 1,
            request_name: 'Оплата 2000 рублей',
            action_name: 'Скидки на куртки',
            public_id: '1',
            request_date: '01.01.1999',
            amount: '2000',
            status: 'Успешно',
        },
        {
            id: 2,
            request_name: 'Оплата 3000 рублей',
            action_name: 'Скидки на обувь',
            public_id: '1',
            request_date: '01.01.1999',
            amount: '3000',
            status: 'Успешно',
        }
    ]

    return (
        <>
            <Title name="Статистика оплат" btn />
            <div className="grid gap-3 border-t border-b py-5 border-slate-800">
                <TableStatistics data={items} />
            </div>
        </>
    )
}

export default Statistics