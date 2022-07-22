import './App.css';

import NavBar from './ui-components/NavBar'
import Home from './pages/Home'
import Login from './pages/Login'
import User from './pages/User';
import {Routes, Route, useNavigate} from 'react-router-dom'
import PrivateRoute from './components/ProtectedRoute';
import { View } from '@aws-amplify/ui-react'
import ProtectedRoutes from './components/ProtectedRoutes';

function App() {
  let navigate = useNavigate()
  const NavBarOverides = {
    "image":{
      "src": "https://s3-alpha-sig.figma.com/img/ab4d/1c23/1a4dfcbe5d83bc31b937d53da62b602f?Expires=1659312000&Signature=O2PnCpmbm5qUYGdx-f0rvRc0on0eMz68G278mYVAigp8zjD4k9kbwEamQN8jcPxwddLxWYlDGrprmtcEes4jYhTRHDmy-01IXRe0kAMOzQ4Ps7qA5qdKFtYjjxbkvxo6e5tzFqOF~aLX3chVEMIPaLigM9PYyAlykaR61Ckgt4KHbq99EWoD7RBVw6RgoukiCO0qvN12HIdpRvTAnsJdDrxxXfkexSNW~4vovpm3x0LBD7QlqG~Qd-QQyXu3FYfxb-H9XEuPjeObSvX6EgpSENnv8gRG-ppNzZBJqC3Xp97SZ3NsJUcq1wQv~34CJYvfrm1BRAltzfBOwwQJOIPPSQ__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA"
    },
    "Dashboard":{
      "children": "Home",
      "onClick": () => navigate('/')
    },
    "Jobs":{
      "children": "Login",
      "onClick": () => navigate('/login')
    }, 
    "Applicants":{
      "children": "User", 
      "onClick": () => navigate('/user')
    },
    "Company":{
      "children": ""
    }
  }

  return (
    <div>
      <View
        as="div"
        display="flex"
        justifyContent="center"
        alignItems="center"
      >
        <NavBar overrides={NavBarOverides}/>
      </View>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/login" element={<Login />} />
        <Route element={<ProtectedRoutes />}>
          <Route path="/user" element={<User />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
