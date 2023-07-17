import { call, takeEvery, put, all } from 'redux-saga/effects'
import { sagaActions } from './sagaActions'
import {setAuthLoading, setAuthFailed, setCurrentUser } from '../ducks/auth';
import { signUpWithEmail, signinWithEmail } from '../request/auth';
import { signInChecker, signUpChecker } from '../../error/errorHandler';


export function* handleSigninWithEmail(action) {
    try {
        yield put(setAuthLoading());
        // yield call(signInChecker, action.payload);
        const user = call(signInChecker, action.payload);
        yield put(setCurrentUser(user));
    } catch (error) {
        console.log("catchhhhhh ------  ",error.message)
        yield put(setAuthFailed(error.message));
    }
  }
  
export function* handleSignup(action) {
    try {
        yield put(setAuthLoading());
        yield call(signUpChecker, action.payload);
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