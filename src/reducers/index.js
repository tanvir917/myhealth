import { combineReducers } from 'redux'

import app from './app'
import auth from './auth'
import chat from './chat'
import info from './info'
import users from './users'
import webrtc from './webrtc'
import authM from './authM';
import menus from './menus'

export default combineReducers({
  app,
  auth,
  chat,
  info,
  users,
  webrtc,
  authM,
  menus
})