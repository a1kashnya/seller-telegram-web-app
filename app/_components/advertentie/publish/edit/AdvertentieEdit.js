"use client"

import { useState } from 'react'

import Section from "@/_components/_ui/Section"
import Form from "@/_components/_ui/Form"
import fields from "@/_data/forms/PublishEditForm"

const AdvertentieEdit = ({ id }) => {
    const [formData, setFormData] = useState({})

    const handleForm = () => {
        // Функция отправки данных
        setStep('finish')
    }

    return (
        <Section title="Редактирование" url="/pages/advertentie/publish">
            <Form 
                fields={fields} 
                handle={handleForm} 
                formData={formData} 
                setFormData={setFormData} 
                buttonName="Сохранить" 
                buttonIcon="CheckIcon" 
                redirectTo="/" 
            />
        </Section>
    )
}

export default AdvertentieEdit