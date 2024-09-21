const getPublicationById = async (id) => {
    const res = await fetch(`http://localhost:3000/api/publications/${id}`, {
        cache: 'no-store',
    })

    if (!res.ok) {
        throw new Error('Ошибка получения публикаций');
    }

    return res.json();
}

export {getPublicationById}