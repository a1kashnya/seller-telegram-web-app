import Title from "@/_components/_ui/Title"

const Section = ({ title, url, children }) => {
    return (
        <div>
            { title && <Title name={title} url={url} />}
            <div className="grid gap-4 border-t border-b py-5 border-slate-800">
                {children}
            </div>
        </div>
    )
}

export default Section