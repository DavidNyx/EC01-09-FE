import React from 'react'
import {Switch, Route} from 'react-router-dom'
import ActivationEmail from '../components/body/auth/ActivationEmail'
import Login from '../components/body/auth/Login'
import Register from '../components/body/auth/Register'
import GuestPage from './GuestPage'
import HomePage from './HomePage'
import ProductDetailPage from './ProductDetailPage'

const Pages = () => {
  return (
    <section>
       <Switch>
             <Route path="/home" component={HomePage} exact/>
             <Route path="/guest" component={GuestPage} exact/>
             <Route path="/login" component={Login} exact/>
             <Route path="/register" component={Register} exact/>
             <Route path="/auth/activate/:activation_token" component={ActivationEmail} exact />
             <Route path="/productdetail" component={ProductDetailPage} exact />
       </Switch>
    </section>
  )
}

export default Pages