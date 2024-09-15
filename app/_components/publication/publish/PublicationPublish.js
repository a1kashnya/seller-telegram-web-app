import Title from "@/_components/_ui/Title"
import TablePublish from "@/_components/_ui/table/TablePublish"

const PublicationPublish = () => {
    const items = [ // Заглушка
        { id: 1, publish_name: 'Акция Одежды', status: 'Модерация', product_name: 'Куртка', market_name: 'WB', cashback: '20', team_name: '4rth', request: 'Синие куртки бесплатно'  },
        { id: 2, publish_name: 'Акция Обувь', status: 'Разрешена', product_name: 'Куртка', market_name: 'WB', cashback: '20', team_name: '4rth', request: 'Синие куртки бесплатно' },
        { id: 3, publish_name: 'Акция Члены', status: 'Отклонена', product_name: 'Куртка', market_name: 'WB', cashback: '20', team_name: '4rth', request: 'Синие куртки бесплатно' }
    ]

    return (
        <div>
            <Title name="Опубликовать объявление/акцию" btn />
            <div className="grid gap-3 border-t border-b py-5 border-slate-800">
                <TablePublish data={items}/>
            </div>
        </div>
    )
}

export default PublicationPublish