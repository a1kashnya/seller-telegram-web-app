import Block from "@/_components/_ui/Block"
import Button from "@/_components/_ui/Button"
import Icon from "@/_components/_ui/Icon"

import TableStatus from '@/_data/TableStatus.json';

const Table = ({ columns, data, type }) => {
    const getStatusColor = (status) => {
        return TableStatus.colors[status] || 'bg-gray-400';
    }

    return (
        <div className="flex flex-col gap-5">
            {data.map((row) => (
                <Block key={row.id}>
                    {row.status && (
                        <div className="text-white overflow-hidden">
                            <div className="flex justify-between items-center">
                                {row.action_name ? (<div className="text-xl font-medium">{row.action_name}</div>) : null}
                                <div className={`${getStatusColor(row.status)} px-3 text-xs py-1 rounded-lg`}>
                                    {row.status}
                                </div>
                            </div>
                        </div>
                    )}

                    <ul className="text-xs text-slate-300">
                        {columns.map(({ Header, accessor }, idx) => (
                            <li key={idx} className={`flex items-center py-2 border-b border-[#2b59a570] ${idx == 0 ? 'border-t' : null}`}>
                                <Icon name="Squares2X2Icon"/>
                                <span className="pl-2"><b>{Header}:</b> {row[accessor] ?? 'Нет данных'}</span>
                            </li>
                        ))}
                    </ul>

                    {type === 'advertentie' && (
                        <div className="flex flex-col justify-between gap-3">
                            {row.status == 'Разрешена' && (
                                <Button type="link" name="Свободные даты" icon="CalendarDaysIcon" url={`/pages/advertentie/publish/selection/${row.id}`} />
                            )}
                            <Button type="link" name="Редактировать" icon="PencilSquareIcon" bgColor="bg-yellow-500" textColor="text-yellow-950" url={`/pages/advertentie/publish/edit/${row.id}`} />
                        </div>
                    )}

                    {type === 'management' && (
                        <div className="flex flex-col justify-between gap-3">
                            <Button type="link" name="Открыть" icon="PencilSquareIcon" url={`/pages/publicate/management/${row.id}`} />
                        </div>
                    )}

                    {type === 'management-index' && row.status === 'Активная' && (
                        <div className="flex flex-col justify-between gap-3">
                            <Button type="link" name="Завершить публикацию" icon="PencilSquareIcon" url={`/pages/publicate/management/${row.id}`} />
                        </div>
                    )}

                    {type === 'requests' && (
                        <div className="flex flex-col justify-between gap-3">
                            <Button type="link" name="Открыть" icon="PencilSquareIcon" url={`/pages/publicate/management/${row.id}`} />
                        </div>
                    )}
                </Block>
            ))}
        </div>
    )
}

export default Table