import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    card:null,
    editCard:false,
}

const cardSlice = createSlice({
    name:"card",
    initialState,
    reducers: {
        setCard: (state,action) => {
            state.card = action.payload
        },
        setEditCard: (state,action) => {
            state.editCard = action.payload
        },
        resetCardState: (state) => {
            state.card = null
            state.editCard = false
        },
    },
})

export const {setCard,setEditCard,resetCardState} = cardSlice.actions

export default cardSlice.reducer