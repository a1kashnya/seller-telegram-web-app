import Link from "next/link"
import Icon from "@/_components/_ui/Icon"

const Title = ({ name, url  }) => {
    return (
        <div className="flex justify-between items-center mb-5">
            <h1 className={`${url ? 'text-left' : 'text-center w-full'} uppercase text-white font-medium text-sm text-left py-1 text-ellipsis whitespace-nowrap overflow-hidden`}>{name}</h1>
            {url && (
                    <Link href={url} className="flex flex-row gap-1 items-center justify-center bg-yellow-400 rounded-lg px-3 py-1 text-slate-800 font-medium text-xs">
                        <Icon name="ArrowLeftCircleIcon" size={6} />
                    </Link>
                )
            }
        </div>
    )
}

export default Title