import Link from "next/link"

import Section from "@/_components/_ui/Section"
import Button from "@/_components/_ui/Button"
import Input from "@/_components/_ui/Input"

const PublicationEdit = ({ id }) => {
    return (
        <Section title="Редактирование" backButton>
            <Input placeholder="Имя акции" />
            <Input placeholder="Маркетплейс" />
            <Input placeholder="Категория" />
            <Input placeholder="Имя товара" />
            <Input placeholder="Обычная цена товара" />
            <Input placeholder="Баллов в системе маркетплейса за отзыв" />
            <Input placeholder="% кешбека, который будет в акции" />
            <Input placeholder="Поисковой запрос" />
            <Input placeholder="Как должна получится поисковая выдача" />
            <Input placeholder="Фото публикации" />
            <Button type="link" name="Сохранить" icon="CheckIcon" url="/pages/publication/publish"/>
        </Section>
    )
}

export default PublicationEdit