import UsersItem from "@/_components/_ui/users/UsersItem"

const Users = ({ data }) => {
    return (
        <div className="flex flex-col gap-4">
            {data.map(({ id, name, role }) => (
                <UsersItem key={id} id={id} name={name} role={role} />
            ))}
        </div>
    )
}

export default Users