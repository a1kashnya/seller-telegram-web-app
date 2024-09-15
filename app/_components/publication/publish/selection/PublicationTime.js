import { useState } from 'react'

import Title from "@/_components/_ui/Title"
import '@/_components/_ui/calendar/Calendar.css'

const PublicationTime = ({ handleSlots, dataTimes, date, setTime, formatDate }) => {
    const [active, setActive] = useState('')

    const handleDateChange = (id, value) => {
        setTime(value)
        setActive(id)
    }

    return (
        <div>
            <Title name="Выберите время" btn />
            <div className="grid gap-3 border-t border-b py-5 border-slate-800">
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
                <button onClick={handleSlots} className="block w-full bg-blue-500 text-blue-100 text-xs text-center rounded-2xl font-medium uppercase px-2 py-4 mt-4">Выбрать</button>
            </div>
        </div>
    )
}

export default PublicationTime