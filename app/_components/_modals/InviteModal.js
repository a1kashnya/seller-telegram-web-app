import Button from "@/_components/_ui/Button"

const InviteModal = ({ showModal, onClose }) => {
    if (!showModal) {
        return null
    }
    return (
        <div className="flex justify-center items-center fixed w-full h-full bg-[#000000de] top-0 left-0">
            <div className="flex flex-col gap-4 w-[400px] mx-5 text-center text-slate-400 bg-slate-800 p-4 rounded-2xl">
                <h2 className="text-xl uppercase font-bold">Код сгенерировался!</h2>
                <span className="text-xl">Ваш код приглашения - <b>1234567890</b></span>
                <span>Напоминаем. Приглашение доступно всего 1 час. И только для одного человека. Другой человек по этому же коду не сможет подключиться.</span>
                <Button type="button" name="Закрыть" icon="XCircleIcon" handle={onClose} />
            </div>
        </div>
    )
}

export default InviteModal