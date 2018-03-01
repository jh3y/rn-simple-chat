import styled from 'styled-components/native'
import { USER_EMAIL } from 'rn-simple-chat/App/Constants/app.constants'

const avatarSize = 50
const Avatar = styled.Image`
  border-color: #000;
  border-radius: ${avatarSize / 2};
  border-width: 3;
  height: ${avatarSize};
  width: ${avatarSize};
`

const Container = styled.View`
  align-items: center;
  background-color: ${p => (p.email === USER_EMAIL ? 'red' : 'blue')};
  flex-direction: row;
  justify-content: flex-end;
`

const Message = styled.Text``

export { Avatar, Container, Message }
