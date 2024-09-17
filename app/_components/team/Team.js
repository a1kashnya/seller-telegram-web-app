import TableTeam from "@/_components/_ui/table/TableTeam"
import Section from "@/_components/_ui/Section"

const Team = () => {
    const items = [ // Заглушка
        {
            id: 1,
            name: '4rth_team',
            author: '4rth',
            balance: '1000'
        }
    ]

    return (
        <Section title="Моя команда" backButton>
            <div className="flex flex-col gap-4">
                <TableTeam data={items} />
            </div>
        </Section>
    )
}

export default Team