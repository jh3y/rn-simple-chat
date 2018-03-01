import { delay } from 'redux-saga'
import { put } from 'redux-saga/effects'
import lorem from 'lorem-ipsum-react-native'

const emails = [
  'a@b.com',
  'test@rehashstudio.com',
  'steve@jobs.com',
  'hello@world.com',
  'foo@bar.com',
  'me@test.com',
]

function* addChatsSaga() {
  let i = 1
  // Instead of while(true) limit to 5 so can work with static
  chats = []
  // while (i < 5) {
  // const email = emails[Math.floor(Math.random()*emails.length)];
  for (let email of emails.sort()) {
    yield delay(1000)
    yield put({
      type: 'ADD_MESSAGE',
      user_email: email,
      message: lorem({}),
    })
  }
  // i++
  // }
}

export default addChatsSaga
