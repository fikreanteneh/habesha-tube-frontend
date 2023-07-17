import { configureStore } from "@reduxjs/toolkit"
import authReducer from "./ducks/auth"
import songReducer from "./ducks/songs"
import createSagaMiddleware from "redux-saga"
import authSaga from "./sagas/auth"
import songSaga from "./sagas/songs"

let sagaMiddleware = createSagaMiddleware()

export const store = configureStore({
    reducer: { auth: authReducer, songs: songReducer},
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware().concat(sagaMiddleware),
  })
    
sagaMiddleware.run(authSaga)
sagaMiddleware.run(songSaga)