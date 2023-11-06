import React, { useState } from "react";
import DiceDisplay from "./DiceDisplay";

function GamePage() {
    const [clicked, setClicked] = useState(null);
    const [roll, setRoll] = useState(null);
    const [score, setScore] = useState(0);
    const [firstTime, setFirstTime] = useState(true);
    const [displayWin, setDisplayWin] = useState("");
    const [gameOver, setGameOver] = useState(false);

    console.log(clicked);

    function handleScore() {
        if (clicked === roll) {
            if (firstTime) {
                // Reset score to 5 when the user scores for the first time.
                setFirstTime(false);
                setScore(5);
            } else {
                setScore(score + 5);
            }
        } else {
            const newScore = score - 2;
            setScore(newScore < 0 ? 0 : newScore);
            if (newScore === 0) {
                setDisplayWin('You Lost');
                setGameOver(true);
            }
        }
        if (score >= 50) {
            setDisplayWin("You won!");
            setGameOver(true);
        }
    }

    function handleRoll() {
        if (gameOver || clicked === null) {
            return; // Don't roll if the game is over.
        }
        const max = 7;
        const min = 1;
        const randomInt = Math.floor(Math.random() * (max - min) + min);
        setRoll(randomInt);
        handleScore(); // Check the score when rolling.
    }

    function handleClick(num) {
        if (gameOver || clicked === num) {
            return; // Don't change the selection if the game is over or the number is already selected.
        }
        setClicked(num);
    }

    const squareStyle =
        "border border-solid border-gray-500 w-10 h-10 flex items-center justify-center rounded-md m-1 hover:bg-stone-500 hover:text-white cursor-pointer";

    return (
        <>
            <nav className="flex m-4 justify-between">
                <div className="flex-col font-semibold">
                    <p className="text-6xl justify-center px-3">{score}{displayWin}</p>
                    <p className="text-lg">Total score</p>
                </div>
                <div className="flex-col">
                    <ul className="flex flex-wrap mb-2">
                        {Array.from({ length: 6 }, (_, i) => (
                            <li
                                key={i}
                                className={`${squareStyle} ${
                                    clicked === i ? "bg-stone-500 text-white" : ""
                                }`}
                                onClick={() => handleClick(i)}
                            >
                                {i + 1}
                            </li>
                        ))}
                    </ul>
                    <p className="text-stone-800 font-bold ml-24">Select Number</p>
                </div>
            </nav>
            <DiceDisplay
                clicked={clicked}
                setScore={setScore}
                setClicked={setClicked}
                handleRoll={handleRoll}
                roll={roll}
                firstTime={firstTime}
                gameOver={gameOver}
            />
        </>
    );
}

export default GamePage;
