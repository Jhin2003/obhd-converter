import '../styles/Conversiontable.scss';

import { useState } from 'react';

import converter from '../converter';

const Conversiontable = () => {

    //to declare and display choices
    const choices = ["Binary", "Hexidecimal", "Octal", "Decimal"];
    const displayChoices = choices.map((choice) => {
        return (
            <option value={choice}>{choice}</option>
        )
    })
    //states
    const [choiceOne, setchoiceOne] = useState("Binary");
    const [choiceTwo, setchoiceTwo] = useState("Binary");
    const [input, setInput] = useState("");
    const [convertedBaseDisplay, setConvertedBaseDisplay] = useState("");
    const [result, setResult] = useState("");
    const [showResultsTable, setShowResultsTable] = useState(false);


    //functions for events
    const calculateResult = (e) => {
        e.preventDefault();
        setConvertedBaseDisplay(choiceTwo);
        setResult(converter(choiceOne, choiceTwo, input));
        console.log(result)
        setShowResultsTable(true);
        e.target.reset();

    }
    const handleNumberInput = (e) => {
        setInput(e.target.value);
        setShowResultsTable(false)
    }
    return (
        <div className="Conversiontable">
            <div className="basetable">
                <div className="Firstchoices">
                    <select onChange={e => setchoiceOne(e.target.value)}>{displayChoices}</select>

                </div>
                <div className='to'>
                    <h1>TO</h1>
                </div>
                <div className="Secondchoices">
                    <select onChange={e => setchoiceTwo(e.target.value)}>{displayChoices}</select>

                </div>
            </div>
            <div className="Numberinputtable">
                <form onSubmit={calculateResult}>
                    <input placeholder="Enter a number" onChange={handleNumberInput}></input>
                    <button>calculate</button>
                </form>
            </div>
            <div className="Resultstable">
                {showResultsTable && input !== "" ? <p>The {convertedBaseDisplay} equivalent is: {result}</p> : ""}
            </div>
        </div>
    )
}


export default Conversiontable;