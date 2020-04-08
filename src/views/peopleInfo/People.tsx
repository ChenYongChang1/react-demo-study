import React, { Component } from 'react'
import './people.scss'
import AddPeople from '../../components/people/AddPeople'

class People extends Component {
  render(){
    return <div className="people-box">
      <div className="people-header">
        <div className="people-header-active">
          添加用户
        </div>
        <div>
          查看用户
        </div>
      </div>
      <div className="people-content">
        <AddPeople />
      </div>
    </div>
  }
}
export default People