import {useDispatch, useSelector} from "react-redux";
import {ClickSquare} from "./PlayReducer";
import React from "react";

export const Board = () => {
    const history = useSelector(state => state.play.history)
    const stepNumber = useSelector(state => state.play.stepNumber)
    const current = history[stepNumber]
    const dispatch = useDispatch()
    const handleClick = (index) => {
        dispatch(ClickSquare({index: index}))
    }

    const renderSquare = (idx) => {
        return (
            <button className="square" onClick={() => handleClick(idx)}>
                {current.squares[idx]}
            </button>
        );
    }

    return (
        <div>
            <div className="board-row">
                {renderSquare(0)}
                {renderSquare(1)}
                {renderSquare(2)}
            </div>
            <div className="board-row">
                {renderSquare(3)}
                {renderSquare(4)}
                {renderSquare(5)}
            </div>
            <div className="board-row">
                {renderSquare(6)}
                {renderSquare(7)}
                {renderSquare(8)}
            </div>
        </div>
    )
}