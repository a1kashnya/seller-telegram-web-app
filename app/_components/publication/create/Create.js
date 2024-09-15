"use client"

import { useState } from 'react';

import CreateTeam from '@/_components/publication/create/CreateTeam';
import CreateForm from '@/_components/publication/create/CreateForm';
import CreateSuccess from '@/_components/publication/create/CreateSuccess';

const Create = () => {
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
                <CreateTeam handle={handleTeam}/>
            )}

            {step === 'form' && (
                <CreateForm handle={handleForm}/>
            )}

            {step === 'finish' && (
                <CreateSuccess />
            )}
        </div>
    )
}

export default Create