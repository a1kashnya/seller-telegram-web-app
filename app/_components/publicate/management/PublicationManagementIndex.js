"use client"
import { useState, useEffect } from 'react';

import Section from "@/_components/_ui/Section"
import Block from "@/_components/_ui/Block"
import Filter from "@/_components/_ui/Filter"
import Table from "@/_components/_ui/Table"

import columns from "@/_data/tables/publicate"
import { getPublicateById } from "@/_services/database"

const PublicationManagementIndex = ({props}) => {
    const action = { id: 1, publish_id: '152', status: 'Запланирована', product_name: 'Куртка', cashback: '20' }

    const [data, setData] = useState([])
    const [filteredData, setFilteredData] = useState([])
    const [filters, setFilters] = useState({})

    useEffect(() => {
        const fetchData = async () => {
            const fetchedData = await getPublicateById('1')
            console.log(fetchedData)
            console.log(columns)
            setData(fetchedData)
            setFilteredData(fetchedData)
        }

        fetchData()
    }, [])

    const applyFilters = (filters) => {
        setFilters(filters)
        let filtered = data

        Object.keys(filters).forEach((key) => {
            if (filters[key]) {
                filtered = filtered.filter((item) =>
                    item[key]?.toString().toLowerCase().includes(filters[key].toLowerCase())
                )
            }
        })

        setFilteredData(filtered)
    }

    return (
        <Section title={action.product_name} url="/">
            <Block>
                <div className="text-white overflow-hidden">
                    <div className="flex justify-between mb-5">
                        <div className="text-xl font-medium"># {action.publish_id}</div>
                        <div className={`${action.status == 'Разрешена' ? 'bg-green-600' : 'bg-red-500'} bg-green-500 px-3 text-xs py-1 rounded-xl`}>{action.status}</div>
                    </div>
                </div>
                <ul className="text-xs text-slate-300">
                    <li className="bg-[#ffffff0d] px-2 py-1 rounded-md"><b>№ Акции:</b> {action.id}</li>
                    <li className="px-2 py-1"><b>Имя продукта:</b> {action.product_name}</li>
                    <li className="bg-[#ffffff0d] px-2 py-1 rounded-md"><b>Кешбэк:</b> {action.cashback}%</li>
                </ul>
            </Block>
            <Filter columns={columns} data={data} onFilterChange={applyFilters}/>
            <Table columns={columns} data={filteredData} type="management-index"/>
        </Section>
    )
}

export default PublicationManagementIndex