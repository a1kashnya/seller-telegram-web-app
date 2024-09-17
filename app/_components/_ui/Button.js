import Link from "next/link"
import Icon from "@/_components/_ui/Icon"

const Button = ({ type, name, icon, url, bgColor, textColor, handle = null }) => {
    return (
        <>
            {type === 'link' && (
                <Link className={`${bgColor} ${textColor} flex justify-center items-center gap-2 w-full bg-blue-500 text-blue-100 text-xs text-center rounded-2xl font-medium uppercase px-2 py-3`} href={url}>
                    <Icon name={icon} size={6}/>{name}
                </Link>
            )}

            {type === 'button' && (
                <button className="flex justify-center items-center gap-1 w-full bg-blue-500 text-blue-100 text-xs text-center rounded-2xl font-medium uppercase px-2 py-3" onClick={handle}>
                    <Icon name={icon} size={6}/>{name}
                </button>
            )}
        </>
    )
}

export default Button