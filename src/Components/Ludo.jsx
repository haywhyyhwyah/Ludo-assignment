import React, { useState } from "react";


export default function App() {
    const [ludonumber, setludonum] = useState("");

    const [ludsec, setludsec] = useState("")

    const number = () => {
        const number = Math.floor(1 + Math.random() * 6);
        setludonum(number);

        const secondNumber = Math.floor(1 + Math.random() * 6);
        setludsec(secondNumber);
    };

    return (
        <div className="appContainer">
            <div className="card">
                <h1 className="title">Ludo Dice</h1>

                <button onClick={number} className="btn">
                    Shake Dice
                </button>

                {ludonumber && (
                    <div className="result">
                        <p className="label">First Dice</p>
                        <p className="accountNumber">{ludonumber}</p>
                        <img src={`src/assets/dice${ludonumber}.png`} width={'60px'} alt="" />

                        <p className="label">Second Dice</p>
                        <p className="accountNumber">{ludsec}</p>
                        <img src={`src/assets/dice${ludsec}.png`} width={'60px'} alt="" />
                    </div>
                )}

            </div>
        </div>
    );
}