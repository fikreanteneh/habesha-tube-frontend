import { createSlice } from "@reduxjs/toolkit";

const songSlice = createSlice({
    name: 'songs',
    initialState: {
        currentSongs: [],  
        mySongs: [],           
        songStatus: 'unloaded',        // unloaded | loaded | faild | loading
        songError: null,               //Null or error message
    },

    reducers: {

        loadSongs: (state, action) => {
            state.currentSongs = action.payload;
            state.songStatus = 'loaded';
            state.songError = null;
          },
        
        loadMySongs: (state, action) => {
          state.mySongs = action.payload;
          state.songStatus = 'loaded';
          state.songError = null;
        },


        addingSong: (state, action) => {
            state.currentSongs.shift(action.payload);
            state.mySongs.shift(action.payload)
            state.songStatus = 'loaded';
            state.songError = null;
            
        },

        deletingSong: (state, action) => {
          state.currentSongs = state.currentSongs.filter(song => song.id !== action.payload.id)
          state.mySongs = state.mySongs.filter(song => song.id !== action.payload.id)
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

        setSongLoading: (state) => {
          state.songStatus = 'loading';
          state.songError = null;
        },

        setSongFailed: (state, action) => {
          state.songStatus = 'failed';
          state.songError = action.payload;
        }
        
    },
})

export const {loadSongs, addingSong, deletingSong, editingSong, setSongLoading, setSongFailed, loadMySongs} = songSlice.actions;
export default songSlice.reducer;
