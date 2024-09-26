"use client"

import { useState } from 'react';

import Section from "@/_components/_ui/Section"
import InviteModal from "@/_components/_modals/InviteModal"
import Info from "@/_components/_ui/Info"
import Button from "@/_components/_ui/Button"

const Invite = () => {
    const [isModalOpen, setIsModalOpen] = useState(false)

    const toggleModal = () => {
        setIsModalOpen(!isModalOpen)
    }
    return (
        <Section title="Пригласить друга" url="/">
            <Info>
                <span className='mb-2 font-medium'>Чтобы открыть доступ к приглашениям - у вас должна быть хотя бы 1 успешно завершенная публикация.</span>
                <span className='mb-2'>Максимум приглашений в день (5).</span>
                <span className='mb-5'>1 сгенерированный код = одному приглашению. По нему сможет подключиться только ОДИН пользователь</span>
                <Button type="button" name="Сгенерировать код" icon="QrCodeIcon" handle={toggleModal} />
            </Info>
            <InviteModal showModal={isModalOpen} onClose={toggleModal} />
        </Section>
    )
}

export default Invite