export interface Message {
  user: string
  message: string
  timestamp: number
}

export const SEND_MESSAGE = 'SEND_MESSAGE'

interface SendMessageAction {
  type: typeof SEND_MESSAGE
  payload: Message
}

const root = (state = {}, action: SendMessageAction) => {
  return state
}

export default root
