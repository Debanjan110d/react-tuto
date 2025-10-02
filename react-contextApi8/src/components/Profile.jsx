import React,{useContext} from 'react'
import UserContext from '../Context/userContext'

function Profile() {
  const user = React.useContext(UserContext)
  if(!user) return null
  return (
    <div>
        Profile:{user.username}

        <h1>More Component</h1>
    </div>
  )
}

export default Profile