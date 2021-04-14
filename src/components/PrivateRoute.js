import React from 'react'
import {useSelector} from 'react-redux'
import {Switch, Route, Redirect} from 'react-router-dom'
import Home from '../pages/Home'
import Register from '../pages/Register'
import RegisterVendor from '../pages/RegisterVendor'
import RegisterMandor from '../pages/RegisterMandor'
import RegisterUser from '../pages/RegisterUser'
import LoginVendor from '../pages/LoginVendor'
import LoginMandor from '../pages/LoginMandor'
import LoginUser from '../pages/LoginUser'
import Service from '../pages/Service'
import ProfileUser from '../pages/ProfileUser'
import ProfileMandor from '../pages/ProfileMandor'
import ProfileVendor from '../pages/ProfileVendor'
import Cart from '../pages/Cart'

function PrivateRoute() {
    const userLoggedIn = useSelector((state)=>state.user.isLoggedIn)
    return (
        <Switch>
          <Route exact path = "/">
            <Home />
          </Route>
          <Route path = "/register">
            <Register />
          </Route>
          <Route path = "/registervendor">
            <RegisterVendor />
          </Route>
          <Route path = "/registermandor">
            <RegisterMandor />
          </Route>
          <Route path = "/registeruser">
            <RegisterUser />
          </Route>
          <Route path = "/loginvendor">
            <LoginVendor />
          </Route>
          <Route path = "/loginmandor">
            <LoginMandor />
          </Route>
          <Route path = "/loginuser">
            <LoginUser />
          </Route>
          <Route path = "/service">
          {userLoggedIn ? <Service /> : <Redirect to = "/loginuser"/> }
          </Route>
          <Route path = "/cart">
            {userLoggedIn ? <Cart /> : <Redirect to = "/loginuser"/> }
          </Route>
          <Route path = "/profileuser">
            <ProfileUser />
          </Route>
          <Route path = "/profilemandor">
            <ProfileMandor />
          </Route>
          <Route path = "/profilevendor">
            <ProfileVendor />
          </Route>
        </Switch>
    )
}

export default PrivateRoute