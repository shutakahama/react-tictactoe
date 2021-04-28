import { createSlice } from '@reduxjs/toolkit'

export function calculateWinner(squares) {
    const lines = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6],
    ];
    for (let i = 0; i < lines.length; i++) {
        const [a, b, c] = lines[i];
        if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
            return squares[a];
        }
    }
    return null;
}

const initialState = {
    history: [
        {
            squares: Array(9).fill(null)
            // squares: Array(9).fill("X")
        }
    ],
    stepNumber: 0,
    xIsNext: true
};

const playSlice = createSlice({
    name: 'play',
    initialState,
    reducers: {
        ClickSquare(state, action) {
            const history = state.history.slice(0, state.stepNumber + 1);
            const current = history[history.length - 1];
            const squares = current.squares.slice();
            if (!(calculateWinner(squares) || squares[action.payload.index])) {
                squares[action.payload.index] = state.xIsNext ? "X" : "O";
                state.history = history.concat([{squares: squares}])
                state.stepNumber = history.length
                state.xIsNext = !state.xIsNext
            }
        },
        JumpToPast(state, action) {
            state.stepNumber = action.payload.step
            state.xIsNext = (action.payload.step % 2) === 0
        }
    }
})

export const { ClickSquare, JumpToPast } = playSlice.actions
export default playSlice.reducer
