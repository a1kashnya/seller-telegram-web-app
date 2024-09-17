import Button from "@/_components/_ui/Button"
import Section from "@/_components/_ui/Section"
import Input from "@/_components/_ui/Input"

const CreateForm = ({ handle }) => {
    return (
        <Section title="Заполните форму" backButton={true}>
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
            <Button type="button" name="Отправить" icon="CheckIcon" handle={handle} />
        </Section>
    )
}

export default CreateForm