import Block from "@/_components/_ui/Info"
import Button from "@/_components/_ui/Button"

const TablePublish = ({ id, publish_name, status, product_name, market_name, cashback, team_name, request, buttons }) => {
    return (
        <Block>
            <div className="text-white overflow-hidden">
                <div className="flex justify-between mb-5">
                    <div className="text-xl font-medium">{publish_name}</div>
                    <div className={`${status == 'Разрешена' ? 'bg-green-600' : 'bg-red-500'} bg-green-500 px-3 text-xs py-1 rounded-xl`}>{status}</div>
                </div>
            </div>
            <ul className="text-xs text-slate-300">
                <li className="bg-[#ffffff0d] px-2 py-1 rounded-md"><b>№ Акции:</b> {id}</li>
                <li className="px-2 py-1"><b>Имя акции:</b> {publish_name}</li>
                <li className="bg-[#ffffff0d] px-2 py-1 rounded-md"><b>Имя продукта:</b> {product_name}</li>
                <li className="px-2 py-1"><b>Маркетплейс:</b> {market_name}</li>
                <li className="bg-[#ffffff0d] px-2 py-1 rounded-md"><b>Кешбэк:</b> {cashback}%</li>
                <li className="px-2 py-1"><b>Команда:</b> {team_name}</li>
                <li className="bg-[#ffffff0d] px-2 py-1 rounded-md"><b>Запрос:</b> {request}</li>
            </ul>
            <div className="flex flex-col justify-between gap-3 mt-5">
                {buttons !== false && (
                    <>
                        {status == 'Разрешена' ? (
                            <Button type="link" name="Свободные даты" icon="CalendarDaysIcon" url={`/pages/publication/publish/selection/${id}`} />
                        ) : null}

                        <Button type="link" name="Редактировать" icon="PencilSquareIcon" bgColor="bg-yellow-500" textColor="text-yellow-950" url={`/pages/publication/publish/edit/${id}`} />
                    </>
                )}
            </div>
        </Block>
    )
}

export default TablePublish