import {SET_LANG} from './actions'

const initialState = [
  {
    code: "en",
    label: "English"
  },
  {
    code: "de",
    label: "Dutch"
  }
]

export default (state = initialState, action) => {
  return state
}
