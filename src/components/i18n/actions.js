import {setLocale} from 'react-redux-i18n'

export const SET_LANG = 'CONFIG:SET_LANG'

export const setLanguage = (code) => {
  return dispatch => {
    dispatch(setLocale(code))
  }
}
