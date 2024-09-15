"use client"

import { useState } from 'react'

import PublicationDate from '@/_components/publication/publish/selection/PublicationDate'
import PublicationTime from '@/_components/publication/publish/selection/PublicationTime'
import PublicationPlaces from '@/_components/publication/publish/selection/PublicationPlaces'
import PublicationSuccess from '@/_components/publication/publish/selection/PublicationSuccess'

const PublicationSelection = ({ id }) => {
    const [step, setStep] = useState('start')
    const [date, setDate] = useState('')
    const [time, setTime] = useState('')
    const [places, setPlaces] = useState(1)

    const dataTimes = ['10:00', '11:00', '12:00', '13:00', '14:00', '15:00', '16:00']

    const handleTime = () => {
        setStep('time')
    }

    const handleSlots = () => {
        setStep('slots')
    }

    const handleFinish = () => {
        setStep('finish')
    }

    const formatDate = (date) => {
        const day = String(date.getDate()).padStart(2, '0')
        const month = String(date.getMonth() + 1).padStart(2, '0')
        const year = String(date.getFullYear()).slice(-2)

        return `${day}.${month}.${year}`
    }

    return (
        <div>
            {step === 'start' && (
                <PublicationDate handleTime={handleTime} date={date} setDate={setDate} />
            )}

            {step === 'time' && (
                <PublicationTime handleSlots={handleSlots} date={date} dataTimes={dataTimes} setTime={setTime} formatDate={formatDate}/>
            )}

            {step === 'slots' && (
                <PublicationPlaces handleFinish={handleFinish} setPlaces={setPlaces} places={places} />
            )}

            {step === 'finish' && (
                <PublicationSuccess date={date} time={time} places={places} formatDate={formatDate}/>
            )}
        </div>
    )
}

export default PublicationSelection