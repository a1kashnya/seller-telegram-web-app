import * as Icons from '@heroicons/react/24/solid';

const Icon = ({ name, size, color }) => {
    const Component = Icons[name]

    if (!Component) {
        return
    }

    return <Component className={`${size ? `h-${size} w-${size}` : 'size-6'} ${color}`} />
}

export default Icon