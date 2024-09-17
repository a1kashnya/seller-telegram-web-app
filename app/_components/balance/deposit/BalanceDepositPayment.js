"use client"

import { useState } from 'react';

import Section from "@/_components/_ui/Section"
import Block from "@/_components/_ui/Block"
import Button from '@/_components/_ui/Button'
import Input from '@/_components/_ui/Input'

const BalanceDepositPayment = ({ amount }) => {
    const [inputValue, setInputValue] = useState('');
    const [displayValue, setDisplayValue] = useState(amount);

    const handleInputChange = (e) => {
        setInputValue(e.target.value);
    }

    const handleButtonClick = () => {
        setDisplayValue(inputValue);
    }
    return (
        <Section title="Пополнение баланса" backButton>
                {
                    displayValue === "other" ? (
                        <Block>
                                <div className="mb-3">Введите сумму, которую хотите пополнить на баланс.</div>
                                <div>- Минимальная: 200₽. <br></br>- Максимальная: 5000₽.</div>
                            <input value={inputValue} onChange={handleInputChange} className="w-full bg-slate-900 border border-slate-800 rounded-2xl p-3 text-center text-slate-300" placeholder="Введите сумму" />
                            <Button type="button" name="Оплатить" icon="CreditCardIcon" handle={handleButtonClick}>Оплатить</Button>
                        </Block>
                    ) : (
                        <div className="fle flex-col border-l-[6px] border-blue-500 bg-[#3b82f630] p-3 pl-4 rounded-lg text-white mb-2">
                            <div>Вы хотите пополнить баланс на <b>{displayValue} рублей</b>.</div>
                            <div className="mb-3">Оплата принимается ТОЛЬКО рублями!</div>
                            <div className="mb-3"><b>Как только оплатите - система автоматически увидит платеж и оповестит вас.</b></div>
                            <div>Cсылка на оплату:</div>
                            <div className="text-blue-500 font-medium">https://google.com</div>
                        </div>
                    )
                }
        </Section>
    )
}

export default BalanceDepositPayment