const InviteModal = ({ showModal, onClose }) => {
    if (!showModal) {
        return null
    }
    return (
        <div className="flex justify-center items-center fixed w-full h-full bg-[#000000de] top-0 left-0">
            <div className="flex flex-col w-[400px] mx-5 text-center text-slate-400 bg-slate-800 p-4 rounded-2xl">
                <h2 className="text-xl uppercase font-bold mb-3">Код сгенерировался!</h2>
                <span className="mb-3">Ваш код для приглашения - <b>1234567890</b></span>
                <span>Напоминаем. Приглашение доступно всего 1 час. И только для одного человека. Другой человек по этому же коду не сможет подключиться.</span>
                <button className="block w-full bg-blue-500 text-blue-100 text-xs text-center rounded-2xl font-medium uppercase px-2 py-4 mt-4" onClick={onClose}>Закрыть</button>
            </div>
        </div>
    )
}

export default InviteModal