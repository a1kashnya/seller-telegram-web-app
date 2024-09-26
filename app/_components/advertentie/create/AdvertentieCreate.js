"use client"

import { useState } from 'react'
import AdvertentieTeam from '@/_components/advertentie/create/AdvertentieTeam'
import AdvertentieForm from '@/_components/advertentie/create/AdvertentieForm'
import AdvertentieSuccess from '@/_components/advertentie/create/AdvertentieSuccess'

const AdvertentieCreate = () => {
    const [step, setStep] = useState('start')
    const [formData, setFormData] = useState({})

    const handleTeam = (id) => {
        setFormData((prevData) => ({
            ...prevData,
            team: id,
        }));
        setStep('form')
    }

    const handleForm = () => {
        // Функция отправки данных
        setStep('finish')
    }

    return (
        <div>
            {step === 'start' && (
                <AdvertentieTeam handle={handleTeam} formData={formData} setFormData={setFormData} />
            )}

            {step === 'form' && (
                <AdvertentieForm handle={handleForm} formData={formData} setFormData={setFormData} />
            )}

            {step === 'finish' && (
                <AdvertentieSuccess />
            )}
        </div>
    )
}

export default AdvertentieCreate