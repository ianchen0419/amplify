import React from 'react'
import LoginButton from '../components/LoginButton'
import LogoutButton from '../components/LogoutButton'
import { View } from '@aws-amplify/ui-react'
import { useAuth0 } from '@auth0/auth0-react'

const Login = () => {
  const { isAuthenticated } = useAuth0()

  return (
    <View
      as="div"
      display="flex"
      direction="row"
      justifyContent="center"
      alignItems="center"
    >
        {isAuthenticated ? <LogoutButton /> : <LoginButton />}
    </View>
  )
}

export default Login