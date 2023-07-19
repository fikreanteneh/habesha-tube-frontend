import { createSlice } from "@reduxjs/toolkit";

const songSlice = createSlice({
    name: 'songs',
    initialState: {
        currentSongs: [],  
        mySongs: [],           
        songStatus: 'unloaded',        
        songError: null,       
    },

    reducers: {

        loadSongs: (state, action) => {
            state.currentSongs = action.payload;
            state.songStatus = "loaded"
            state.songError = null;
          },
        
        loadMySongs: (state, action) => {
          state.mySongs = action.payload;
          state.songStatus = "loaded"
          state.songError = null;
        },


        addingSong: (state, action) => {
            state.currentSongs.unshift(action.payload)
            state.mySongs.unshift(action.payload)
            state.songStatus = 'loaded';
            state.songError = null;
        },

        deletingSong: (state, action) => {
          const tempCurrent = state.currentSongs.filter(song => song.id !== action.payload.id)
          state.currentSongs = tempCurrent
          const tempMy = state.mySongs.filter(song => song.id !== action.payload.id)
          state.mySongs = tempMy
          state.songStatus = 'loaded';
          state.songError = null;
        },

        editingSong: (state, action) => {
          state.currentSongs = state.currentSongs.map(song => {
            if (song.id === action.payload.id) {
              return action.payload
            }
            return song
          })
          state.mySongs = state.mySongs.map(song => {
            if (song.id === action.payload.id) {
              return action.payload
            }
            return song
          })
            state.songStatus = 'loaded';
            state.songError = null;
        },

        setSongLoading: (state, action) => {
          state.songStatus = action.payload;
          state.songError = null;
        },

        setSongFailed: (state, action) => {
          state.songStatus = 'failed';
          state.songError = action.payload;
        },

        resetSongsFaild: (state) => {
          state.songStatus = 'loaded';
          state.songError = null;
        },

        clearSongs: (state) => {
          state.currentSongs = [];
          state.mySongs = [];
          state.songStatus = 'unloaded';
          state.songError = null;
        }
        
    },
})

export const {loadSongs, addingSong, deletingSong, editingSong, setSongLoading, setSongFailed, loadMySongs, resetSongsFaild, clearSongs} = songSlice.actions;
export default songSlice.reducer;
