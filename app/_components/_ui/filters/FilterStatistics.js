"use client"

import { useState } from 'react'

import Icon from '../Icon'
import Block from "@/_components/_ui/Block"
import Input from "@/_components/_ui/Input"
import Button from "@/_components/_ui/Button"

const FilterStatistics = () => {
    const [isExpanded, setIsExpanded] = useState(false)

    const toggleExpand = () => {
        setIsExpanded(!isExpanded);
    }


    return (
        <Block>
            <div className='flex flex-row justify-between'>
                <h2 className="text-lg font-semibold">Фильтры:</h2>
                <button onClick={toggleExpand}><Icon name={isExpanded ? 'ChevronUpIcon' : 'ChevronDownIcon'}/></button>
            </div>

            {isExpanded && (
                <div className="grid gap-4">
                    <Input placeholder="№ Запроса"/>
                    <Input placeholder="Имя Запроса"/>
                    <Input placeholder="Имя акции"/>
                    <Input placeholder="Дата акции"/>
                    <Input placeholder="Дата запроса"/>
                    <Input placeholder="Сумма"/>
                    <Input placeholder="Статус оплаты"/>
                    <Button type="button" name="Выбрать" icon="FunnelIcon" handle={toggleExpand}/>
                </div>
            )}
        </Block>
    )
}

export default FilterStatistics