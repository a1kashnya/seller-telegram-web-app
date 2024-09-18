import Section from "@/_components/_ui/Section"
import Block from "@/_components/_ui/Block"
import FilterAction from "@/_components/_ui/filters/FilterAction"
import TablePublish from "@/_components/_ui/table/TablePublish"

const PublicationManagementIndex = () => {
    const action = { id: 1, publish_id: '152', status: 'Запланирована', product_name: 'Куртка', cashback: '20' }
    const items = [ // Заглушка
        { id: 1, publish_name: 'Публикация Одежды', status: 'Модерация', product_name: 'Куртка', market_name: 'WB', cashback: '20', team_name: '4rth', request: 'Синие куртки бесплатно' },
        { id: 2, publish_name: 'Публикация Обувь', status: 'Разрешена', product_name: 'Куртка', market_name: 'WB', cashback: '20', team_name: '4rth', request: 'Синие куртки бесплатно' },
        { id: 3, publish_name: 'Публикация Члены', status: 'Отклонена', product_name: 'Куртка', market_name: 'WB', cashback: '20', team_name: '4rth', request: 'Синие куртки бесплатно' }
    ]

    return (
        <Section title={action.product_name} backButton>
            <Block>
                <div className="text-white overflow-hidden">
                    <div className="flex justify-between mb-5">
                        <div className="text-xl font-medium"># {action.publish_id}</div>
                        <div className={`${action.status == 'Разрешена' ? 'bg-green-600' : 'bg-red-500'} bg-green-500 px-3 text-xs py-1 rounded-xl`}>{action.status}</div>
                    </div>
                </div>
                <ul className="text-xs text-slate-300">
                    <li className="bg-[#ffffff0d] px-2 py-1 rounded-md"><b>№ Акции:</b> {action.id}</li>
                    <li className="px-2 py-1"><b>Имя продукта:</b> {action.product_name}</li>
                    <li className="bg-[#ffffff0d] px-2 py-1 rounded-md"><b>Кешбэк:</b> {action.cashback}%</li>
                </ul>
            </Block>
            <FilterAction />
            <TablePublish data={items} buttons={false}/>
        </Section>
    )
}

export default PublicationManagementIndex