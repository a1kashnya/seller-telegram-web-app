import * as Icons from '@heroicons/react/24/solid';

const Icon = ({ name, size = 6 }) => {
    const Component = Icons[name]

    if (!Component) {
        return
    }

    return <Component className={`size-6`} />
}

export default Icon