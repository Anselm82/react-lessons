import { createSlice } from "@reduxjs/toolkit"

const initialState = {
  characters: []
}

const charactersSlice = createSlice({
  name: "characters",
  initialState,
  reducers: {
    getCharacters: state => state.characters,
    addCharacter: (state, action) => {
      state.characters.push({name: action.payload, race: "supersaiyan"})
    }
  }
})

export const {
  getCharacters,
  addCharacter
} = charactersSlice.actions

export default charactersSlice.reducer