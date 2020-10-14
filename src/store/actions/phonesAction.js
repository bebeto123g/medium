import {
  FETCH_PHONES_FAILURE,
  FETCH_PHONES_START,
  FETCH_PHONES_SUCCESS,
} from '../actionsTypes'
import { fetchPhonesAPI } from '../../api'

export const fetchPhones = () => async (dispatch) => {
  dispatch({
    type: FETCH_PHONES_START,
  })
  try {
    const phones = await fetchPhonesAPI()
    dispatch({
      type: FETCH_PHONES_SUCCESS,
      payload: phones,
    })
  } catch (error) {
    dispatch({
      type: FETCH_PHONES_FAILURE,
      payload: error.message
    })
  }
}
