"use client"

import { useState } from 'react'
import Calendar from 'react-calendar'

import Title from "@/_components/_ui/Title"
import '@/_components/_ui/calendar/Calendar.css'

const PublicationDate = ({date, setDate, handleTime}) => {
    const [selectedDates, setSelectedDates] = useState([new Date(2024, 8, 12), new Date(2024, 8, 15)]);

    const isDateDisabled = (date) => {
        return !selectedDates.some(
            (selectedDate) =>
                selectedDate.getFullYear() === date.getFullYear() &&
                selectedDate.getMonth() === date.getMonth() &&
                selectedDate.getDate() === date.getDate()
        )
    }

    const handleDateChange = (newDate) => {
        if (!isDateDisabled(newDate)) {
            setDate(newDate)
        }
    }
    return (
        <div>
            <Title name="Выберите дату" btn />
            <div className="grid gap-3 border-t border-b py-5 border-slate-800">
                <Calendar
                    onChange={handleDateChange}
                    value={date}
                    tileClassName={({ date, view }) => {
                        if (view === 'month' && selectedDates.some(
                            (selectedDate) =>
                                selectedDate.getFullYear() === date.getFullYear() &&
                                selectedDate.getMonth() === date.getMonth() &&
                                selectedDate.getDate() === date.getDate()
                        )) {
                            return 'highlight'
                        }
                        return null
                    }}
                    tileDisabled={({ date }) => isDateDisabled(date)}
                    locale="ru"
                />
                <button onClick={handleTime} className="block w-full bg-blue-500 text-blue-100 text-xs text-center rounded-2xl font-medium uppercase px-2 py-4 mt-4">Выбрать</button>
            </div>
        </div>
    )
}

export default PublicationDate