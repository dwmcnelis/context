import './Page.css'
import { useContext } from 'react'
import { UserContext } from './UserProvider'

const Page = () => {
  const userDetails = useContext(UserContext)
  
  return (
    <div className="Page">
      <div>{userDetails.username} </div>
    </div>
  )
}

export default Page
