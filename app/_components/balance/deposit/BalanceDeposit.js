import Section from "@/_components/_ui/Section"
import Info from "@/_components/_ui/Info"
import Button from "@/_components/_ui/Button"

const BalanceDeposit = () => {
    return (
        <Section title="Пополнить баланс" backButton>
            <Info>
                Чтобы пополнить баланс нажмите на одну из кнопок ниже.
            </Info>
            <Button type="link" name="Пополнить на 200₽" icon="ArrowRightCircleIcon" url="/pages/balance/deposit/200" />
            <Button type="link" name="Пополнить на 500₽" icon="ArrowRightCircleIcon" url="/pages/balance/deposit/500" />
            <Button type="link" name="Другая сумма" icon="ArrowRightCircleIcon" url="/pages/balance/deposit/other" />
        </Section>
    )
}

export default BalanceDeposit