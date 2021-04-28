import React, {useState} from 'react';
import {calculateWinner, ClickSquare, JumpToPast} from "./PlayReducer";
import {useDispatch, useSelector} from "react-redux";
import {Board} from "./board";


export const Game = () => {
    const dispatch = useDispatch()

    const history = useSelector(state => state.play.history)
    const stepNumber = useSelector(state => state.play.stepNumber)
    const xIsNext = useSelector(state => state.play.xIsNext)

    // const [status, setStatus] = useState('hello')

    const jumpTo = (step) => {
        dispatch(JumpToPast({step: step}))
    }

    const moves = history.map((step, move) => {
        const desc = move ?
            'Go to move #' + move :
            'Go to game start';
        return (
            <li key={move}>
                <button onClick={() => jumpTo(move)}>{desc}</button>
            </li>
        );
    });

    const character = () => {
        const current = history[stepNumber]
        const winner = calculateWinner(current.squares)
        const chr = winner ?
            'Winner: ' + winner :
            'Next player: ' + (xIsNext ? 'X' : 'O');
        return (
            <div>{chr}</div>
        );
    }
    // if (winner) {
    //     setStatus('Winner: ' + winner)
    // } else {
    //     setStatus('Next player: ' + (xIsNext ? 'X' : 'O'))
    // }

    return (
        <div className="game">
            <div className="game-board">
                <Board/>
            </div>
            <div className="game-info">
                {character()}
                {/*<div>{status}</div>*/}
                <ol>{moves}</ol>
            </div>
        </div>
    )
}

