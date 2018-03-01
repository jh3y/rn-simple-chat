import React, { Component } from 'react'
import { View } from 'react-native'
import { uniqueId } from 'lodash'
import PropTypes from 'prop-types'
import ChatMessage from 'rn-simple-chat/App/Components/ChatMessage'
import ChatMessageType from 'rn-simple-chat/App/Types/ChatMessage.type'

import { Container } from './chatlog.style'

class ChatLog extends Component {
  static propTypes = {
    chats: PropTypes.arrayOf(ChatMessageType.isRequired).isRequired,
  }

  _keyExtractor = () => uniqueId('chat-message--')

  render = () => {
    const { chats } = this.props
    return (
      <Container
        data={chats}
        renderItem={({ item }) => <ChatMessage chatMessage={item} />}
        keyExtractor={this._keyExtractor}
      />
    )
  }
}

export default ChatLog
