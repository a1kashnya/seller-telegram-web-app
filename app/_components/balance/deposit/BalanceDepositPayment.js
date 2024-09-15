"use client"

import { useState } from 'react';

import Title from "@/_components/_ui/Title"

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
        <div>
            <Title name="Пополнить баланс" btn />
            <div className="grid gap-3 border-t border-b py-5 border-slate-800">
                {
                    displayValue === "other" ? (
                        <>
                            <div className="fle flex-col border-l-[6px] border-blue-500 bg-[#3b82f630] p-3 pl-4 rounded-lg text-white mb-2">
                                <div className="mb-3">Введите сумму, которую хотите пополнить на баланс.</div>
                                <div>- Минимальная: 200₽.</div>
                                <div>- Максимальная: 5000₽.</div>
                            </div>
                            <input type="text" value={inputValue} onChange={handleInputChange} className="w-full bg-slate-900 border border-slate-800 rounded-2xl p-3 text-center text-slate-300" placeholder="Введите сумму" />
                            <button onClick={handleButtonClick} className="block w-full bg-blue-500 text-blue-100 text-xs text-center rounded-2xl font-medium uppercase px-2 py-4">Оплатить</button>
                        </>
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
            </div>
        </div>
    )
}

export default BalanceDepositPayment