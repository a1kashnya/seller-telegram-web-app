"use client";
import { useState, useEffect } from 'react'

import Section from "@/_components/_ui/Section"
import Statistics from "@/_components/profile/Statistics"
import Icon from "@/_components/_ui/Icon"
import { getUserById } from "@/_services/database"

const Profile = () => {
    const [{name, nickname, balance, statistics, teams}, setUser] = useState([])

    useEffect(() => {
        const fetchData = async () => {
            const fetchedData = await getUserById('123')
            console.log(fetchedData)
            setUser(fetchedData)
        }

        fetchData()
    }, [])

    return (
        <Section title="Мой профиль" url="/">
            <div className="flex justify-between items-center text-white">
                <div className="flex justify-start items-center">
                    <div className="w-12 h-12 bg-slate-800 rounded-xl mr-3"></div>
                    <div className="flex flex-col">
                        <span className="font-medium">{name}</span>
                        <span className="text-xs text-slate-500">{nickname}</span>
                    </div>
                </div>
                <div className="flex flex-col px-6 py-2 text-md border-l border-slate-800">
                    <span className="text-xs text-right">Баланс:</span>
                    <span className="text-2xl">{balance}₽</span>
                </div>
            </div>

            { statistics && (
                <div className="mt-8">
                    <h2 className="flex flex-row items-center gap-2 text-slate-300 uppercase font-medium text-sm mb-3">
                        <Icon name="PresentationChartBarIcon" size={6} />Статистика:
                    </h2>
                    <div className="rounded-xl">
                        <Statistics complited={statistics.complited} clients={statistics.clients} cost={statistics.cost} />
                    </div>
                </div>
            )}

            { teams && (
                <div className="mt-4">
                    <h2 className="flex flex-row items-center gap-2 text-slate-300 uppercase font-medium text-sm mb-3">
                        <Icon name="UserGroupIcon" size={6} />Мои команды:
                    </h2>
                    <div className="flex flex-col gap-3 rounded-xl">
                        {teams.map(({ id, name }) => (
                            <div key={id} className="flex flex-row items-center gap-3 text-white border-b-[5px] border-blue-500 bg-[#3b82f630] p-3 rounded-xl">
                                <span className="bg-blue-500 px-2 py-1 rounded-lg">#{id}</span>
                                <div className="font-medium">{name}</div>
                            </div>
                        ))}
                    </div>
                </div>
            )}
        </Section>
    )
}

export default Profile
