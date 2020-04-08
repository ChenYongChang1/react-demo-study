import React from 'react'
import {Route, BrowserRouter  } from 'react-router-dom'
import HelloClass from '../components/HelloClass'
// import Home from '../views/Home'
import People from '../views/peopleInfo/People'

const Root = () => (
  <BrowserRouter>
    <Route path ="/people" component = {People} />
    <Route path ="/class" component = {HelloClass} />
    {/* <Route path ="" component = {Home} /> */}
  </BrowserRouter> 
)

export default Root;