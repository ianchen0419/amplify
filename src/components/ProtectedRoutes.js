import React from 'react'
import { useAuth0 } from '@auth0/auth0-react'
import { Outlet } from 'react-router-dom'
import Login from '../pages/Login'

const ProtectedRoutes = () => {
    const {isAuthenticated} = useAuth0()

    return isAuthenticated ? <Outlet /> : <Login />
}

export default ProtectedRoutes