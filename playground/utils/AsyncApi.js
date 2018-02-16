import { AsyncStorage } from 'react-native'

export function addDeck(title) {
  AsyncStorage.setItem(title, JSON.stringify({
    title: title,
    questions: [],
  })).then(data => console.log(data))
}

export function addQuestion(title, pair) {
  AsyncStorage.getItem(title)
    .then(item => {
      const data = JSON.parse(item)
      data.questions.push(pair)
      AsyncStorage.setItem(title, JSON.stringify(data))
    })
}
