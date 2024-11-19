import React, { useState } from 'react'
import '../css/Currency.css'
import { FaArrowCircleRight } from "react-icons/fa";
import axios from 'axios';

function Currency() {

    const [amount, setAmount] = useState(0);
    const [fromCurrency, setFromCurrency] = useState('USD');
    const [toCurrency, setToCurrency] = useState('TRY');
    const [result, setResult] = useState(0);

    let BASE_URL = 'https://api.freecurrencyapi.com/v1/latest';
    let API_KEY = 'fca_live_Rdv29xgEU4jZR0XhiQVsj3UO4nfzF83CndZ7TC0m'

    const exchange = async () => {
        const response = await axios.get(`${BASE_URL}?apikey=${API_KEY}&base_currency=${fromCurrency}`)
        const value = response.data.data[toCurrency];
        setResult((value * amount).toFixed(2));
    }

    return (
        <div className='currency-div'>

            <div style={{
                fontFamily: 'arial', backgroundColor: 'black', color: 'white',
                width: '100%', textAlign: 'center'
            }}>
                <h3>DÖVİZ KURU UYGULAMASI</h3>
            </div>

            <div style={{ marginTop: '25px' }}>
                <input value={amount} onChange={(e) => setAmount(e.target.value)}
                    type='number' className='amount' />
                <select onChange={(e) => setFromCurrency(e.target.value)} className='from-currency-option'>
                    <option>USD</option>
                    <option>EUR</option>
                    <option>TRY</option>
                </select>

                <FaArrowCircleRight style={{ fontSize: '25px', marginRight: '10px' }} />

                <select onChange={(e) => setToCurrency(e.target.value)} className='to-currency-option'>
                    <option>TRY</option>
                    <option>USD</option>
                    <option>EUR</option>
                </select>

                <input value={result} onChange={(e) => setResult(e.target.value)} type='number' className='result' />
            </div>

            <div>
                <button
                    onClick={exchange}
                    className='exchange-button'>Çevir
                </button>
            </div>

        </div>
    )
}

export default Currency