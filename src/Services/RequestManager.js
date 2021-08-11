import {
  LOGIN,
  STYLES_LIST,
  STYLES_LIST_EVENT,
  LOGIN_EVENT,
  REMOVE_STYLE,
  REMOVE_STYLE_EVENT,
  ADD_STYLE,
  ADD_STYLE_EVENT,
  EDIT_STYLE,
  EDIT_STYLE_EVENT,
  USERS_LIST_EVENT,
  USERS_LIST,
  ADD_USER,
  ADD_USER_EVENT,
  DELETE_USER,
  DELETE_USER_EVENT,
  UPDATE_USER_DATA,
  UPDATE_USER_DATA_EVENT,
  FEEDS_LIST,
  FEEDS_LIST_EVENT,
  EDIT_USER,
  EDIT_USER_EVENT,
  ADD_POST,
  ADD_POST_EVENT,
  DELETE_VIDEO,
  DELETE_PHOTO,
  DELETE_VIDEO_EVENT,
  DELETE_PHOTO_EVENT,
  UPDATE_POST_EVENT,
  UPDATE_POST,
  STATISTIC_DATA,
  STATISTIC_DATA_EVENT,
  SETTINGS_LIST,
  SETTINGS_LIST_EVENT,
  SETTING_CREATE_UPDATE, SETTING_CREATE_UPDATE_EVENT
} from "./RequestData"

const IS_TEST_ENV = window.location.href.indexOf('test') !== -1;
const DEV_MODE = process.env.NODE_ENV === 'development';

export const API_URL = IS_TEST_ENV /*|| DEV_MODE*/ ? 'http://test.dzook.ai/api' : 'https://app.dzook.ai/api';

export default class RequestManager {
  static instance = null;
  static token;

  constructor(enforcer) {
    this.setupAPI();
  }

  static getInstance() {
    if (RequestManager.instance === null) {
      RequestManager.instance = new RequestManager();
    }

    return RequestManager.instance;
  }

  setupAPI(event) {

  }

  sendRequest(type, method, path, body, isFormData = false) {
    const requestURL = API_URL + path;
    const headers = {
      'Accept': '*/*',
      'Authorization': 'Bearer ' + RequestManager.token,
      'Access-Token': 'eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiIxIiwianRpIjoiYWUwMjQ1Yzc2NzUzMjI4ZDM4Nzc4MjgwMjBjMTViMjQ2YjE5OGNmM2U1NWJiYjMwNTVmZWJiNDYwZTk1ZTQyZTViYmQyNzE3OGVmZjRkZmYiLCJpYXQiOjE2MjA5NDIxMTEsIm5iZiI6MTYyMDk0MjExMSwiZXhwIjoxNjUyNDc4MTExLCJzdWIiOiIxIiwic2NvcGVzIjpbXX0.X0blcmVebHtoAKmhwidyusraMrzUOKqPtUL9tCfm06jRr0z9rIIRCcrLXQ8m3tOdwLjrYMEvWEaAB1PZ6XxYLla0p6pHrxQpfRogVwCFFxKw2AefE90U_cZw7cgrIW7x04Q6ZwJCNNpXzrsesGTbsnskcyn3DI6oYKdR_dtX1VJHp7w2p-acLX08HcshPMabUiAiIrfDozwezVJg01urYix47zqt5rDaHd5mdEQR8yNsLouNTtA0qBHXXdyrxdsuxZu01PkEtVbPtOOvpILEa-PyX_ZsBm_2EPXpNamKxfM-MIc6jpeZAJCyLfKIZUdmqgfjzmCa1lWsNy4GnA-HY-OnVUbsvIbx3XIMHgRZlKGQh_W0ov96xEHsD5xU_rlrJt8775jROXhOd1XxLl_0_tc1WrTBeHFxtXfz1FA1n9i83iw3KBOuFlIvqxYEv3Rulfmx5e0Hwv1hN1JNDvGc0BmRH7HALpc0U9UJxJPLlj08AUAIPZez4ifUe4RfHjXjt3Du-nwXBPmcQNxb_2DIurSDwweK6sjQgZlmX2mtAxf5OQO7YtECV3uWdygoD1xnlNX0KpBvlaxZROVvnsMr6XQ_wBZ-b-fmT-y3L2Xs3M-aHOl8wZY3hnItMxKhGmgH_QY5bLgyba6e-bRKLGY93q4tALsDdO8eRQLW_saWsPE'
    }

    if (isFormData === false) {
      headers['Content-Type'] = "application/json; charset=utf-8";
    }

    fetch(requestURL, {
      headers: headers,
      method: method,
      body: isFormData ? body : (method === 'GET' ? null : JSON.stringify(body))
    })
      .then(response => response.json())
      .then(data => this.handleRequest(type, data))
  }

  handleRequest(type, response) {
    switch (type) {
      case LOGIN:
        window.dispatchEvent(new CustomEvent(LOGIN_EVENT, {detail: response}))
        break;
      case STATISTIC_DATA:
        window.dispatchEvent(new CustomEvent(STATISTIC_DATA_EVENT, {detail: response}))
        break;
      case STYLES_LIST:
        window.dispatchEvent(new CustomEvent(STYLES_LIST_EVENT, {detail: response}))
        break;
      case ADD_STYLE:
        window.dispatchEvent(new CustomEvent(ADD_STYLE_EVENT, {detail: response}))
        break;
      case EDIT_STYLE:
        window.dispatchEvent(new CustomEvent(EDIT_STYLE_EVENT, {detail: response}))
        break;
      case REMOVE_STYLE:
        window.dispatchEvent(new CustomEvent(REMOVE_STYLE_EVENT, {detail: response}))
        break;
      case FEEDS_LIST:
        window.dispatchEvent(new CustomEvent(FEEDS_LIST_EVENT, {detail: response}))
        break;
      case USERS_LIST:
        window.dispatchEvent(new CustomEvent(USERS_LIST_EVENT, {detail: response}))
        break;
      case ADD_USER:
        window.dispatchEvent(new CustomEvent(ADD_USER_EVENT, {detail: response}))
        break;
      case EDIT_USER:
        window.dispatchEvent(new CustomEvent(EDIT_USER_EVENT, {detail: response}))
        break;
      case DELETE_USER:
        window.dispatchEvent(new CustomEvent(DELETE_USER_EVENT, {detail: response}))
        break;
      case UPDATE_USER_DATA:
        window.dispatchEvent(new CustomEvent(UPDATE_USER_DATA_EVENT, {detail: response}))
        break;
      case UPDATE_POST:
        window.dispatchEvent(new CustomEvent(UPDATE_POST_EVENT, {detail: response}))
        break;
      case ADD_POST:
        window.dispatchEvent(new CustomEvent(ADD_POST_EVENT, {detail: response}))
        break;
      case DELETE_VIDEO:
        window.dispatchEvent(new CustomEvent(DELETE_VIDEO_EVENT, {detail: response}))
        break;
      case DELETE_PHOTO:
        window.dispatchEvent(new CustomEvent(DELETE_PHOTO_EVENT, {detail: response}))
        break;
      case SETTINGS_LIST:
        window.dispatchEvent(new CustomEvent(SETTINGS_LIST_EVENT, {detail: response}))
        break;
      case SETTING_CREATE_UPDATE:
        window.dispatchEvent(new CustomEvent(SETTING_CREATE_UPDATE_EVENT, {detail: response}))
        break;
      default:
        console.log('>> RESPONSE TYPE NOTE DETECTED:', type)
    }
  }
}