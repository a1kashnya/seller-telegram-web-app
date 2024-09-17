import Block from "@/_components/_ui/Block"
import Button from "@/_components/_ui/Button"
import Section from "@/_components/_ui/Section"

const CreateSuccess = () => {
    return (
        <Section>
            <Block>
                    <h2 className="text-white text-center text-xl mb-2">Ваша акция <b>имя акции</b> создана успешно!</h2>
                    <div className="text-white text-center mb-5">Теперь нужно дождаться модерации. Все публикации мы тщательно проверяем, но обычно это занимает не больше часа. Ожидайте.</div>
                    <Button type="link" name="Вернуться на главную" url="/" icon="ArrowLeftCircleIcon"/>
                </Block>
        </Section>
    )
}

export default CreateSuccess