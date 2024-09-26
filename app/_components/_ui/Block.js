const Block = ({ children, style }) => {
    return (
        <div className={`flex flex-col gap-4 ${style === 'primary' ? 'bg-blue-500' : 'border-l-[5px] border-blue-500 bg-[#3b82f630]'} p-4 rounded-xl text-white`}>
            { children }
        </div>
    )
}

export default Block