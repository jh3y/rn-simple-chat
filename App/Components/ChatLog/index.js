import React, { Component } from 'react'
import { View } from 'react-native'
import { uniqueId } from 'lodash'
import PropTypes from 'prop-types'
import ChatMessage from 'rn-simple-chat/App/Components/ChatMessage'
import ChatMessageType from 'rn-simple-chat/App/Types/ChatMessage.type'

import {
  Container,
} from './chatlog.style'

class ChatLog extends Component {
  static propTypes = {
    chats: PropTypes.arrayOf(
      ChatMessageType.isRequired
    ).isRequired,
  }

  render = () => {
    const { chats } = this.props
    return (
      <Container>
        {chats.map(chatMessage => (
          <ChatMessage
            chatMessage={chatMessage}
            key={uniqueId('chat-message--')}
            />
        ))}
      </Container>
    )
  }
}

export default ChatLog
