import './App.css';

import {useState} from "react";

function App() {
    let [result, setResult] = useState('');

    const clearOne = e => {
        if (result.includes('error')) {
            return;
        }else {
        setResult(result.slice(0, result.length - 1));
        }
    };

    const getNumber = e => {
        if (result.includes('0') && result.length === 1 && e.target.name === '0') return;
        if (result.includes('0') && result.length === 1 && e.target.name === '00') return;
        if (result.includes('.') && e.target.innerText === '.' && (result.length ===2 || result.length === 1)) return;
        if (result.includes('error')) return;
        setResult(result.concat(e.target.name));
    };

    const getResult = e => {
        try {
            setResult(eval(result).toString());
        } catch (err) {
            setResult('error');
        }
    };

    const getClear = e => {
        setResult('');
    };

    const getPlusMinus = () => {
        if (result.includes('error')) return;
        if (result.charAt(0) === '-') {
            setResult(result.substring(1));
        } else {
            setResult('-' + result);
        }
    };


    return (
        <div className={'container'}>
            <div className="App">
                <h1>Calculator</h1>

                <div className={'form'}>
                    <form>
                        <input className={'inpTab'} type="text" name={'tab'} value={result} placeholder={'0'}/>
                    </form>
                </div>

                <div className={'btnBlock'}>
                    <button name={'C'} className={'btn altBtn'} onClick={clearOne}>C</button>
                    <button name={'CLEAR'} className={'btn altBtn'} onClick={getClear}>CLEAR</button>
                    <button name={'C'} className={'btn altBtn'} onClick={getPlusMinus}>+/-</button>
                    <button name={'/'} className={'btn altBtn'} onClick={getNumber}>&divide;</button>
                    <button name={'7'} className={'btn'} onClick={getNumber}>7</button>
                    <button name={'8'} className={'btn'} onClick={getNumber}>8</button>
                    <button name={'9'} className={'btn'} onClick={getNumber}>9</button>
                    <button name={'*'} className={'btn altBtn'} onClick={getNumber}>*</button>
                    <button name={'4'} className={'btn'} onClick={getNumber}>4</button>
                    <button name={'5'} className={'btn'} onClick={getNumber}>5</button>
                    <button name={'6'} className={'btn'} onClick={getNumber}>6</button>
                    <button name={'+'} className={'btn altBtn'} onClick={getNumber}>+</button>
                    <button name={'1'} className={'btn'} onClick={getNumber}>1</button>
                    <button name={'2'} className={'btn'} onClick={getNumber}>2</button>
                    <button name={'3'} className={'btn'} onClick={getNumber}>3</button>
                    <button name={'-'} className={'btn altBtn'} onClick={getNumber}>-</button>
                    <button name={'0'} className={'btn'} onClick={getNumber}>0</button>
                    <button name={'00'} className={'btn'} onClick={getNumber}>00</button>
                    <button name={'.'} className={'btn'} onClick={getNumber}>.</button>
                    <button name={'='} className={'btn altBtn'} onClick={getResult}>=</button>
                </div>
            </div>
        </div>
    );
}

export default App;
