import Section from "@/_components/_ui/Section"
import Table from "@/_components/_ui/Table"

import { getPublicationById } from "@/_services/database"

const PublicationPublish = async () => {
    const data = await getPublicationById('123')

    const columns = [
        { Header: 'Публикация', accessor: 'publish_name' },
        { Header: 'Статус', accessor: 'status' },
        { Header: 'Продукт', accessor: 'product_name' },
        { Header: 'Маркет', accessor: 'market_name' },
        { Header: 'Кэшбэк %', accessor: 'cashback' },
        { Header: 'Команда', accessor: 'team_name' },
        { Header: 'Запрос', accessor: 'request' },
    ]

    return (
        <Section title="Опубликовать объявление/акцию" backButton>
            <Table columns={columns} data={data} />
        </Section>
    )
}

export default PublicationPublish