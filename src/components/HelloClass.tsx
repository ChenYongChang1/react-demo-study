import React, { Component } from 'react'
import { Button } from 'antd'

import HelloHOC from './HelloHOC'

import HelloHooks from './HelloHooks'

interface Greeting {
  name: string;
  firstName?: string;
  lastName?: string;
}
interface State {
  count: number
}

class HelloClass extends Component<Greeting, State> {
  state: State = {
    count: 0
  }
  static defaultProps = {
    firstName: '',
    lastName: ''
  }
  render() {
    return (
      <div>
        <HelloHOC loadding={true} />
        <HelloHooks name={'cyc'} />
        <p>您点击了 {this.state.count}</p>
        <Button onClick={() => {
          this.setState({
            count: this.state.count+1
          })
        }}>Hello {this.props.name}</Button>
      </div>
    )
  }
}

export default HelloClass