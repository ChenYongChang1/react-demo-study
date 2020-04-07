import React from 'react'
import {Route, BrowserRouter  } from 'react-router-dom'
import HelloClass from '../components/HelloClass'
import Home from '../views/Home'

const Root = () => (
  <BrowserRouter>
    <Route path ="/" component = {Home} />
    <Route path ="/class" component = {HelloClass} />
  </BrowserRouter> 
)

export default Root;