"use client"
import { useState, useEffect } from 'react';

import Section from "@/_components/_ui/Section"
import Table from "@/_components/_ui/Table"
import Filter from "@/_components/_ui/Filter"
import columns from "@/_data/tables/payments"

import { getPaymentsById } from "@/_services/database"

const Statistics = () => {
    const [data, setData] = useState([]);
    const [filteredData, setFilteredData] = useState([]);
    const [filters, setFilters] = useState({});

    useEffect(() => {
        const fetchData = async () => {
            const fetchedData = await getPaymentsById('123')
            setData(fetchedData)
            setFilteredData(fetchedData)
        };

        fetchData()
    }, [])

    const applyFilters = (filters) => {
        setFilters(filters)
        let filtered = data

        // Применение каждого фильтра
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
        <Section title="Статистика оплат" url="/">
            <Filter columns={columns} data={data} onFilterChange={applyFilters}/>
            <Table columns={columns} data={filteredData}/>
        </Section>
    )
}

export default Statistics