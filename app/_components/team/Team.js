"use client"
import { useState, useEffect } from 'react'

import Block from "@/_components/_ui/Block"
import Section from "@/_components/_ui/Section"
import Button from '@/_components/_ui/Button'

import { getTeam } from "@/_services/database"

const Team = () => {
    const [{id, name, author, balance}, setData] = useState([])

    useEffect(() => {
        const fetchData = async () => {
            const fetchedData = await getTeam('123')
            console.log(fetchedData)
            setData(fetchedData)
        }

        fetchData()
    }, [])

    return (
        <Section title="Моя команда" url="/">
            <div className="flex flex-col gap-4">
                <Block>
                    <div className='flex justify-between items-center w-full'>
                        <span className='uppercase font-medium text-lg'>{name}</span>
                        <span className='bg-blue-500 text-blue-100 px-4 py-1 rounded-lg font-medium'>#{id}</span>
                    </div>
                    <ul className='text-xs text-slate-300'>
                        <li className='py-2 border-b border-[#2b59a570]'><b>Баланс:</b> {balance}₽</li>
                        <li className='py-2 border-b border-[#2b59a570]'><b>Создатель:</b> {author}</li>
                    </ul>
                    <Button type="link" name="Редактировать" url="/pages/team/users" icon="PencilSquareIcon"/>
                </Block>
            </div>
        </Section>
    )
}

export default Team