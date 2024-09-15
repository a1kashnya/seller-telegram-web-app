const UsersItem = ({ id, name, role}) => {
    return (
        <div className="flex justify-between bg-slate-800 rounded-xl p-3 text-white">
            <span className="font-medium">{name}</span>
            <span className="bg-blue-500 px-2 py-1 rounded-lg text-xs font-medium">{role}</span>
        </div>
    )
}

export default UsersItem