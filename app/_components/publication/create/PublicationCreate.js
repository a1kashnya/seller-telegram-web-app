"use client"

import { useState } from 'react';

import PublicationCreateTeam from '@/_components/publication/create/PublicationCreateTeam';
import PublicationCreateForm from '@/_components/publication/create/PublicationCreateForm';
import PublicationCreateSuccess from '@/_components/publication/create/PublicationCreateSuccess';

const PublicationCreate = () => {
    const [step, setStep] = useState('start');

    const handleTeam = () => {
        setStep('form');
    };

    const handleForm = () => {
        setStep('finish');
    };

    return (
        <div>
            {step === 'start' && (
                <PublicationCreateTeam handle={handleTeam}/>
            )}

            {step === 'form' && (
                <PublicationCreateForm handle={handleForm}/>
            )}

            {step === 'finish' && (
                <PublicationCreateSuccess />
            )}
        </div>
    )
}

export default PublicationCreate