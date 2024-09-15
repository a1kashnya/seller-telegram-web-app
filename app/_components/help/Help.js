import Title from "@/_components/_ui/Title"

const Help = () => {
  return (
    <div>
      <Title name="Нужда помощь?" btn />
      <div className="grid gap-3 border-t border-b py-5 border-slate-800">
        <div className="flex flex-col border-l-[6px] border-blue-500 bg-[#3b82f630] p-3 pl-4 rounded-lg text-white mb-2">
          <span className="text-slate-300 mb-2 font-medium">Если у вас есть вопросы - можете обратиться в нашу тех. поддержку.</span>
          <span className="text-slate-300"><b>Контакты:</b> @support_lavka_dobbi</span>
          <span className="text-slate-300"><b>График работы:</b> Понедельник - Пятница 9:00 - 21:00</span>
        </div>
      </div>
    </div>
  )
}

export default Help