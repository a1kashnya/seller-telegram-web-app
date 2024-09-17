import Title from "@/_components/_ui/Title"
import TablePublish from "@/_components/_ui/table/TablePublish"
import Section from "@/_components/_ui/Section"

const PublicationPublish = () => {
    const items = [ // Заглушка
        { id: 1, publish_name: 'Акция Одежды', status: 'Модерация', product_name: 'Куртка', market_name: 'WB', cashback: '20', team_name: '4rth', request: 'Синие куртки бесплатно' },
        { id: 2, publish_name: 'Акция Обувь', status: 'Разрешена', product_name: 'Куртка', market_name: 'WB', cashback: '20', team_name: '4rth', request: 'Синие куртки бесплатно' },
        { id: 3, publish_name: 'Акция Члены', status: 'Отклонена', product_name: 'Куртка', market_name: 'WB', cashback: '20', team_name: '4rth', request: 'Синие куртки бесплатно' }
    ]

    return (
        <Section title="Опубликовать объявление/акцию" backButton>
            <TablePublish data={items} />
        </Section>
    )
}

export default PublicationPublish