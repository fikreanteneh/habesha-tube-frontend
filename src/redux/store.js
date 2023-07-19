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
      getDefaultMiddleware({serializableCheck: false}).concat(sagaMiddleware),
    devTools: import.meta.env.VITE_APP_CODE == "PRODUCTION",
  })
    
sagaMiddleware.run(authSaga)
sagaMiddleware.run(songSaga)