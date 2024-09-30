"use client"
import { useState, useEffect } from 'react'

import Section from "@/_components/_ui/Section"
import Filter from "@/_components/_ui/Filter"
import Table from "@/_components/_ui/Table"

import columns from "@/_data/tables/requests"

import { getRequestsById } from "@/_services/database"

const Requests = () => {
    const [data, setData] = useState([]);
    const [filteredData, setFilteredData] = useState([]);
    const [filters, setFilters] = useState({});

    useEffect(() => {
        const fetchData = async () => {
            const fetchedData = await getRequestsById('123')
            setData(fetchedData)
            setFilteredData(fetchedData)
        };

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
        <Section title="Запросы на проверку" url="/">
            <Filter columns={columns} data={data} onFilterChange={applyFilters}/>
            <Table columns={columns} data={filteredData} type="requests"/>
        </Section>
    )
}

export default Requests