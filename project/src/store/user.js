import firebase from '@/plugins/firebase'

const firebaseLogin = (user) => {
  return new Promise((resolve, reject) => {
    firebase
      .auth()
      .signInWithEmailAndPassword(user.email, user.password)
      .then((data) => {
        const { displayName, email } = data.user
        resolve({ displayName, email })
      })
      .catch((error) => {
        reject(error)
      })
  })
}

const firebaseLogout = (user) => {
  return new Promise((resolve, reject) => {
    firebase
      .auth()
      .signOut()
      .then(() => {
        resolve()
      })
      .catch((error) => {
        reject(error)
      })
  })
}

const firebaseCreateUser = (user) => {
  return new Promise((resolve, reject) => {
    firebase
      .auth()
      .createUserWithEmailAndPassword(user.email, user.password)
      .then((data) => {
        resolve(data)
      })
      .catch((error) => {
        reject(error)
      })
  })
}
