import { useState } from 'react'

import Button from "@/_components/_ui/Button"
import Section from '@/_components/_ui/Section'
import '@/_components/_ui/calendar/Calendar.css'

const AdvertentieTime = ({ handleSlots, dataTimes, date, setTime, formatDate }) => {
    const [active, setActive] = useState('')

    const handleDateChange = (id, value) => {
        setTime(value)
        setActive(id)
    }

    return (
        <Section title="Выберите время" url="/pages/advertentie/publish">
            <span className="border-l-[6px] border-blue-500 bg-[#3b82f630] p-3 pl-4 rounded-lg text-white mb-2">Вот список свободных слотов на дату <b>{formatDate(date)}</b>, которые доступны для брони.</span>
            <div className="grid gap-3 grid-cols-5">
                {
                    dataTimes.map((item, id) => (
                        <button key={id} onClick={() => handleDateChange(id, item)} className={`border border-blue-500 px-2 py-1 rounded-lg text-center ${active === id ? 'bg-blue-500 text-white' : 'text-blue-500 border-blue-500'}`}>
                            {item}
                        </button>
                    ))
                }
            </div>
            <Button type="button" name="Выбрать" icon="CheckIcon" handle={handleSlots} />
        </Section>
    )
}

export default AdvertentieTime