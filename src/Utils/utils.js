import produce from 'immer'

const ELECTROPIA_AUTHORIZATION_KEY = 'ELECTROPIA_AUTHORIZATION_KEY_3489534'

function stateUpdater(state, property) {

  return produce(state, draftState => {
    Object.keys(property).forEach(key => {
      draftState[key] = property[key]
    });
  })
}

const getAccessToken = () => {
    return localStorage.getItem(ELECTROPIA_AUTHORIZATION_KEY)
}

const setAccessToken = (accessToken) => {
    return localStorage.setItem(ELECTROPIA_AUTHORIZATION_KEY, accessToken);
}

const removeAccessToken = () => {
    return localStorage.removeItem(ELECTROPIA_AUTHORIZATION_KEY);
}

export {
    getAccessToken,
    setAccessToken,
    removeAccessToken,
    stateUpdater
}