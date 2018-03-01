import { connect } from 'react-redux'
import ChatLog from 'rn-simple-chat/App/Components/ChatLog'
import { USER_EMAIL } from 'rn-simple-chat/App/Constants/app.constants'

const mapStateToProps = state => ({
  chats: state.chats,
  currentUserEmail: USER_EMAIL,
})

const mapDispatchToProps = dispatch => ({})

const ConnectedChatLog = connect(
  mapStateToProps,
  mapDispatchToProps
)(ChatLog)

export default ConnectedChatLog
