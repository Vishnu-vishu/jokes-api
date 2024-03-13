import {useState} from 'react'
import LoginForm from './components/LoginForm'
import Jokes from './components/Jokes'

const App = () => {
  const [loggedIn, setLoggedIn] = useState(false)

  const handleLogin = () => {
    setLoggedIn(true)
  }

  return (
    <div className="container">
      {!loggedIn ? <LoginForm onLogin={handleLogin} /> : <Jokes />}
    </div>
  )
}

export default App
