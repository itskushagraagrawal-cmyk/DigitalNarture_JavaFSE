import React, { useState } from 'react';

function Counter() {
    const [count, setCount] = useState(5);

    const handleIncrement = () => {
        setCount(count + 1);
        alert('Hello! Member!');
    };

    const handleDecrement = () => {
        setCount(count - 1);
    };

    const sayWelcome = (msg) => {
        alert(msg);
    };

    const handlePress = () => {
        alert('I was clicked');
    };

    return (
        <div>
            <p>{count}</p>
            <button onClick={handleIncrement}>Increment</button><br />
            <button onClick={handleDecrement}>Decrement</button><br />
            <button onClick={() => sayWelcome('welcome')}>Say welcome</button><br />
            <button onClick={handlePress}>Click on me</button>
        </div>
    );
}

export default Counter;
