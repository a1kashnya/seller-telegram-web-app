import Title from "@/_components/_ui/Title"

const Help = () => {
  return (
    <div>
            <Title name="Нужда помощь?" btn/>
            <div className="grid gap-3 border-t border-b py-5 border-slate-800">
                <span className="text-slate-300">Если у вас есть вопросы - можете обратиться в нашу тех. поддержку.</span>
                <span className="text-slate-300">Контакты: @support_lavka_dobbi</span>
                <span className="text-slate-300">График работы: Понедельник - Пятница 9:00 - 21:00</span>
            </div>
        </div>
  )
}

export default Help