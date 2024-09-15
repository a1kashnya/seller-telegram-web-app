import TableTeamItem from "@/_components/_ui/table/TableTeamItem"

const TableTeam = ({ data }) => {
    return (
        <div className="flex flex-col gap-4">
            {data.map(({ id, name, author, balance }) => (
                <TableTeamItem key={id} id={id} name={name} author={author} balance={balance} />
            ))}
        </div>
    )
}

export default TableTeam