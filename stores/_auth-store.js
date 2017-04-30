import { observable, computed } from 'mobx'
import Router from 'next/router'
import firebase from 'firebase'
import { auth, ref } from './'

let store = null

class Store {
  @observable user = null
  @observable authIsPending = true

  constructor () {
    this.unwatchAuth = auth.onAuthStateChanged(user => {
      this.user = user
      this.authIsPending = false
      // if(user) {
      //   Router.push('/diary')
      // }
    })
  }

  cleanup () {
    if (this.unwatchAuth) {
      this.unwatchAuth()
    }
  }

  register = (email, password) => {
    firebase.auth().createUserWithEmailAndPassword(email, password)
      .then((user) => {
          return ref.child(`users/${user.uid}`)
            .set({
              email: user.email,
              uid: user.uid
            })
            .then(() => user)
        }
      )
  }

  signIn = (email, password) => {
    firebase.auth().signInWithEmailAndPassword(email, password)
  }

  resetPassword = (email) => {
    firebase.auth().sendPasswordResetEmail(email)
  }

  signOut = () => {
    auth.signOut().then(function () {
    }, function (error) {
      console.log(error)
    })
  }

  @computed get isAuthenticated() {
    return !!this.user
  }
}

export default function getStore () {
  if (store === null) {
    store = new Store()
  }
  return store
}
