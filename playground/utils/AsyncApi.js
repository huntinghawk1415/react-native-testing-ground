import { AsyncStorage } from 'react-native'

export function addDeck(title) {
  AsyncStorage.setItem(title, JSON.stringify({
    title: title,
    questions: [],
  }))
  alert('Added!')
}

export function addQuestion(title, pair) {
  AsyncStorage.getItem(title)
    .then(item => {
      const data = JSON.parse(item)
      data.questions.push(pair)
      AsyncStorage.setItem(title, JSON.stringify(data))
    })
}

export function getAllData() {
  let arr = []

  AsyncStorage.getAllKeys()
    .then(keys => {
      keys.map(s => {
        if(s !== 'UdaciCards:notifications') {
          AsyncStorage.getItem(s)
          .then(item => {
            arr.push([s, JSON.parse(item)])
          })
          .catch(err => err)
        }
      })
    })
    .catch(err => err)

  return arr
}
