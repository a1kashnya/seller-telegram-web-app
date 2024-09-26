"use client"

import { useState } from 'react'

import AdvertentieDate from '@/_components/advertentie/publish/selection/AdvertentieDate'
import AdvertentieTime from '@/_components/advertentie/publish/selection/AdvertentieTime'
import AdvertentiePlaces from '@/_components/advertentie/publish/selection/AdvertentiePlaces'
import AdvertentieSuccess from '@/_components/advertentie/publish/selection/AdvertentieSuccess'

const AdvertentieSelection = ({ id }) => {
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
                <AdvertentieDate handleTime={handleTime} date={date} setDate={setDate} />
            )}

            {step === 'time' && (
                <AdvertentieTime handleSlots={handleSlots} date={date} dataTimes={dataTimes} setTime={setTime} formatDate={formatDate}/>
            )}

            {step === 'slots' && (
                <AdvertentiePlaces handleFinish={handleFinish} setPlaces={setPlaces} places={places} />
            )}

            {step === 'finish' && (
                <AdvertentieSuccess date={date} time={time} places={places} formatDate={formatDate}/>
            )}
        </div>
    )
}

export default AdvertentieSelection