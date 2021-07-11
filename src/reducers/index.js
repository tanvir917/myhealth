import { combineReducers } from 'redux'

import app from './app'
import auth from './auth'
import chat from './chat'
import info from './info'
import users from './users'
import webrtc from './webrtc'
import authM from './authM';
import menus from './menus'
import doctorList from './doctorList'
import appointment from './appointment'
import categoryreducer from './categoryreducer'
import queries from './queries'

export default combineReducers({
  app,
  auth,
  chat,
  info,
  users,
  webrtc,
  authM,
  menus,
  doctorList,
  appointment,
  categoryreducer,
  queries
})