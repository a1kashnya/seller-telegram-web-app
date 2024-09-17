import Section from "@/_components/_ui/Section"
import Button from "@/_components/_ui/Button"
import Info from "@/_components/_ui/Info"

const PublicationSuccess = ({ date, places, time, formatDate }) => {
    return (
        <Section title="Оплата публикации" backButton>
            <Info>
                <span className="mb-2">Отлично! Ваша акция на товар /имя товара/ в дату {formatDate(date)} время {time} почти готова. Осталось её оплатить.</span>
                <span><b>Количество мест в акции:</b> {places}</span>
                <span className="mb-2"><b>Итоговая стоимость:</b> 1000</span>
                <span>В неё входит:</span>
                <span><b>Публикация</b> - 1000</span>
                <span><b>Места</b> - 1000</span>
            </Info>
            <Button type="link" name="Оплатить" icon="CreditCardIcon" url="/" />
        </Section>
    )
}

export default PublicationSuccess