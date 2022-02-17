import './Nav.css'
import { useContext } from 'react'
import { UserDispatchContext } from './UserProvider'

const Nav = () => {
  const setUserDetails = useContext(UserDispatchContext)

  const bob = () => {
    setUserDetails({
        username: 'bob@example.com'
    })
  }
  const sue = () => {
    setUserDetails({
      username: 'sue@example.com'
    })
  }

  return (
    <div className="Nav">
      <button onClick={bob}>Bob</button>
      <button onClick={sue}>Sue</button>
    </div>
  )
}

export default Nav
