import { call, takeEvery, put, all } from 'redux-saga/effects'
import { sagaActions } from './sagaActions'
import {setAuthLoading, setAuthFailed, setCurrentUser } from '../ducks/auth';
import { signUpWithEmail, signinWithEmail } from '../request/auth';


export function* handleSigninWithEmail(action) {
    try {
        yield put(setAuthLoading("signin"));
        const user = yield call(signinWithEmail, action.payload);
        yield put(setCurrentUser(user));
    } catch (error) {
        yield put(setAuthFailed(error.message));
    }
  }
  
export function* handleSignup(action) {
    try {
        yield put(setAuthLoading("signup"));
        const user = yield call(signUpWithEmail, action.payload);
        yield put(setCurrentUser(user));
    } catch (error) {
        yield put(setAuthFailed(error.message));
    }
}

export function* watchSigninWithEmail() {
    yield takeEvery(sagaActions.SIGNIN, handleSigninWithEmail);
}

export function* watchSignup() {
    yield takeEvery(sagaActions.SIGNUP, handleSignup);
}

export default function* authSaga() {
    yield all([
        watchSigninWithEmail(),
        watchSignup()
    ])

}