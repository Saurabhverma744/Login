import {Component} from 'react'
import Login from '../Login'
import Message from '../Message'
import Logout from '../Logout'
import './index.css'

class Home extends Component {
  state = {
    isChange: false,
  }

  onClickButton = () => {
    this.setState(prevState => ({isChange: !prevState.isChange}))
  }

  render() {
    const {isChange} = this.state
    return (
      <div className="container">
        <div className="card">
          <Message isChange={isChange} />
          {isChange ? (
            <Logout logout={this.onClickButton} />
          ) : (
            <Login login={this.onClickButton} />
          )}
        </div>
      </div>
    )
  }
}

export default Home
