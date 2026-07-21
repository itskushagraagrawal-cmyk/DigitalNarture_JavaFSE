import React, { useState } from 'react';

function CurrencyConvertor() {
    const [amount, setAmount] = useState('');
    const [currency, setCurrency] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        const converted = parseInt(amount || 0) * 80;
        alert(`Converting to  ${currency} Amount is ${converted}`);
    };

    return (
        <div>
            <h2 style={{color: 'green'}}>Currency Convertor!!!</h2>
            <form onSubmit={handleSubmit}>
                <div style={{ marginBottom: '10px' }}>
                    <label style={{ display: 'inline-block', width: '80px' }}>Amount: </label>
                    <input 
                        type="text" 
                        value={amount} 
                        onChange={(e) => setAmount(e.target.value)} 
                    />
                </div>
                <div style={{ marginBottom: '10px' }}>
                    <label style={{ display: 'inline-block', width: '80px', verticalAlign: 'top' }}>Currency: </label>
                    <textarea 
                        value={currency} 
                        onChange={(e) => setCurrency(e.target.value)}
                        style={{ height: '30px' }}
                    />
                </div>
                <button style={{ marginLeft: '80px' }} type="submit">Submit</button>
            </form>
        </div>
    );
}

export default CurrencyConvertor;
