import {
  FETCH_PHONES_FAILURE,
  FETCH_PHONES_START,
  FETCH_PHONES_SUCCESS,
} from '../actionsTypes'

const initState = {
  phones: [],
  statusError: true,
  errorMessage: null,
}

export const phonesReducer = (state = initState, { type, payload }) => {
  switch (type) {
    case FETCH_PHONES_START:
      return {
        ...state,
      }

    case FETCH_PHONES_SUCCESS:
      return {
        ...state,
        phones: payload,
      }

    case FETCH_PHONES_FAILURE:
      return {
        ...state,
        statusError: true,
        errorMessage: payload,
      }

    default:
      return state
  }
}
