const Input = ({type, name, id, value, onChange, required, placeholder }) => {
    return (
        <input type={type} name={name} id={id} value={value} onChange={onChange} required={required} className="bg-[#3b82f630] border border-[#3b82f6ad] rounded-2xl py-2 text-center text-slate-300 w-full" placeholder={placeholder} />
    )
}

export default Input