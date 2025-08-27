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
                        <p className="label">Player 1</p>
                        <p className="accountNumber">{ludonumber}</p>

                        <p className="label">Player 2</p>
                        <p className="accountNumber">{ludsec}</p>
                    </div>
                )}

            </div>
        </div>
    );
}