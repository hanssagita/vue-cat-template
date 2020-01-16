import axios from 'axios'

function getDataViaApi (url, callBack, errorHandler) {
  axios.get(url).then(callBack).catch(errorHandler)
}

function postDataViaApi (url, callBack, errorHandler, data) {
  axios.post(url, data).then(callBack).catch(errorHandler)
}

function putDataViaApi (url, callBack, errorHandler, data) {
  axios.put(url, data).then(callBack).catch(errorHandler)
}

function deleteDataViaApi (url, callBack, errorHandler) {
  axios.get(url).then(callBack).catch(errorHandler)
}

export {
  getDataViaApi,
  postDataViaApi,
  putDataViaApi,
  deleteDataViaApi
}
