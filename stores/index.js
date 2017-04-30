import firebase from 'firebase'

try {
  firebase.initializeApp({
    apiKey: "AIzaSyDBzgNY9Pc-2bpG1MbxXOWCLEx8X7KybbI",
    authDomain: "react-firebase-starter-64d76.firebaseapp.com",
    databaseURL: "https://react-firebase-starter-64d76.firebaseio.com"
  })
} catch (err) {
  if (!/already exists/.test(err.message)) {
    console.error('Firebase initialization error', err.stack)
  }
}

export const auth = firebase.auth()
export const db = firebase.database()
export const ref = firebase.database().ref()

export { default as initBaseStore } from './_base-store'
export { default as getAuthStore } from './_auth-store'
export { default as getHashStore } from './_hash-store'
