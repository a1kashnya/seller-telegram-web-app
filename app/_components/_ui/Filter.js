"use client"

import { useState } from 'react'
import { motion } from "framer-motion";
import Select from 'react-select'

import Block from '@/_components/_ui/Block'
import Icon from '@/_components/_ui/Icon'

const Filter = ({ columns, data, onFilterChange }) => {
    const [filters, setFilters] = useState({})
    const [isExpanded, setIsExpanded] = useState(false)

    // Получаем уникальные значения для каждого столбца
    const getUniqueValues = (accessor) => {
        const values = data.map((item) => item[accessor]);
        return [...new Set(values)]; // Возвращаем только уникальные значения
    };

    // Обрабатываем изменения фильтра
    const handleChange = (accessor, value) => {
        const newFilters = {
            ...filters,
            [accessor]: value
        };
        setFilters(newFilters);
        onFilterChange(newFilters); // Callback для передачи фильтров в родительский компонент
    };

    const toggleExpand = () => {
        setIsExpanded(!isExpanded);
    }

    // Кастомные стили для react-select
    const customStyles = {
        control: (provided) => ({
            ...provided,
            border: '1px solid #ffffff40',
            borderRadius: '10px',
            boxShadow: 'none',
            '&:hover': {
                borderColor: '#ffffff60',
            },
            padding: '5px',
            backgroundColor: '#3b82f630',
            color: '#fff'
        }),
        option: (provided, state) => ({
            ...provided,
            backgroundColor: state.isSelected ? '#fff' : '#fff',
            color: state.isSelected ? '#fff' : '#000', 
            '&:hover': {
                backgroundColor: '#fff',
            }
        }),
        placeholder: (provided) => ({
            ...provided,
            color: '#fff',
        }),
        singleValue: (provided, state) => ({
            ...provided,
            color: '#fff', // Изменение цвета текста выбранного элемента
        }),
        dropdownIndicator: (provided) => ({
            ...provided,
            color: '#fff', // Цвет стрелки
            '&:hover': {
                color: '#ffffff90', // Цвет стрелки при наведении
            }
        }),
        clearIndicator: (provided) => ({
            ...provided,
            color: '#fff', // Цвет крестика
            '&:hover': {
                color: '#ffffff90', // Цвет крестика при наведении
            }
        }),
    };

    return (
        <Block style="primary">
            <div className='flex flex-row justify-between'>
                <div className='flex justify-start items-center gap-1'>
                    <h2 className="text-lg font-semibold">Фильтры:</h2>
                </div>
                <button onClick={toggleExpand}><Icon name={isExpanded ? 'ChevronUpIcon' : 'ChevronDownIcon'} /></button>
            </div>

            {isExpanded && (
                <motion.div className="grid gap-2" initial={{ maxHeight: 0, opacity: 0 }}
                animate={{ maxHeight: isExpanded ? 500 : 0, opacity: isExpanded ? 1 : 0 }}
                transition={{ duration: 0.5 }}>
                    {columns
                        .filter((col) => col.filter) // Только колонки с фильтром
                        .map((col) => (
                            <div key={col.accessor} className="filter-item mt-2">
                                {getUniqueValues(col.accessor).length > 0 ? (
                                    // Используем react-select для отображения выпадающего списка с уникальными значениями
                                    <Select
                                        id={col.accessor}
                                        onChange={(option) => handleChange(col.accessor, option ? option.value : '')}
                                        options={getUniqueValues(col.accessor).map(value => ({ value, label: value }))}
                                        styles={customStyles} // Применяем кастомные стили
                                        placeholder={col.Header}
                                        isClearable={true} // Добавляем возможность очистить выбор
                                    />
                                ) : (
                                    // Текстовый инпут для пользовательского ввода
                                    <input
                                        type="text"
                                        id={col.accessor}
                                        placeholder={col.Header}
                                        onChange={(e) => handleChange(col.accessor, e.target.value)}
                                        className="bg-slate-300 rounded-2xl py-2 px-5 text-center text-slate-300 w-full"
                                    />
                                )}
                            </div>
                        ))}
                </motion.div>
            )}
        </Block>
    );
}

export default Filter;