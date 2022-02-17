import './App.css'
import { UserProvider } from './UserProvider'
import Nav from './Nav'
import Page from './Page'

const App = () => {
  return (
    <div className="App">
      <UserProvider>
        <Nav />
        <Page />
      </UserProvider>
    </div>
  )
}

export default App
