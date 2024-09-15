"use client"

import { useState } from 'react';

import Title from "@/_components/_ui/Title"
import InviteModal from "@/_components/_modals/InviteModal"

const Invite = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const toggleModal = () => {
        setIsModalOpen(!isModalOpen)
    }
    return (
        <>
            <Title name="Пригласи друга" btn />
            <div className="grid gap-3 border-t border-b py-5 border-slate-800 text-slate-200">
                <div className="flex flex-col border-l-[6px] border-blue-500 bg-[#3b82f630] p-3 pl-4 rounded-lg text-white mb-2">
                    <span className='mb-2 font-medium'>Чтобы открыть доступ к приглашениям - у вас должна быть хотя бы 1 успешно завершенная публикация.</span>
                    <span className='mb-2'>Максимум приглашений в день (5).</span>
                    <span className='mb-5'>1 сгенерированный код = одному приглашению. По нему сможет подключиться только ОДИН пользователь</span>
                    <button onClick={toggleModal} className="block w-full bg-blue-500 text-blue-100 text-xs text-center rounded-2xl font-medium uppercase px-2 py-4">Сгенерировать код</button>
                </div>
            </div>
            <InviteModal showModal={isModalOpen} onClose={toggleModal} />
        </>
    )
}

export default Invite