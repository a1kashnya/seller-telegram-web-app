import * as Icons from '@heroicons/react/24/solid';

const Icon = ({ name, size }) => {
    const Component = Icons[name]

    if (!Component) {
        return
    }

    return <Component className={`size-${size}`} />
}

export default Icon