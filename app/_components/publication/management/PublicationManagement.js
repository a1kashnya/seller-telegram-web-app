import TableManagement from "@/_components/_ui/table/TableManagement"
import Section from "@/_components/_ui/Section"

const PublicationManagement = () => {
    const items = [ // Заглушка
        { id: 1, publish_id: '152', status: 'Запланирована', product_name: 'Куртка', cashback: '20'},
        { id: 2, publish_id: '123', status: 'Активная', product_name: 'Перчатки', cashback: '20' },
        { id: 3, publish_id: '512', status: 'Завершена полностью', product_name: 'Штаны', cashback: '20' },
        { id: 4, publish_id: '126', status: 'Завершена частично', product_name: 'Шапки', cashback: '20' }
    ]

    return (
        <Section title="Управление публикациями" backButton>
            <TableManagement data={items} />
        </Section>
    )
}

export default PublicationManagement