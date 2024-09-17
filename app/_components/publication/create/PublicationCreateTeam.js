import Info from "@/_components/_ui/Info"
import Button from "@/_components/_ui/Button"
import Section from "@/_components/_ui/Section"

const CreateTeam = ({ handle }) => {
    const teams = [ // Заглушка комманд
        {
            id: 1,
            name: 'Команда 1'
        },
        {
            id: 2,
            name: 'Команда 2'
        }
    ]

    return (
        <Section title="Создание акции/объявления" backButton={true}>
            <Info>Выберет команду, которой будет принадлежать объявление.</Info>
            {teams.map(({ id, name }) => (
                <Button key={id} type="button" name={name} icon="ArrowRightCircleIcon" handle={handle} />
            ))}
        </Section>
    )
}

export default CreateTeam