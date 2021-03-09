import userActionTypes from './user.types';

export const checkUserSession = () => ({
    type: userActionTypes.CHECK_USER_SESSION,
});

// export const setCurrentUser = user => ({
//     type: userActionTypes.SET_CURRENT_USER,
//     payload: user
// });

export const googleSignInStart = () => ({
    type: userActionTypes.GOOGLE_SIGN_IN_START,
});

// export const googleSignInSuccess = (user) => ({
//     type: userActionTypes.GOOGLE_SIGN_IN_SUCCESS,
//     payload: user,
// });

// export const googleSignInFailure = (error) => ({
//     type: userActionTypes.GOOGLE_SIGN_IN_FAILURE,
//     payload: error,
// });

export const emailSignInStart = (emailAndPassword) => ({
    type: userActionTypes.EMAIL_SIGN_IN_START,
    payload: emailAndPassword,
});

// export const emailSignInSuccess = (user) => ({
//     type: userActionTypes.EMAIL_SIGN_IN_SUCCESS,
//     payload: user,
// });

// export const emailSignInFailure = (error) => ({
//     type: userActionTypes.EMAIL_SIGN_IN_FAILURE,
//     payload: error,
// });

export const signInSuccess = (user) => ({
    type: userActionTypes.SIGN_IN_SUCCESS,
    payload: user,
});

export const signInFailure = (error) => ({
    type: userActionTypes.SIGN_IN_FAILURE,
    payload: error,
});

export const signOutStart = () => ({
    type: userActionTypes.SIGN_OUT_START,
});

export const signOutSuccess = () => ({
    type: userActionTypes.SIGN_OUT_SUCCESS,
});

export const signOutFailure = (error) => ({
    type: userActionTypes.SIGN_OUT_FAILURE,
    payload: error,
});

export const signUpStart = (userCredentials) => ({
    type: userActionTypes.SIGN_UP_START,
    payload: userCredentials,
});

// Both are correct
// export const signUpSuccess = (userAuthAndDisplayName) => ({
//     type: userActionTypes.SIGN_UP_SUCCESS,
//     payload: userAuthAndDisplayName,
// });
export const signUpSuccess = ({ user, additionalData }) => ({
    type: userActionTypes.SIGN_UP_SUCCESS,
    payload: { user, additionalData },
});

export const signUpFailure = (error) => ({
    type: userActionTypes.SIGN_UP_FAILURE,
    payload: error,
});