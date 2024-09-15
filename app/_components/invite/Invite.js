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
                <span>Чтобы открыть доступ к приглашениям - у вас должна быть хотя бы 1 успешно завершенная публикация</span>
                <span>Максимум приглашений в день 5</span>
                <span>1 сгенерированный код = одному приглашению. По нему сможет подключиться только ОДИН пользователь</span>
            </div>
            <button onClick={toggleModal} className="block w-full bg-blue-500 text-blue-100 text-xs text-center rounded-2xl font-medium uppercase px-2 py-4">Сгенерировать код</button>
            <InviteModal showModal={isModalOpen} onClose={toggleModal} />
        </>
    )
}

export default Invite