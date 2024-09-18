import Block from "@/_components/_ui/Info"
import Button from "@/_components/_ui/Button"

const TableManagementItem = ({ id, publish_id, status, product_name, cashback  }) => {
    return (
        <Block>
            <div className="text-white overflow-hidden">
                <div className="flex justify-between mb-5">
                    <div className="text-xl font-medium"># {publish_id}</div>
                    <div className={`${status == 'Разрешена' ? 'bg-green-600' : 'bg-red-500'} bg-green-500 px-3 text-xs py-1 rounded-xl`}>{status}</div>
                </div>
            </div>
            <ul className="text-xs text-slate-300">
                <li className="bg-[#ffffff0d] px-2 py-1 rounded-md"><b>№ Акции:</b> {id}</li>
                <li className="px-2 py-1"><b>Имя продукта:</b> {product_name}</li>
                <li className="bg-[#ffffff0d] px-2 py-1 rounded-md"><b>Кешбэк:</b> {cashback}%</li>
            </ul>
            <div className="flex flex-col justify-between gap-3 mt-5">  
                <Button type="link" name="Открыть" icon="PencilSquareIcon" url={`/pages/publication/management/${id}`} />
            </div>
        </Block>
    )
}

export default TableManagementItem