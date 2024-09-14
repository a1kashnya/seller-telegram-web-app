import Link from "next/link";

const Title = ( {name, btn} ) => {
    return (
        <div className="flex justify-between items-center mb-5 px-3">
            <h1 className={`${btn ? 'text-left' : 'text-center w-full'} uppercase text-white font-medium text-sm text-left py-1`}>{name}</h1>
            { btn ? (<Link href="/" className="bg-yellow-500 rounded-lg px-3 py-1 text-yellow-900 font-medium text-xs">Назад</Link>): null}
        </div>
    )
}

export default Title