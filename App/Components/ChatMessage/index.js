import React, { Component } from 'react'
import { View, Text, StyleSheet, Image } from 'react-native'
import PropTypes from 'prop-types'
import GravatarApi from 'gravatar-api'
import ChatMessageType from 'rn-simple-chat/App/Types/ChatMessage.type'
import { USER_EMAIL } from 'rn-simple-chat/App/Constants/app.constants'
import {
  Avatar,
  Container,
  Message,
  MessageWrapper,
} from './chatmessage.style'

class ChatMessage extends Component {
  static propTypes = {
    chatMessage: ChatMessageType.isRequired,
  }
  render = () => {
    const { user_email: email, message } = this.props.chatMessage

    const avatarUrl = GravatarApi.imageUrl({
      email,
      parameters: { size: '50', d: 'monsterid' },
    }).replace('http', 'https')

    return (
      <Container email={email}>
        { email !== USER_EMAIL ?
          <Avatar source={{ uri: avatarUrl }} />
          :
          null
        }
        <MessageWrapper email={email}>
          <Message>{message}</Message>
        </MessageWrapper>
      </Container>
    )
  }
}

export default ChatMessage
