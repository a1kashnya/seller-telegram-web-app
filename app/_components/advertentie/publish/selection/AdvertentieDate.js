"use client"

import { useState } from 'react'
import Calendar from 'react-calendar'

import Button from "@/_components/_ui/Button"
import Section from '@/_components/_ui/Section'
import '@/_components/_ui/calendar/Calendar.css'

const AdvertentieDate = ({ date, setDate, handleTime }) => {
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
        <Section title="Выберите дату" url="/pages/advertentie/publish">
            <Calendar onChange={handleDateChange} value={date} tileClassName={({ date, view }) => {
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
                tileDisabled={({ date }) => isDateDisabled(date)} locale="ru"
            />
            <Button type="button" name="Выбрать" icon="CheckIcon" handle={handleTime} />
        </Section>
    )
}

export default AdvertentieDate