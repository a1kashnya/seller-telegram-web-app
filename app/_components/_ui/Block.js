const Block = ({ children }) => {
    return (
        <div className="flex flex-col gap-4 border-l-[5px] border-blue-500 bg-[#3b82f630] p-5 rounded-xl text-white">
            { children }
        </div>
    )
}

export default Block