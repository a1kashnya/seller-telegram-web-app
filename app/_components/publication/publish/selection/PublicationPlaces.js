import { useState } from 'react'

import Title from "@/_components/_ui/Title"
import '@/_components/_ui/calendar/Calendar.css'

const PublicationPlaces = ({ handleFinish, places, setPlaces }) => {
    const handleSliderChange = (e) => {
        setPlaces(e.target.value)
    }

    return (
        <div>
            <Title name="Колличество мест" btn />
            <div className="grid gap-3 border-t border-b py-5 border-slate-800">
                <span className='text-white text-center text-lg font-medium'>{places} Мест</span>
                <input type="range" max="15" min="1"
                    value={places}
                    onChange={handleSliderChange}
                />
                <button onClick={handleFinish} className="block w-full bg-blue-500 text-blue-100 text-xs text-center rounded-2xl font-medium uppercase px-2 py-4 mt-4">Выбрать</button>
            </div>
        </div>
    )
}

export default PublicationPlaces