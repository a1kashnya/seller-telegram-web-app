import Section from "@/_components/_ui/Section"
import TableBalanceHistory from "@/_components/_ui/table/TableBalanceHistory"

const BalanceHistory = () => {
    const history = [
        {
            id: 1,
            date: '01.01.1994',
            cost: '2000',
            method: 'Наличными'
        },
        {
            id: 2,
            date: '01.01.1994',
            cost: '2000',
            method: 'Наличными'
        }
    ]
    return (
        <Section title="История оплат" backButton>
            <TableBalanceHistory data={history} />
        </Section>
    )
}

export default BalanceHistory