import { configureStore } from '@reduxjs/toolkit'
import PlayReducer from "./PlayReducer";

export default configureStore({
    reducer: {
        play: PlayReducer
    },
})
