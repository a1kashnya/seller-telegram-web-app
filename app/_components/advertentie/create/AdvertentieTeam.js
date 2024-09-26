"use client"

import { useEffect, useState } from 'react'
import Info from "@/_components/_ui/Info"
import Button from "@/_components/_ui/Button"
import Section from "@/_components/_ui/Section"
import { getTeamsById } from "@/_services/database"

const AdvertentieTeam = ({ handle }) => {
    const [teams, setTeams] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        const fetchTeams = async () => {
            try {
                const teamsData = await getTeamsById('123')
                console.log(teamsData.length)
                teamsData.length < 2 ? handle(teamsData[0].id) : setTeams(teamsData)
                setTeams(teamsData)
            } catch (error) {
                console.error("Ошибка при загрузке команд:", error)
            } finally {
                setLoading(false)
            }
        }

        fetchTeams()
    }, [])

    return (
        <Section title="Создание акции/объявления" url="/">
            <Info>Выберите команду, которой будет принадлежать объявление.</Info>
            {teams.map(({ id, name }) => (
                <Button key={id} type="button" name={name} icon="ArrowRightCircleIcon" handle={() => handle(id)} />
            ))}
        </Section>
    )
}

export default AdvertentieTeam