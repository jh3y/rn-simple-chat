import styled from 'styled-components/native'
import { USER_EMAIL } from 'rn-simple-chat/App/Constants/app.constants'

const avatarSize = 30
const Avatar = styled.Image`
  border-color: #000;
  border-radius: ${avatarSize / 2};
  border-width: 3;
  height: ${avatarSize};
  width: ${avatarSize};
  align-self: flex-start;
`

const Container = styled.View`
  align-items: center;
  background-color: ${p => (p.email === USER_EMAIL ? 'red' : 'blue')};
  flex-direction: row;
  align-self: ${p => (p.email === USER_EMAIL) ? 'flex-end' : 'flex-start'};
  min-height: 40;
  max-width: 80%;
  padding-top: 10;
  padding-right: 10;
  padding-bottom: 10;
  padding-left: 10;
`

const Message = styled.Text`
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
`

export { Avatar, Container, Message }
