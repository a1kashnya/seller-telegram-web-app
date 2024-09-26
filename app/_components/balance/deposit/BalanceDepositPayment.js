"use client"

import { useState } from 'react';

import Section from "@/_components/_ui/Section"
import Block from "@/_components/_ui/Block"
import Button from '@/_components/_ui/Button'
import Input from '@/_components/_ui/Input'

const BalanceDepositPayment = ({ amount }) => {
    const [inputValue, setInputValue] = useState('')
    const [displayValue, setDisplayValue] = useState(amount)
    const [error, setError] = useState(false)

    const handleInputChange = (e) => {
        setInputValue(e.target.value);
    }

    const handleButtonClick = () => {
        inputValue < Number(process.env.NEXT_PUBLIC_MIN_PAYMENTS) ? setError(true) : setDisplayValue(inputValue)
    }
    return (
        <Section title="Пополнение баланса" url="/">
                {
                    displayValue === "other" ? (
                        <Block>
                            <div className="mb-3 font-medium">Введите сумму, которую хотите пополнить на баланс.</div>
                            <div>- Минимальная: 200₽. <br></br>- Максимальная: 5000₽.</div>
                            <Input type="number" value={inputValue} onChange={handleInputChange} className="w-full bg-slate-900 border border-slate-800 rounded-2xl p-3 text-center text-slate-300" placeholder="Введите сумму" />
                            { error && (<div className='text-red-500 text-center text-xs'>Сумма пополнения не может быть меньше {process.env.NEXT_PUBLIC_MIN_PAYMENTS} рублей.</div>)}
                            <Button type="button" name="Оплатить" icon="CreditCardIcon" handle={handleButtonClick}>Оплатить</Button>
                        </Block>
                    ) : (
                        <Block>
                            <div>Вы хотите пополнить баланс на <b>{displayValue} рублей</b>.</div>
                            <div className="mb-3">Оплата принимается ТОЛЬКО рублями!</div>
                            <div className="mb-3"><b>Как только оплатите - система автоматически увидит платеж и оповестит вас.</b></div>
                            <div>Cсылка на оплату:</div>
                            <div className="text-blue-500 font-medium">https://google.com</div>
                        </Block>
                    )
                }
        </Section>
    )
}

export default BalanceDepositPayment