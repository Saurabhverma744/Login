import './index.css'

const Message = props => {
  const {isChange} = props
  const message = isChange ? 'Welcome User' : 'Please Login'
  return <h1 className="message">{message}</h1>
}
export default Message
