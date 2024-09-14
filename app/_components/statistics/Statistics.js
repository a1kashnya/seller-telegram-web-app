import Title from "@/_components/_ui/Title"
import TableStatistics from "@/_components/_ui/table/TableStatistics"

const Statistics = () => {
    const items = [ // Заглушка
        {
            id: 1,
            name: 'Акция Одежды',
            status: 'true',
            product_name: 'Куртка',
            market: 'WB',
            cashback: '20%',
            team: '4rth',
            request: 'Синие куртки бесплатно'
        },
        {
            id: 2,
            name: 'Акция Обувь',
            status: 'false',
            product_name: 'Куртка',
            market: 'WB',
            cashback: '20%',
            team: '4rth',
            request: 'Синие куртки бесплатно'
        },
        {
            id: 3,
            name: 'Акция Члены',
            status: 'pedding',
            product_name: 'Куртка',
            market: 'WB',
            cashback: '20%',
            team: '4rth',
            request: 'Синие куртки бесплатно'
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