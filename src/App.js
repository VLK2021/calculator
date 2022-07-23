import './App.css';
import {useState} from "react";

function App() {

    let [result, setResult] = useState('');

    const allClear = e => {
        setResult('');
    }

    const getNumber = e => {
        setResult(result.concat(e.target.name));
    }

    const getResult = e => {
        setResult(eval(result).toString());
    }

    const getOff = e => {
        setResult('');
    }


    return (
        <>
            <div className="App">
                <h1>Calculator</h1>

                <form>
                    <input className={'inpTab'} type="text" name={'tab'} value={result} placeholder={'0'}/>
                </form>

                <div className={'btnBlock'}>
                    <button name={'C'} className={'btn btnBig'} onClick={allClear}>C</button>
                    <button name={'OFF'} className={'btn'} onClick={getOff}>OFF</button>
                    <button name={'/'} className={'btn'} onClick={getNumber}>/</button>
                    <button name={'7'} className={'btn'} onClick={getNumber}>7</button>
                    <button name={'8'} className={'btn'} onClick={getNumber}>8</button>
                    <button name={'9'} className={'btn'} onClick={getNumber}>9</button>
                    <button name={'*'} className={'btn'} onClick={getNumber}>*</button>
                    <button name={'4'} className={'btn'} onClick={getNumber}>4</button>
                    <button name={'5'} className={'btn'} onClick={getNumber}>5</button>
                    <button name={'6'} className={'btn'} onClick={getNumber}>6</button>
                    <button name={'+'} className={'btn'} onClick={getNumber}>+</button>
                    <button name={'1'} className={'btn'} onClick={getNumber}>1</button>
                    <button name={'2'} className={'btn'} onClick={getNumber}>2</button>
                    <button name={'3'} className={'btn'} onClick={getNumber}>3</button>
                    <button name={'-'} className={'btn'} onClick={getNumber}>-</button>
                    <button name={'0'} className={'btn'} onClick={getNumber}>0</button>
                    <button name={'00'} className={'btn'} onClick={getNumber}>00</button>
                    <button name={'.'} className={'btn'} onClick={getNumber}>.</button>
                    <button name={'='} className={'btn'} onClick={getResult}>=</button>
                </div>
            </div>
        </>
    );
}

export default App;
