import Link from "next/link"
import Icon from "@/_components/_ui/Icon"

const Button = ({ type, name, icon, url, bgColor, textColor, handle = null }) => {
    const baseClasses = `${bgColor} ${textColor} flex justify-center items-center gap-2 w-full bg-blue-500 text-blue-100 text-xs text-center rounded-2xl font-medium uppercase px-2 py-3`

    return (
        <>
            {type === 'link' ? (
                <Link className={baseClasses} href={url}>
                    <Icon name={icon} />{name}
                </Link>
            ) : (
                <button className={baseClasses} onClick={handle}>
                    <Icon name={icon} />{name}
                </button>
            )}
        </>
    )
}

export default Button