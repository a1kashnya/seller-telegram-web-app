import Button from "@/_components/_ui/Button"
import Section from '@/_components/_ui/Section'
import '@/_components/_ui/calendar/Calendar.css'

const PublicationPlaces = ({ handleFinish, places, setPlaces }) => {
    const handleSliderChange = (e) => {
        setPlaces(e.target.value)
    }

    return (
        <Section title="Колличество мест" backButton>
            <span className='text-white text-center text-lg font-medium'>{places} Мест</span>
            <input type="range" max="15" min="1" value={places}  onChange={handleSliderChange}/>
            <Button type="button" name="Подтвердить" icon="CheckIcon" handle={handleFinish} />
        </Section>
    )
}

export default PublicationPlaces