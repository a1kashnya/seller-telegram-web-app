import Info from "@/_components/_ui/Info"
import Section from "@/_components/_ui/Section"

const Help = () => {
  return (

    <Section title="Нужда помощь?" backButton>
      <Info>
        <span className="text-slate-300 mb-2 font-medium">Если у вас есть вопросы - можете обратиться в нашу тех. поддержку.</span>
        <span className="text-slate-300"><b>Контакты:</b> @support_lavka_dobbi</span>
        <span className="text-slate-300"><b>График работы:</b> Понедельник - Пятница 9:00 - 21:00</span>
      </Info>
    </Section>
  )
}

export default Help