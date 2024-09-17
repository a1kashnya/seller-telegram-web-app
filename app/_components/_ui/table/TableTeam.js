import TableTeamItem from "@/_components/_ui/table/TableTeamItem"

const TableTeam = ({ data }) => {
    return (
        data.map(({ id, name, author, balance }) => (
            <TableTeamItem key={id} id={id} name={name} author={author} balance={balance} />
        ))
    )
}

export default TableTeam