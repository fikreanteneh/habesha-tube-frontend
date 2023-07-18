import { call, takeEvery, put, all } from 'redux-saga/effects'
import { sagaActions } from './sagaActions'
import {addingSong, editingSong, deletingSong, loadSongs, setSongLoading, setSongFailed, loadMySongs } from '../ducks/songs';
import { addSong, getSong, editSong, deleteSong, getSongById } from '../request/songs';


export function* handleAddSong(action) {
    try {
      yield put(setSongLoading("submitting"));
      const song = yield call(addSong, action.payload);
      yield put(addingSong(song));
    } catch (error) {
      yield put(setSongFailed(error.message));
    }
  }
  

export function* handleLoadSongs() {
    try {
      yield put(setSongLoading("loading"));
      const songs = yield call(getSong);
      yield put(loadSongs(songs.currData));
    } catch (error) {
      yield put(setSongFailed(error.message));
    }
  }

  export function* handleLoadSongsById(action) {
    try {
      yield put(setSongLoading("loading"));
      const songs = yield call(getSongById, action.payload);
      yield put(loadMySongs(songs.currData));
    } catch (error) {
      yield put(setSongFailed(error.message));
    }
  }

export function* handleEditSong(action) {
    try {
        yield put(setSongLoading("submitting"));
        const song = yield call(editSong, action.payload);
        yield put(editingSong(song));
    } catch (error) {
        yield put(setSongFailed(error.message));
    }
}

export function* handleDeleteSong(action) {
    try {
        yield put(setSongLoading("submitting"));
        const user = yield call(deleteSong, action.payload);
        yield put(deletingSong(user));
    } catch (error) {
        yield put(setSongFailed(error.message));
    }
}

export function* watchAddSong() {
    yield takeEvery(sagaActions.ADDSONG, handleAddSong);
}

export function* watchLoadSong() {
    yield takeEvery(sagaActions.LOADSONGS, handleLoadSongs);
}

export function* watchEditSong() {
    yield takeEvery(sagaActions.EDITSONG, handleEditSong);
}

export function* watchDeleteSong() {
    yield takeEvery(sagaActions.DELETESONG, handleDeleteSong);
}

export function* watchLoadSongsById() {
    yield takeEvery(sagaActions.MYSONGS, handleLoadSongsById);
}

export default function* authSaga() {
    yield all([
        watchAddSong(),
        watchLoadSong(),
        watchEditSong(),
        watchDeleteSong(),
        watchLoadSongsById()
    ])

}