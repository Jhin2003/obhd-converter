import '../styles/Conversiontable.scss';

import { useState } from 'react';

import { binaryToDecimal, binaryToOctal } from '../converter'

const Conversiontable = (props) => {

    const displayChoices = props.choices.map((choice) => {
        return (
            <option value={choice}>{choice}</option>
        )
    })

    const [input, setInput] = useState("");
    const [result, setResult] = useState("");
    const [choiceOne, setchoiceOne] = useState("Binary");
    const [choiceTwo, setchoiceTwo] = useState("Binary");


    const calculateResult = (e) => {
        e.preventDefault();
        setResult(input === "" ? "please enter a number first" : choiceOne === 'Binary' && choiceTwo === 'Decimal' ? binaryToDecimal(input) :
            choiceOne === 'Binary' && choiceTwo === 'Octal' ? binaryToOctal(input) :
                'cant convert same bases')
    }



    return (
        <div className="Conversiontable">
            <div className="basetable">
                <div className="Firstchoices">
                    <select onChange={e => setchoiceOne(e.target.value)}>{displayChoices}</select>
                    <h1>{choiceOne}</h1>
                </div>
                <div className="Secondchoices">
                    <select onChange={e => setchoiceTwo(e.target.value)}>{displayChoices}</select>
                    <h1>{choiceTwo}</h1>
                </div>
            </div>

            <div className="Numberinputtable">
                <form onSubmit={calculateResult}>
                    <input placeholder="Enter a number" onChange={e => { setInput(e.target.value) }}></input>
                    <button>calculate</button>
                </form>
            </div>
            <div className="Resultstable">
                <p>The binary equivalent is: </p>
                <p>{result}</p>
            </div>

        </div >
    )
}


export default Conversiontable;