import React, { Component } from 'react'
import Hello from './Hello'

interface Loadding {
  loadding: boolean;
}

function HelloHOC<P>(WrappendComponent: React.ComponentType<P>) {
  return class extends Component<P & Loadding> {
    render() {
      const { loadding, ...props } = this.props
      return loadding ? <div>loadding...</div>  : <WrappendComponent {...props as P} />
    }
  }
}

export default HelloHOC(Hello)