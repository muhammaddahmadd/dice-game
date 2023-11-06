import React, { useState } from "react";
import Rules from "./Rules";
import dices from '../public/images/dices.png';
import dice1 from "../public/images/dice_1.png";
import dice2 from "../public/images/dice_2.png";
import dice3 from "../public/images/dice_3.png";
import dice4 from "../public/images/dice_4.png";
import dice5 from "../public/images/dice_5.png";
import dice6 from "../public/images/dice_6.png";

const diceImg = [dice1, dice2, dice3, dice4, dice5, dice6];

function DiceDisplay({ clicked, setClicked, setScore, handleRoll, roll, firstTime, gameOver }) {
    const [show, setShow] = useState(false);
console.log(roll)
    function handleReset() {
        setClicked(null);
        setScore(0);
        if (show) {
            setShow(false);
        }
    }

    function handleRules() {
        setShow(!show);
    }

    return (
        <div className="flex flex-col justify-center items-center mt-32">
            {clicked !== null ? (
                <img
                    src={firstTime ? dices : diceImg[roll-1]}
                    alt="dice"
                    className="mb-2"
                />
            ) : (
                <img src={dices} alt="dice" className="mb-2" />
            )}
            <button className="text-stone-700 font-semibold mb-2 text-lg" onClick={handleRoll}>
                Click on Dice to roll
            </button>
            <div className="flex flex-col">
                <button
                    className="rounded-lg px-8 md:px-22 sm:px-20 py-2 md:py-3 mb-4 sm:py-2 w-full lg:w-2/4 lg:mr-36 sm:w-12/3 text-stone-800 border border-solid border-stone-700 bg-white"
                    onClick={handleReset}
                    disabled={clicked === null || gameOver}
                >
                    Reset Score
                </button>
                <button
                    className="rounded-lg px-8 lg:ml-0 md:px-22 md:py-3 py-2  lg:w-2/4 lg:mr-36 sm:px-20 sm:py-2 sm:w-12/3 sm: bg-stone-800 text-stone-100"
                    onClick={handleRules}
                >
                    {show ? "Hide Rules" : "Show Rules"}
                </button>
            </div>
            {show && <Rules />}
        </div>
    );
}

export default DiceDisplay;
